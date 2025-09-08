import React from 'react'

function Ovch() {
     const images=[
       "image/Ouk-Chim-Vichet/1.jpg",
       "image/Ouk-Chim-Vichet/2.webp",
       "image/Ouk-Chim-Vichet/Screenshot 2025-08-30 220243.png",
       "image/Ouk-Chim-Vichet/Screenshot 2025-08-30 220408.png",
       "image/Ouk-Chim-Vichet/Screenshot 2025-08-30 220425.png",
       "image/Ouk-Chim-Vichet/Screenshot 2025-08-30 220506.png",
       "image/Ouk-Chim-Vichet/Screenshot 2025-08-30 220518.png",
       "image/Ouk-Chim-Vichet/Screenshot 2025-08-30 220534.png",

    ]
  return (
    <div>
        {/* Header */}
       <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10 p-10 tracking-wide">
        Ouk Chim Vichet-អ៊ុក ឈឹមវិចិត្រ
       </h1>
       <section className="w-[90%] m-auto">
         <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10 tracking-wide">
          Biography
        </h1>
        <p className='w-full leading-relaxed text-gray-700'>
           <strong> OUK Chim Vichet</strong> (born in 1981 in Phnom Penh) lives and works in Phnom Penh. He graduated from the Modern Sculpture Department at the Royal University of Fine Art in Phnom Penh. Since 2006, he has been a teacher of Architecture and Urbanism at the Royal University of Fine Art. When he was still a student, he helped work on the Peace Art Project of Cambodia, created in part by British artist Sasha Constable. They reused weapons, turning them into art as an expression of peace. Later on, he started using a variety of materials, including metal, stone, and wood. Vichet is also a painter exploring the elements of Cambodian identity and culture. His artworks are all about trying to end the feeling of suffering, destruction, and loss of lives and to change people’s perception of what they see as love, humanity, and peace. His exhibitions have been featured in art galleries, museums, institutions, schools, embassies, hotels, and restaurants across Cambodia with his most famous sculpture, Apsara Warrior, on display at the University of Michigan Museum of Art.
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

export default Ovch