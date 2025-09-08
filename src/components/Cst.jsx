import React from 'react'

function Cst() {
    const images=[
        "src/image/image/Chim Suthy/photo_1_2025-08-11_20-16-46.jpg",
        "src/image/image/Chim Suthy/photo_2_2025-08-11_20-16-46.jpg",
        "src/image/image/Chim Suthy/photo_3_2025-08-11_20-16-46.jpg",
        "src/image/image/Chim Suthy/photo_4_2025-08-11_20-16-46.jpg",
        "src/image/image/Chim Suthy/photo_5_2025-08-11_20-16-46.jpg",
        "src/image/image/Chim Suthy/photo_6_2025-08-11_20-16-46.jpg",
        "src/image/image/Chim Suthy/photo_7_2025-08-11_20-16-46.jpg",
        "src/image/image/Chim Suthy/image.png",
    ]
  return (
    <div>
        {/* Header */}
       <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10 p-10 tracking-wide">
        Chim Suthy-ឈឹម សុធី
       </h1>
       <section className="w-[90%] m-auto">
         <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10 tracking-wide">
          Biography
        </h1>
        <p className='w-full leading-relaxed text-gray-700'>
            <strong>Chhim Sothy</strong> (born in 1969 ​in Kandal province) lives 
            and works in Phnom Penh. He graduated from Royal University of Fine Arts 
            in 1995, and Chantiers Ecoles de Formation Professionelle in Siem Reap in 1997. He works in the Ministry of Culture and Fine Arts as Director at the Department of Plastic Arts and Handicraft. 
            <br/><br/> Chhim Sothy’s work is characterized by a diversity of styles, often generating 
             spontaneous and gestural abstract paintings, and simultaneously creating artful and
              well-balanced traditional painting with contemporary elements. He often incorporates
               mythical characters into his works with an anachronistic color explosion. “I am like a monk seeking wisdom,” 
              he quoted. His works are featured in various exhibitions across the regions. <br/><br/>
             His works can be found in Cambodian collections as well as in France, Singapore, China, Thailand and Vietnam. 
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
)
}

export default Cst