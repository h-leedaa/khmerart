import React from 'react'

function Prb() {
       const images=[
       "src/image/image/PenRobot/Screenshot 2025-08-30 220713.png",
       "src/image/image/PenRobot/Screenshot 2025-08-30 220729.png",
       "src/image/image/PenRobot/Screenshot 2025-08-30 220742.png",
       "src/image/image/PenRobot/Screenshot 2025-08-30 220803.png",
       "src/image/image/PenRobot/Screenshot 2025-08-30 220817.png",
       "src/image/image/PenRobot/Screenshot 2025-08-30 220828.png",
       "src/image/image/PenRobot/Screenshot 2025-08-30 220842.png",
       "src/image/image/PenRobot/Screenshot 2025-08-30 220902.png",
       "src/image/image/PenRobot/Screenshot 2025-08-30 220921.png",

    ]
  return (
    <div>
        {/* Header */}
       <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10 p-10 tracking-wide">
       Pen Robit-ភិន​ រ៉ូប៊ីត
       </h1>
       <section className="w-[90%] m-auto">
         <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10 tracking-wide">
          Biography
        </h1>
        <p className='w-full leading-relaxed text-gray-700'>
           <strong>Pen Robit</strong> (born in 1991 in Battambang province, Cambodia) lives and works in Phnom Penh. He graduated from Phare Ponleu Selpak in 2010. His art practice primarily employs painting, including occasional live painting and performance. He draws on various techniques, shuttling between figurative and abstraction, often comments on social realities and influences from Cambodian cultural iconography as well as ongoing societal discourses. Robit’s work attempts to represent Cambodia’s past, present, and future socio-political fabric.

        <br/> <br/>Pen Robit participated in the Memory Workshop with Vann Nath and Séra Ing at Bophana Center, Phnom Penh (2009) and he did an exchange study program at Pivaut Applied School of Art, Nantes, France (2011). He was an artist-in-residence with Peninsula To Australia International Art and Culture Exchange, Taiwan (2015) and at OzAsia Festival, Adelaide, Australia (2016).
        <br/> <br/>Solo exhibitions include Out Of This World, Richard Koh Fine Art, Malaysia (2020); Beyond, Tribe Cambodia, Siem Reap, Cambodia; Thread, Sa Sa Art Projects, Phnom Penh, Cambodia (2019); Krama, Romeet Contemporary Art Space, Phnom Penh, Cambodia (2013) and Untitled, Romeet Contemporary Art Space, Phnom Penh, Cambodia (2012). Recent group exhibitions include No Boundaries, Art Exchange Project Indonesia & Cambodia (2015), Java and Asia Foundation, Phnom Penh, Cambodia; 20 ANS! Made in Cambodia (2015), Galerie Impressions, Paris; Made in Battambang (2014), French Institute, Phnom Penh, Cambodia; and Southeast Asia: Figurative Speaking (2014), The East Gallery, Vancouver.
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

export default Prb