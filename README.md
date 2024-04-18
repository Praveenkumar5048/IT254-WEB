## Club Event Management

### Overview
The Club Event Management System is a comprehensive web application built to streamline event organization within clubs or organizations. Powered by Mycalendar.js library, it provides a fully-fledged calendar interface for admins to schedule and manage events effortlessly. Users can explore upcoming events, register for participation, and provide feedback for concluded events, enhancing engagement and community interaction.

### MVC Architecture Usage

#### Model (M)

- **MongoDB database**: The MongoDB database is used to store user and event details. This represents the Model layer of the MVC architecture. Data is stored in collections based on defined schemas, which are implemented in the "model" folder of the backend.

#### View (V)

- **Mycalendar.js**: This library provides an interactive and customizable calendar interface. The calendar view is part of the frontend (React) and represents the View layer. Users can view upcoming events and interact with the calendar to register for events.

#### Controller (C)

- **Express (Backend)**: The Express framework is used to handle API connections and routes logic. This part of the backend is implemented in the "controller" folder and acts as the Controller layer in the MVC architecture.  Endpoints for creating, updating, and deleting events handle requests from the frontend (View) to perform CRUD (Create, Read, Update, Delete) operations on events stored in the database (Model).  User registration and feedback endpoints facilitate user interaction with the application, such as registering for events and providing feedback.


### Features
- Event Scheduling: Admins can easily create, update, and delete events on the calendar.
- Event Details: Each event listing includes essential information such as date, time, venue, and event description.
- User Registration: Users can register for events directly through the platform.
- Feedback System: Participants can provide feedback and rating for attended events, facilitating continuous improvement.
- Responsive Design: The application is designed to adapt seamlessly to various devices and screen sizes.

### Installation

1. Clone the repository:

   ```bash
   https://github.com/Praveenkumar5048/IT254-WEB.git 
2. ```bash
   cd Backend   
   npm install
   npm run dev 
3. ```bash
   cd Frontend  
   npm install
   npm run dev
