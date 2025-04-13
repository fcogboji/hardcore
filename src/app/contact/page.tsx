'use client';

import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white text-black py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center mt-15">Contact Us</h1>
        <p className="text-lg mb-10 text-center">
        We&rsquo;d love to hear from you! Reach out to us using the details below.
        </p>

        <div className="bg-gray-100 p-6 rounded-xl shadow-md space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Company</h2>
            <p>HardCore Builders</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Phone</h2>
            <p>020 7734 4466 (London)</p>
            <p>01344 353 800 (Southern)</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <p>
              <a href="mailto:contact@hardcorebuilders.com" className="underline text-blue-600">
                contact@hardcorebuilders.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Addresses</h2>
            <p className="mb-3">
              <strong>London Office:</strong><br />
              16 Noel St, London, W1F 8DA
            </p>
            <p>
              <strong>Southern Office:</strong><br />
              43 Western Rd, Bracknell, Berkshire RG12 1RT
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
