"use client";
import React from "react";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import AnimatedData from "@public/Animation4.json";
const ContactForm = () => {
  return (
    <div className="">
      <div className="w-full ">
        <div className="grid grid-cols-2">
          <Lottie animationData={AnimatedData} className="" />
          <div>
            <h1 className="text-3xl font-semibold mb-6 text-center">
              Contact Us
            </h1>
            <form className="bg-gray-900 shadow-lg rounded-lg p-8 space-y-6">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-indigo-500"
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-indigo-500"
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-indigo-500"
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 rounded-lg font-semibold text-white hover:bg-indigo-500 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
