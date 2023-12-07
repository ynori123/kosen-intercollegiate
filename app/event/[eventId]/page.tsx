"use client"
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';
import React, { useEffect, useRef, useState } from 'react'

export default function Page() {
  const param = useParams();
  const eventId = param.eventId;
  const [offerItem, setOfferItem] = useState<{ id: string; title: string; summary: string; place: string; datetime: string;imgSrc: string }>({ id: '', title: '', datetime: '', place: '', summary: '', imgSrc: '' });
  const effectRan = useRef(false);
  const router = useRouter();
  useEffect(() => {
    const cookies = parseCookies();
    const checkCookie = async () => {
      if (!cookies.token){
        // ログインしていない状態
        router.push("/login");
      }
    }
    checkCookie();
    if (effectRan.current === false){
      const fetchData = async () => {
        try {
          if (!eventId) {
            console.log("naio")
            return; // eventIdが存在しない場合は何もしない
          }
          const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/offer/${eventId}`);
          const data = await response.json();
  
          const offer = data?.data?.offer || {};
          console.log(offer)
  
          setOfferItem(offer);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      if (eventId) {
        fetchData();
      }
    
      return () => {
        console.log("unmounted");
        effectRan.current = true;
      }
    }
    
  }, [eventId]);
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={offerItem.imgSrc} />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{offerItem.title}</h1>
          <p className="my-1 leading-relaxed">{offerItem.place}</p>
          <p className="mb-8 leading-relaxed">{offerItem.datetime}</p>
          
          <p className="mb-8 leading-relaxed">{offerItem.summary}</p>
          <div className="flex justify-center">
            <Link href={`/apply/${eventId}`}>
              <button className="inline-flex text-white bg-slate-800 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded text-lg">応募する</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
