"use client"
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function Page() {
  const router = useRouter();
  const { eventId } = router.query;

  const [offerItem, setOfferItem] = useState<{ id: string; title: string; summary: string; imgSrc: string }>({ id: '', title: '', summary: '', imgSrc: '' });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/offers/'+eventId);
        const data = await response.json();

        const offer = data?.offer || {};

        setOfferItem(offer);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={offerItem.imgSrc} />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{offerItem.title}</h1>
          <p className="mb-8 leading-relaxed">{offerItem.summary}</p>
          <div className="flex justify-center">
            <Link href={`/apply/${eventId}`}>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">応募する</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
