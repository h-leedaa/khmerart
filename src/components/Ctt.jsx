import React from 'react'

function Ctt() {
 return (
    <div className="w-[90%] m-auto py-12">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10 tracking-wide">
        Contact Us
      </h1>

      {/* Intro Text */}
      <p className="text-center text-gray-600 max-w-2xl m-auto leading-relaxed mb-10">
        We’d love to hear from you! Whether  you’re an artist , researcher, or art
        enthusiast, feel free to reach out for inquiries, collaborations, or
        exhibition opportunities.
      </p>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
        {/* Address */}
        <div className="bg-gray-100 shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Our Address</h2>
          <p className="text-gray-700">Phnom Penh, Cambodia</p>
        </div>

        {/* Contact Details */}
        <div className="bg-gray-100 shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Contact Info</h2>
          <p className="text-gray-700">Email: leedaa@khmerart.com</p>
          <p className="text-gray-700">Phone: +855 96 761 9040</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl m-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Send Us a Message
        </h2>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              rows="4"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Ctt