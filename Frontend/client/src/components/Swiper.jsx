import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import { Calendar, MapPin, Users } from "lucide-react";

const MySwiper = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      keyboard: {
        enabled: true,
      },
      mousewheel: {
        thresholdDelta: 70,
      },
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  const events = [
    {
      title: "Local Music Festival",
      date: "Aug 15-17, 2023",
      location: "Central Park",
      image:
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Music",
      attendees: "5000+",
    },
    {
      title: "Food Truck Fiesta",
      date: "Sep 5, 2023",
      location: "Downtown Square",
      image:
        "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Food",
      attendees: "2000+",
    },
    {
      title: "Art in the Park",
      date: "Sep 12, 2023",
      location: "Riverside Gardens",
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Art",
      attendees: "1000+",
    },
    {
      title: "Local Theater Performance",
      date: "Sep 20-22, 2023",
      location: "Community Playhouse",
      image:
        "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Theater",
      attendees: "500",
    },
    {
      title: "Farmers Market",
      date: "Every Saturday",
      location: "Main Street",
      image:
        "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Market",
      attendees: "3000+",
    },
    {
      title: "Local Sports Tournament",
      date: "Oct 1-3, 2023",
      location: "City Stadium",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Sports",
      attendees: "10000+",
    },
    {
      title: "Tech Meetup",
      date: "Oct 15, 2023",
      location: "Innovation Hub",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Technology",
      attendees: "300",
    },
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center bg-gradient-135 from-gray-100 to-blue-200 py-12">
      <div className="mb-8">
        <h2 className="font-poppins font-semibold text-4xl text-gray-800 text-center shadow-sm">
          Upcoming Local Events
        </h2>
      </div>
      <div className="swiper w-full max-w-6xl px-5 py-12">
      <div className="swiper-wrapper">
          {events.map((event, index) => (
            <div
              key={index}
              className="swiper-slide"
              style={{ width: "300px", height: "400px" }}
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
                  {event.category}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                  <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                  <div className="flex items-center text-sm mb-1">
                    <Calendar className="w-4 h-4 mr-2" /> {event.date}
                  </div>
                  <div className="flex items-center text-sm mb-1">
                    <MapPin className="w-4 h-4 mr-2" /> {event.location}
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="w-4 h-4 mr-2" /> {event.attendees} attendees
                  </div>
                </div>
              </div>
            </div>
          ))}
      
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default MySwiper;
