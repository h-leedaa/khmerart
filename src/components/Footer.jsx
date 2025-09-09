import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-20">
      <div className="w-[90%] m-auto py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Khmer Art Showcase</h2>
          <p className="text-sm leading-relaxed">
            Celebrating Khmer creativity by showcasing artists who bring
            tradition and innovation together through painting, sculpture,
            installation, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white transition-colors text-red-600">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition-colors text-red-600">
                About
              </a>
            </li>
            <li>
              <a href="/artist" className="hover:text-white transition-colors text-red-600">
                Artist
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition-colors text-red-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <p className="text-sm">Phnom Penh, Cambodia</p>
          <p className="text-sm">Email: leedaa@khmerart.com</p>
          <p className="text-sm">Phone: +855 96 761 9040</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Khmer Art Showcase. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
