'use client'
import React, { useState } from 'react';



export interface ProductDescription{
 
 description1:string;
}



// export default function Addtoinfo({description1d}:ProductCart) {

const Addinfo = ({description1}:ProductDescription) => {
  const [activeTab, setActiveTab] = useState('description');

  const handleTabClick = (tab:string) => {
    setActiveTab(tab);
  };

  return (
    
      <section className="text-cyan-500 body-font w-full overflow-hidden">
        <div className="container mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className=" w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <div className="flex mb-4">
                <a
                  onClick={() => handleTabClick('description')}
                  className={`flex-grow py-2 text-lg px-1 cursor-pointer ${
                    activeTab === 'description'
                      ? 'text-green-200 border-b-2 border-indigo-500'
                      : 'border-b-2 border-gray-300'
                  }`}
                >
                  Description
                </a>
                <a
                  onClick={() => handleTabClick('reviews')}
                  className={`flex-grow py-2 text-lg px-1 cursor-pointer ${
                    activeTab === 'reviews'
                      ? 'text-green-900 border-b-2 border-indigo-500'
                      : 'border-b-2 border-gray-300'
                  }`}
                >
                  Additional information
                </a>
              </div>

              {/* Description */}
              {activeTab === 'description' && (
                <div>
                  <p className="leading-relaxed ">
                  {description1}
                  </p>
                </div>
              )}

              {/* Reviews */}
              {activeTab === 'reviews' && (
                <div>
                  <div className="flex border-t border-gray-200 py-2">
                    <span className="text-cyan-200">Brands</span>
                    <span className="ml-auto text-cyan-300">Tissot</span>
                  </div>
                  <div className="flex border-t border-gray-200 py-2">
                    <span className="text-cyan-200">Band Color</span>
                    <span className="ml-auto text-cyan-300">Silver</span>
                  </div>
                  <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                    <span className="text-cyan-200">Color of the dial</span>
                    <span className="ml-auto text-cyan-300">Blue</span>
                  </div>
                  <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                    <span className="text-cyan-200">Features</span>
                    <span className="ml-auto text-cyan-300">Chronograph</span>
                  </div>
                  <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                    <span className="text-cyan-200">Gender</span>
                    <span className="ml-auto text-cyan-300">Men</span>
                  </div>
                  <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                    <span className="text-cyan-200">Size</span>
                    <span className="ml-auto text-cyan-300">42mm</span>
                    </div>
                    <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                    <span className="text-cyan-200">Water Resistant</span>
                    <span className="ml-auto text-cyan-300">100M</span>
               
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    
  );
};

export default Addinfo;