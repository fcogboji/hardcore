'use client';

import React from 'react';
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="grid md:grid-cols-1 gap-8 bg-gray-800 text-white py-10 px-4 text-center md:text-left">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
      

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-md mb-2">Locations & Contacts</h3>
          <div className="mb-4">
            <p className="font-semibold">London</p>
            <p>16 Noel St, London, W1F 8DA</p>
            <p>Phone: 020 7734 4466</p>
            <p>Email: <a href="mailto:contact@hardcorebuilders.com" className="underline">Contact us</a></p>
          </div>
          <div>
            <p className="font-semibold">Southern</p>
            <p>43 Western Rd, Bracknell, Berkshire RG12 1RT</p>
            <p>Phone: 01344 353 800</p>
            <p>Email: <a href="mailto:contact@hardcorebuilders.com" className="underline">Contact us</a></p>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-md mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-lg">
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>
      <hr></hr>
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold mb-2">HardCore BUILDERS</h2>
          <p>&copy; {new Date().getFullYear()} HardCore BUILDERS. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
