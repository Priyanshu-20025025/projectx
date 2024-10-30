import React from 'react'


    const BusinessSection = () => {
        return (
          <section className="bg-[#3e260e] text-white py-12 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        
              <div className="lg:max-w-[60%]">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  At ProjeXx, We're Committed <br /> To Businesses
                </h2>
                <p className="text-base md:text-lg leading-relaxed">
                  Take the first step towards achieving your business goals by
                  contacting us today. Schedule a consultation with one of our IT
                  specialists to discuss your objectives and explore how our
                  innovative solutions can propel.
                </p>
              </div>
      
    
              <div className="flex gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-md shadow-md transition">
                  Request a Consultation
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-md shadow-md transition">
                  Explore Solution
                </button>
              </div>
            </div>
          </section>
        );
      };
      
      export default BusinessSection;
