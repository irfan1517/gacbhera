import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./FacultyCarousel.css";

const facultyData = [
    {
        id: 1,
        name: "Dr. Muhammad Akram",
        designation: "Principal",
        qualification: "PhD (Physics)",
        image: "/images/dr akram.jfif",
    },
    {
        id: 2,
        name: "Mr Umer Farooq",
        designation: "Assistant Professor",
        qualification: "MPhil (Physics)",
        image: "/images/umer farooq.jpg",
    },
    {
        id: 3,
        name: "Mr. Riaz Hussain",
        designation: "Assistant Professor",
        qualification: "MPhil (Urdu)",
        image: "/images/riaz hussain.jpg",
    },
    {
        id: 4,
        name: "Dr. Luqman Haider",
        designation: "Assistant Professor",
        qualification: "PhD (Islamic Studies)",
        image: "/images/luqman haider.jpg",
    },
    {
        id: 5,
        name: "Mr. Hafiz Sanaullah",
        designation: "Assistant Professor",
        qualification: "MPhil (Islamic Studies)",
        image: "/images/sana ullah.jpg",
    },
        {
        id: 6,
        name: "Mr. Hafiz Muhammad Irfan",
        designation: "Assistant Professor",
        qualification: "MA (Islamic Studies)",
        image: "/images/hafiz irfan.jpg",
    },

];

const FacultyCarousel = () => {
    return (
        <div className="faculty-carousel-container">
            <h1 className="faculty-info">Faculty Members</h1>
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                spaceBetween={20}
                breakpoints={{
                    0: {
                        slidesPerView: 1, // Mobile
                    },
                    640: {
                        slidesPerView: 3, // Tablet
                    },
                    1024: {
                        slidesPerView: 4, // Desktop
                    },
                }}
            >
                {facultyData.map((faculty) => (
                    <SwiperSlide key={faculty.id}>
                        <div className="faculty-card">
                            <img
                                src={faculty.image}
                                alt={faculty.name}
                                className="faculty-image"
                            />

                            <h1 className="faculty-designation">
                                {faculty.name}
                            </h1>

                            <h2 className="faculty-qualification">
                                {faculty.designation} - {faculty.qualification}
                            </h2>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default FacultyCarousel;
