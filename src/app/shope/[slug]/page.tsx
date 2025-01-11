import Addinfo from "@/components/addinfo";
import { client } from "@/sanity/lib/client";
import { FullDetails } from '@/app/interface/interface'
import Image from 'next/image';
import React from "react";
import { Star } from 'lucide-react'


export const revalidate = 20; //revalidate every 20 seconds

async function getData(slug: string) {
  const query = `
   *[_type == 'product' && slug.current == "${slug}"] [0] {
      _id,
  "images": images[].asset->url,
          price,
      otherprice,
      name,
      description,
      description1,

      sku,
      stock,
     "slug":slug.current,
      "rating": {
        "average": rating.average,
        "count": rating.count
      },
    } 
  `;
  const data = await client.fetch(query);
  return data;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const data: FullDetails = await getData(slug);
  console.log(data);

  // Split the description by commas and map each part to a <span> with a <br />
  const formattedDescription = data.description
    .split(",")
    .map((sentence, index) => (
      <span key={index}>
        {sentence.trim()}
        {index < data.description.split(",").length - 1 && <br />}
      </span>
    ));

  return (
    <div className="bg-gray-100 py-32 text-cyan-500" style={{ backgroundImage: "url('/productback.jpg')",
      backgroundSize: "cover",
  backgroundPosition: "center"
  }}>
      <div className="container mx-auto px-4 py-8 text-cyan-500">
        <div className="flex flex-wrap -mx-4 text-cyan-500">
          {/* Product Images */}


<div
  className="w-full md:w-1/2 px-4 mb-8 text-cyan-500"
  style={{
    backgroundImage: "url('/watchback.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <Image
    src={data.images[0]} // Ensure data.images is a valid image path
    alt={data.name}
    className="w-full h-auto rounded-lg shadow-md mb-4"
    id="mainImage"
    width={500} // Specify the width
    height={300} // Specify the height
    layout="responsive" // Optional: Use responsive layout
  />
</div>
          {/* Product Details */}
          <div className="w-full md:w-1/2 px-10">
            <h2 className="text-3xl font-bold mb-2">{data.name}</h2>
            
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">${data.price}</span>
              <span className="text-cyan-200 line-through">
                ${data.otherprice}
              </span>
            </div>




 {/* Rating */}
 <div className='mt-1 flex justify-between text-cyan-500 border-b-2  px-2 py-2 mb-4 '>
                        <div className='flex justify-center items-center gap-2'>
                            <p className='text-sm font-semibold'>{data.rating.average}</p><span className='text-yellow-400 fill-current'><Star fill=''/></span><p className='text-sm text-cyan-200 font-semibold'> <span className="text-2xl">|</span>  {data.rating.count}  rating</p>
                        </div>
                        </div>





            <p className="text-cyan-300 mb-6">
              {formattedDescription}
              {/* {data.description} */}
            </p>

            <div className="mb-6">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-cyan-300 mb-1"
              >
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min={1}
                defaultValue={1}
                className="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <p className="text-blue-500 pb-2">in stock: 
            <span className="text-cyan-200 "> {data.stock}</span></p>
            <div className="flex space-x-4 mb-6">
              <button className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                Add to Cart
              </button>
            </div>
            
            <p className="text-cyan-200 mb-4 py-5 border-t-2 border-b-2">{data.sku}</p>
            
          </div>
        </div>
      </div>

      <Addinfo description1={data.description1}/>
    </div>
  );
}
