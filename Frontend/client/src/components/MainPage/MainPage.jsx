import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import MySwiper from "../Swiper";
import Event from "../Event/Event";
import ContactForm from "../Contact";

function HomeComponent() {
  return (
    <div className="scrollable-container bg-gradient-to-b from-gray-100 to-white">
      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex items-center justify-center text-center text-white"
      >
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/video/2022/01/15/104514-666958130_large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="relative z-10 bg-black bg-opacity-50 p-12 rounded-lg">
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            className="text-6xl font-bold mb-4"
          >
            Welcome to Vibe Hub
          </motion.h1>
          <motion.p
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
            className="text-xl mb-8"
          >
            Your gateway to the best local events and experiences.
          </motion.p>
          <motion.a
            href="#explore"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl transform hover:scale-105"
          >
            Explore Now
          </motion.a>
        </div>
      </motion.div>

      {/* Feature Section */}
      <div className="container mx-auto py-16" id="explore">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {[
            {
              icon: "calendar-alt",
              title: "Exclusive Events",
              description: "Curated events just for you.",
            },
            {
              icon: "map-marker-alt",
              title: "Local Experiences",
              description: "Unique experiences in your area.",
            },
            {
              icon: "users",
              title: "Community Connect",
              description: "Meet like-minded individuals.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:bg-blue-50 transform hover:scale-105 cursor-pointer"
            >
              <i
                className={`text-blue-600 fas fa-${feature.icon} text-4xl mb-4`}
              ></i>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Swiper Component */}
      <MySwiper />

      {/* Event Section */}
      <Event />

      {/* Video Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Watch Our Story</h2>
          <div
            className="relative w-full h-0"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Vibe Hub Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Vibe Hub is fantastic! I've discovered so many amazing local events.",
                author: "John Doe",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
              },
              {
                text: "The best platform for connecting with others and experiencing new things.",
                author: "Jane Smith",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
              },
              {
                text: "A must-visit site for anyone looking to explore their local area.",
                author: "Emily Johnson",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-100 p-8 rounded-lg shadow-lg text-center hover:shadow-2xl transform hover:scale-105"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="italic text-gray-600 mb-4">{testimonial.text}</p>
                <h4 className="font-semibold text-lg">
                  - {testimonial.author}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              question: "How do I sign up?",
              answer:
                "Simply click on the 'Sign Up' button at the top of the page and follow the instructions.",
            },
            {
              question: "What kind of events can I find?",
              answer:
                "From music festivals to art exhibitions, Vibe Hub offers a wide range of events to suit all interests.",
            },
            {
              question: "Is there a mobile app available?",
              answer:
                "Yes, Vibe Hub has a mobile app available for both Android and iOS devices.",
            },
            {
              question: "How do I contact support?",
              answer:
                "You can reach our support team through the 'Contact' section of the website or app.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:bg-blue-50 transform hover:scale-105 cursor-pointer"
            >
              <h3 className="text-2xl font-semibold mb-4">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
}

export default HomeComponent;
