"use client"
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

export default function page() {
  const [offerItems, setofferItems] = useState<{ id: string; title: string; tag: string; summary: string; imgSrc: string; }[]>([]);
  const effectRan = useRef(false)
  useEffect(() => {
    if (effectRan.current === false){
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:8000/offers');
          const data = await response.json();
          
          const offers: [{id: string, title: string, tag: string, summary: string, imgSrc: string}] = data?.data?.offers || [];
          
          setofferItems(offers);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }
    return () => {
      console.log("unmounted");
      effectRan.current = true;
    }

  }, []);
  const OfferCard = (item: { id: string; title: string; tag: string; summary: string; imgSrc: string; }) => (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href={`/event/${item.id}`}>
        <div className='m-1 p-8 bg-zinc-200 rounded-lg hover:bg-zinc-300'>
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.imgSrc} />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.tag}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
          <p className="mt-1">{item.summary}</p>
        </div>
        </div>
      </Link>
    </div>
  );
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 ">
          {offerItems.map((item) => (
            <OfferCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
    
  );
}
