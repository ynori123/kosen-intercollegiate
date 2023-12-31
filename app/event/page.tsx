"use client"
import { Loading } from '@/components/Loading';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

export default function Page() {
  const [offerItems, setofferItems] = useState<{ id: string; title: string; place: string; datetime: string; imgSrc: string; }[]>([]);
  const effectRan = useRef(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (effectRan.current === false){
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/offers`);
          const data = await response.json();
          
          const offers: [{id: string, title: string, place: string, datetime: string, imgSrc: string}] = data?.data?.offers || [];
          
          setofferItems(offers);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
      setIsLoading(false);
    }
    return () => {
      effectRan.current = true;
    }
  }, []);
  
  const OfferCard = (item: { id: string; title: string; place: string; datetime: string; imgSrc: string; }) => (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href={`/event/${item.id}`}>
        <div className='m-1 p-8 bg-zinc-200 rounded-lg hover:bg-zinc-300'>
        <div className="block relative h-48 rounded overflow-hidden">
          <img alt="求人イベント" className="object-cover object-center w-full h-full block" src={item.imgSrc} />
        </div>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.place}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
          <p className="mt-1">{item.datetime}</p>
        </div>
        </div>
      </Link>
    </div>
  );
  if (!isLoading) {
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
  return (
    <Loading />    
  );
}
