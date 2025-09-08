

import React from "react";

function Cdn() {
  const images = [
    "image/chan-Dany/photo_1_2025-08-12_09-46-10.jpg",
    "image/chan-Dany/photo_2_2025-08-12_09-46-10.jpg",
    "image/chan-Dany/photo_3_2025-08-12_09-46-10.jpg",
    "image/chan-Dany/photo_10_2025-08-12_09-46-10.jpg",
    "image/chan-Dany/photo_7_2025-08-12_09-46-10.jpg",
    "image/chan-Dany/photo_8_2025-08-12_09-46-10.jpg",
    "image/chan-Dany/photo_5_2025-08-12_09-46-10.jpg",
    "image/chan-Dany/photo_6_2025-08-12_09-46-10.jpg",
  ];

  return (
    <div>
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10 p-10 tracking-wide">
        Chan Dany - ចាន់​​ ដានី
      </h1>

      {/* Biography */}
      <section className="w-[90%] m-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10 tracking-wide">
          Biography
        </h1>
        <p className="w-full leading-relaxed text-gray-700">
          <strong>Chan Dany</strong> (born in 1984 in Prey Veng province) lives
          and works in Phnom Penh, Cambodia. He studied art at Reyum Art School
          and Workshop from 2002-2007. His contemporary works employ a flexible
          knowledge of <em>Kbach Rachana</em> or Khmer decorative forms – an
          ancient code of organic shapes and patterns applied in different
          styles and his delicate work made with pencil shavings, which from a
          distance appear to be embroidery.
          <br />
          <br />
          Dany’s selected solo exhibitions include <em>Sampot Civilisé</em>,
          Plantation, Phnom Penh, 2017;{" "}
          <em>Sampot: The Collection of Small Things</em>, Independence Hotel,
          SihanoukVille; <em>If They Were With Us Today</em>, SA SA BASSAC,
          Phnom Penh, 2012. His group exhibitions include{" "}
          <em>Shapeshifting: Contemporary Art From Southeast Asia</em>, 10
          Chancery Lane Gallery, Hong Kong (2016),{" "}
          <em>Swimming in Sand; Growing Rice Under an Umbrella</em>, Melbourne,
          Australia (2014), among many others.
        </p>
      </section>

      {/* Invention Section */}
      <section className="w-[90%] m-auto mt-10">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10 tracking-wide">
          Works
        </h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="w-full h-[300px] border border-gray-200 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img
                src={src}
                alt={`Chan Dany work ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Cdn;
