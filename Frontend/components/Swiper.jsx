import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function SwiperCoverflow() {
    const cards = [
        {
            title: "Code",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et risus ac risus fermentum vestibulum.",
            imagepath: "./Code.png"
        },
        {
            title: "Capital",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et risus ac risus fermentum vestibulum.",
            imagepath: "./Capital.png"
        },
        {
            title: "Gadget",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et risus ac risus fermentum vestibulum.",
            imagepath: "./Gadget.png"
        },
        {
            title: "Media",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et risus ac risus fermentum vestibulum.",
            imagepath: "./Media.png"
        },
        {
            title: "Robotics",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et risus ac risus fermentum vestibulum.",
            imagepath: "./Robotics.png"
        }
        ,{
            title: "Script",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et risus ac risus fermentum vestibulum.",
            imagepath: "./Script.png"
        },
        {
            title: "Tectonic",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et risus ac risus fermentum vestibulum.",
            imagepath: "./Tectonic.png"
        }
    ];

    return (
        <div className="App">
            <Swiper
                navigation
                pagination={{ clickable: true }}
                loop={true} 
                effect="coverflow"
                coverflowEffect={{
                    rotate: 0,
                    stretch: -50,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                slidesPerView={3} 
                autoplay={{ delay: 3000 }}
                centeredSlides
                spaceBetween={10}
                style={{ height: "700px" }} 
                className = 'w-3/4'
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div className={`w-full flex flex-col mt-6 text-gray-700 bg-gray-200 shadow-md bg-clip-border rounded-xl hover:shadow-lg border-4 border-teal-600`}>
                            <img
                                src={card.imagepath}
                                alt="card-image"
                                width={300}
                                height={400}
                                className={`mx-auto shadow-lg rounded-2xl align-middle border-none`}
                            />
                            <div className="p-6">
                                <h5 className="block mb-2 font-sans text-xl text-center antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    {card.title}
                                </h5>
                                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                    {card.details}
                                </p>
                            </div>
                            <div className='mx-auto mt-1'>
                                <button
                                    type="button"
                                    className="mx-auto text-white bg-teal-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                >
                                    See More
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
