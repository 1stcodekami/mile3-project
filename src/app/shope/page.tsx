import React from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

// Define the type for the product data
interface Product {
  _id: string;
  images: string; // This is the URL of the first image
  price: number;
  name: string;
  description: string;
  slug: string;
}

// Fetch data from Sanity
async function getData(): Promise<Product[]> {
  const query = `
   *[_type == 'product'] {
      _id,
      "images": images[0].asset->url,
      price,
      name,
      description,
      "slug": slug.current
   }
  `;
  const watchData1: Product[] = await client.fetch(query);
  return watchData1;
}

export default async function allWatches() {
  const watchData2: Product[] = await getData();
  console.log(watchData2);

  return (
    <div>
      <div
        className="watches grid grid-cols-1 h-auto pt-20 pb-2 md:grid-cols-3 gap-10 px-10"
        style={{
          backgroundImage: "url('/productback.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {watchData2.map((val) => (
          <div
            key={val._id}
            className="watch-card bg-white p-5 rounded-md shadow-md text-center"
            style={{
              backgroundImage: "url('/watchback.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Image
              src={val.images}
              alt={val.name}
              width={400}
              height={500}
              className="w-full rounded-md transition-transform duration-300 transform hover:scale-110"
            />
            <h3 className="mt-4 text-2xl text-cyan-500 font-bold">{val.name}</h3>
            <div className="price text-cyan-500 text-xl font-semibold mt-2">
              ${val.price}
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
              <Link href={`/shope/${val.slug}`}>Details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
