"use client"
import React, { useEffect, useState } from 'react'

export default function page() {
  const [offerItems, setofferItems] = useState<{ id: string; title: string; summary: string; imgSrc: string; }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/offers');
        const data = await response.json();
        
        const offers: [{id: string, title: string, summary: string, imgSrc: string}] = data?.data?.offers || [];
        
        setofferItems(offers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* ギャラリーの各アイテム */}
          {offerItems.map((item) => (
            <div key={item.id} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={item.imgSrc} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{item.summary}</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.title}</h1>
                  <p className="leading-relaxed"></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
