"use client"
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

export default function page() {
  const [CompanyItems, setCompanyItems] = useState<{ id: string; name: string; tag: [string]; imgSrc: string; }[]>([]);
  const effectRan = useRef(false)
  useEffect(() => {
    if (effectRan.current === false){
      const fetchData = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/companies`);
          const data = await response.json();
          
          const companies: [{id: string, tag: [string]; name: string, imgSrc: string}] = data?.data?.companies || [];
          
          setCompanyItems(companies);
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
  const CompanyCard = (item: { id: string; tag: [string]; name: string; imgSrc: string; }) => (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href={`/company/${item.id}`}>
        <div className='m-1 p-8 bg-zinc-200 rounded-lg hover:bg-zinc-300'>
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="企業" className="object-cover object-center w-full h-full block" src={item.imgSrc} />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1">
          {(item.tag).map((tagItem) => (
            <button className='bg-slate-700 px-1 py-0.5 mx-1 rounded-full' key={tagItem}>{tagItem}</button>
          ))}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{item.name}</h2>
        </div>
        </div>
      </Link>
    </div>
  );
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 ">
          {CompanyItems.map((item) => (
            <CompanyCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
    
  );
}
