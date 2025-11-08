"use client"

import React from 'react';
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"

const SchuzkaPage = () => {
  return (
    <div className="min-h-screen bg-[#050A14] text-white">
      <Navbar />
      
      <div style={{ width: '100%', height: 'calc(100vh - 200px)', position: 'relative' }}>
        <iframe
          src="https://outlook.office.com/book/Vyhrazenasklientm@Generali.com/s/jU-DxPIlf0aXIe6JGLK9gA2"
          title="Rezervační stránka"
          width="100%"
          height="100%"
          style={{ border: 'none', position: 'absolute', top: 0, left: 0 }}
          allowFullScreen
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default SchuzkaPage;
