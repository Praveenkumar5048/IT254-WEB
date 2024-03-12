const Register = require('../../models/register');

function registrationController() {
  return {
    async getTotalRegisteredUsers(req, res) {
      const { eventId } = req.params;

      try {
        const totalUsers = await Register.countDocuments({ event: eventId });
        return res.status(200).json({ totalUsers });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    },

    async registerUser(req, res) {
      const { userId, eventId } = req.body;

      try {
        const existingRegistration = await Register.findOne({ user: userId, event: eventId });
        if (existingRegistration) {
          return res.status(400).json({ message: 'User is already registered for the event' });
        }

        const registration = new Register({
          user: userId,
          event: eventId,
        });

        await registration.save();

        console.log('User registered successfully for the event');
        return res.status(200).json({ message: 'User registered successfully for the event' });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    },

    async unregisterUser(req, res) {
        const { userId, eventId } = req.body;
      
        try {
          // Find and delete the registration entry based on user and event
          const deletedRegistration = await Register.findOneAndDelete({ user: userId, event: eventId });
      
          if (!deletedRegistration) {
            return res.status(404).json({ message: 'Registration entry not found' });
          }
          console.log('User unregistered successfully from the event');
          return res.status(200).json({ message: 'User unregistered successfully from the event' });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ message: 'Internal Server Error' });
        }
      },      
  };
}

module.exports = registrationController;
