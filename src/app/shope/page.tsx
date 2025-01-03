import React from 'react';
import { PRODUCTS } from "@/lib/constants";
import Image from 'next/image';


const Watches = () => {
 
  return (
    <div>
    <div className="watches grid grid-cols-1 h-auto pt-20 pb-2 md:grid-cols-3 gap-10 px-10" style={{ backgroundImage: "url('productback.jpg')",
        backgroundSize: "cover",
    backgroundPosition: "center"
    }}>
      {PRODUCTS.map((watch) => (
        <div key={watch.id} className="watch-card bg-white p-5 rounded-md shadow-md text-center"
        style={{ backgroundImage: "url('watchback.jpg')", 
            backgroundSize: "cover",
    backgroundPosition: "center"
          }}>
          
          <Image src={watch.imageUrl} 
          alt={watch.title} 
          width={400}
          height={500}
          
          className="w-full rounded-md transition-transform duration-300 transform hover:scale-110" />
          <h3 className="mt-4 text-2xl text-cyan-500 font-bold">{watch.title}</h3>
          {/* <p className="text-gray-500">{watch.description}</p> */}
          <div className="price text-cyan-500 text-xl font-semibold mt-2">${watch.price}</div>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Add to Cart</button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Watches;
