import React from 'react'

function Rsk() {
 const images=[
        
        "src/image/image/Reun-Sokhom/Screenshot 2025-08-30 221137.png",
        "src/image/image/Reun-Sokhom/Screenshot 2025-08-30 221154.png",
        "src/image/image/Reun-Sokhom/Screenshot 2025-08-30 221207.png",
        "src/image/image/Reun-Sokhom/Screenshot 2025-08-30 221222.png",
        "src/image/image/Reun-Sokhom/Screenshot 2025-08-30 221237.png",
        "src/image/image/Reun-Sokhom/Screenshot 2025-08-30 221301.png",
        "src/image/image/Reun-Sokhom/Screenshot 2025-08-30 221317.png",
        "src/image/image/Reun-Sokhom/Screenshot 2025-08-30 221331.png",
        "src/image/image/Reun-Sokhom/Screenshot 2025-08-30 221348.png",
    ]
  return (
    <div>
        {/* Header */}
       <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10 p-10 tracking-wide">
        Roeun Sokhom-រឿន​ សុខុម
       </h1>
       <section className="w-[90%] m-auto">
         <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10 tracking-wide">
          Biography
        </h1>
        <p className='w-full leading-relaxed text-gray-700'>
        <strong> ROEUN Sokhom </strong>(b. 1987 in Battambang Province, Cambodia) lives and works in Battambang. He graduated from Phare Ponleu Selpak’s visual
          art school in 2008. Sokhom is a leading figure in Battambang’s dynamic art community. His practice encompasses watercolor, oil and acrylic
           painting, as well as performance and installation. Sokhom founded Studio Art 
         Battambang in 2012, the city’s only artist-run space dedicated to discussion and creation, rather than exhibition. He has
         
         
          collaboratively organized numerous “live painting” and performance events in Battambang’s streets, in an attempt to engage large audiences 
          of local residents, such as market sellers. 

<br/><br/>Sokhom performed with the acclaimed Phare Ponleu Selpak production Sokha in Korea (2019) and his live painting for circus shows in Cambodia, Japan,
 Korea, France (2011-2013). His solo exhibition includes Mid-Century Modernism, the 1961 Art Space, Siem Reap (2016); Old Buildings: French Period, 
 Bophana Center, Phnom Penh; Old Buildings, These Days, The insider Gallery by InterContinental Phnom Penh (2015). His group exhibition includes Imagining
  Cambodian Cinema, Rosewood Art Gallery, Phnom Penh; Beyond Borders (Children of the Mekong), Loft 22, Hong Kong; S’Art Urban Art Festival, Battambang (2019);
   Snapshot (Grand Re-Opening), Sangker Gallery, Battambang (2018).
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

export default Rsk