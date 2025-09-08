import React from 'react'

function Ova() {
    const images=[
        
        "image/Ou Vanndy/1.jpg",
        "image/Ou Vanndy/01.webp",
        "image/Ou Vanndy/2.jpg",
        "image/Ou Vanndy/3.webp",
        "image/Ou Vanndy/6.webp",
        "image/Ou Vanndy/7.webp",
        
    ]
  return (
    <div>
        {/* Header */}
       <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10 p-10 tracking-wide">
        Ou Vannda-អ៊ូ​  វណ្ណឌី
       </h1>
       <section className="w-[90%] m-auto">
         <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10 tracking-wide">
          Biography
        </h1>
        <p className='w-full leading-relaxed text-gray-700'>
         <strong> OU Vanndy</strong> (born in 1977 in Kandal Province) lives and works in Phnom Penh. He graduated from the Modern Sculpture Department at the Royal University of Fine Art in Phnom Penh in 2005 and from Pedagogy Training at the National Institute of Education in 2006. From 2006 to 2018, he was a teacher at the National Institute of Education. 

           <br/><br/> Vanndy participated in the Peace Art Project Cambodia from 2003 to 2005. It was the first opportunity he had had to learn how to work with metal, welding and forging twisted AK-47s into beautiful sculptures as expressions of peace. He has become a well-known Cambodian artist, expressing strong social messages through his artwork, such as a mural project about HIV awareness for UNESCO and UNICEF and a UNDP project celebrating achievements in Cambodian landmine action in 2009.  His Peace Monument design, “Naga for Peace and Development” was chosen, created, and is now permanently sited in Battambang town, using weapons collected from Battambang province. His artworks have been exhibited across Cambodia, Australia, Indonesia, the United Kingdom, and the United States.
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

export default Ova