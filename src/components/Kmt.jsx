import React from 'react'

function Kmt() {
 const images=[
        "src/image/image/kmao-tuch/kmt2.webp",
        "src/image/image/kmao-tuch/kmt3.jpg",
        "src/image/image/kmao-tuch/kmt4.jpg",
        "src/image/image/kmao-tuch/kmt5.webp",
        "src/image/image/kmao-tuch/kmt6.webp",
        "src/image/image/kmao-tuch/kmt7.jpg",
        "src/image/image/kmao-tuch/kmt9.jpg",
        
    ]
  return (
    <div>
        {/* Header */}
       <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10 p-10 tracking-wide">
        Khchao Tuch-ខ្ចៅ ទូច
       </h1>
       <section className="w-[90%] m-auto">
         <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10 tracking-wide">
          Biography
        </h1>
        <p className='w-full leading-relaxed text-gray-700'>
            <strong>Khchao Touch</strong> (born in 1982 in Battambang province)
             lives and works in Battambang. She trained at the Phare Ponleu Selpak art school
              from 1998-2003 and became a teacher there until 2008 when she left to pursue her
               artistic career full time. She works in a variety of mediums; From oil painting, 
               acrylic, watercolor, to printmaking, sculptures, and installations. Her inspiration
                comes from nature by creating a sense of connection with the universe and its creatures. 
                Touch’s is very spontaneous and heart-felt; an extension of the artist’s energetic sense and 
                approach to life.
                    <br/> <br/>
                Since then she has had solo exhibitions at the French cultural centre and the Art
                 Café in Phnom Penh, the Hotel de la Paix, Heritage suites Hotel and The French cultural
                  centre in Siem Reap, as well as participating in numerous group exhibitions in Cambodia 
                  and abroad. Touch was a residency at Atelier Fenetre sur rue in Bordeaux, France (2007) and 
                  Long Beach USA (2009), where she made an installation and residency at the 2nd City gallery.
                   She was a nominee for the Sovereign Asia Art Prixe 2009 and 2020. She was runner up in the 
                   “You Khin Memorial Women’s Art Prize ” 2010 and also listed in Southeast Asia Globe magazine’s 
                   top 10 Cambodian artists feature. She opened Lotus Gallery in Battambang with her husband after 
                   a few years as a homemother. Her recent solo exhibition “I am nature?” at Mirage Contemporary art
                    space (2020), Siem Reap and won the silver prize in the White Canvas Art competition in Phnom Penh
                     (2020). 
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

export default Kmt