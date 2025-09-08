import React, { useState } from "react";
import { NavLink } from "react-router";

const Card = ({ title, image ,link}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      className="w-full max-w-sm sm:w-64 md:w-64 lg:w-64 p-4 bg-gray-500 shadow-lg rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105"
      onClick={() => setOpen(!open)}
      onKeyDown={(e) => e.key === "Enter" && setOpen(!open)}
    >
      {/* Card Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-60   object-cover rounded-xl "
      />

      {/* Card Title */}
      <h2
        className={`mt-3 text-lg  h-13  font-bold transition-colors duration-300   ${
          open ? "text-white" : "hover:text-red-800"
        }`}
      >
        {title}
      </h2>

      {/* Extra Info */}
      <NavLink to={link}>
        <button className="mt-3 bg-gray-900 text-white rounded-lg py-1 px-10 font-bold cursor-pointer hover:text-red-500">
          More
        </button>
      </NavLink>
    </div>
  );
};

export default function MainA() {
  const cards = [
    {
      title: "Chan Dany-ចាន់ ដានី",
      image: "src/image/image/chan-Dany/image.png",
      link: "/cdn",
    },
    {
      title: "Chim Suthy -​ ឈឹម សុធី",
      image: "src/image/image/Chim Suthy/photo_10_2025-08-11_20-16-46.jpg",
      link : "/cs",
    },
    {
      title: "Kheom Kolab-គឿម កូឡាប",
      image: "src/image/image/Kheom Kolab/photo_1_2025-08-11_20-19-20.jpg",
      link : "/kk",
    },
    {
      title: "Khchao Tuch-ខ្ចៅ​ ទូច",
      image: "src/image/image/kmao-tuch/image.png",
      link : "/kt",
    },
    {
      title: "Ou Vanndy-អ៊ូ វណ្ណឌី",
      image: "src/image/image/Ou Vanndy/img.png",
      link : "/ov",
    },
    {
      title: "Ouk Chim Vichet-អ៊ុក ឈឹមវិចិត្រ",
      image: "src/image/image/Ouk-Chim-Vichet/3.jpg",
      link: "/ocv",
    },
    {
      title: "Pen Robot-ភិន​ រ៉ូបត",
      image: "src/image/image/PenRobot/image.png",
      link: "/pr",
    },
    {
      title: "Reun Sokhom-រឿន សុខុម",
      image: "src/image/image/Reun-Sokhom/image.png",
      link : "/rs"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      {/* Title Section */}
      <h1 className="text-4xl font-extrabold text-gray-800  mb-10 tracking-wide">
        ARTIST
      </h1>

        
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}





