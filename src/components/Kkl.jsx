import React from 'react'

function Kkl() {
  const images=[
        "src/image/image/Kheom Kolab/photo_2_2025-08-11_20-19-20.jpg",
        "src/image/image/Kheom Kolab/photo_3_2025-08-11_20-19-20.jpg",
        "src/image/image/Kheom Kolab/photo_4_2025-08-11_20-19-20.jpg",
        "src/image/image/Kheom Kolab/photo_5_2025-08-11_20-19-20.jpg",
        "src/image/image/Kheom Kolab/photo_7_2025-08-11_20-19-20.jpg",
        "src/image/image/Kheom Kolab/photo_9_2025-08-11_20-19-20.jpg",
        "src/image/image/Kheom Kolab/photo_11_2025-08-11_20-19-20.jpg",
        "src/image/image/Kheom Kolab/photo_12_2025-08-11_20-19-20.jpg",
        "src/image/image/Kheom Kolab/photo_13_2025-08-11_20-19-20.jpg",
        "src/image/image/Kheom Kolab/photo_14_2025-08-11_20-19-20.jpg",
        "src/image/image/Kheom Kolab/photo_10_2025-08-11_20-19-20.jpg",
      
    ]
  return (
    <div>
        {/* Header */}
       <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10 p-10 tracking-wide">
        Kheom kolab-គឿម កុឡាប
       </h1>
       <section className="w-[90%] m-auto">
         <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10 tracking-wide">
          Biography
        </h1>
        <p className='w-full leading-relaxed text-gray-700'>
          <strong> Koeurm Kolab </strong>(b. 1987 in Battambang Province, Cambodia) graduated from 
           Phare Ponleu Selpak’s School of Visual and Applied Arts in 2007 and ​​Animation in 2010;
            graduated in Visual Arts from Ecole Pivaut School of Applied Art and Design in France in 2014.
             Currently, she is a Visual Arts and Animation teacher at Phare Ponleu Selpak. Her works explore humanity, 
             social change, and environmental change. Kolab won Gold Prize from White Canvas Cambodia 2020, organized
              by Social Compass Cambodia. Her recent exhibitions include Penh Art, AIR Gallery, Factory Phnom Penh,
               Cambodia (2021); Anonymous Heirloom, Sa Sa Art Projects, Phnom Penh, Cambodia; International online 
               Art Exhibition, Sangskar Bhart, and Lalit Kala Akademy, New Delhi, India; White Canvas Cambodia, lRoHa, 
               Phnom Penh, Cambodia (2020); Un Petit Marceau, Alliance Francaise, Siem Reap; Ansan International 
               Environmental, Danwon Art Museum, Ansan, Korea (2019); and Cambodians of the Rice Fields, Millon, 
               Paris, France (2018). 
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

export default Kkl