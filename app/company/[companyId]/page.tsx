"use client"
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';
import React, { useEffect, useRef, useState } from 'react'

export default function Page() {
  const param = useParams();
  const companyId = param.companyId;
  const [companyItem, setCompanyItem] = useState<{ id: string; name: string; tag: [string]; description: string; imgSrc: string; url: string; }>({ id: '', name: '', tag: [''], description: '', imgSrc: '', url: ''});
  const effectRan = useRef(false)
  const router = useRouter();
  useEffect(() => {
    
  }, []);
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
          if (!companyId) {
            console.log("company id does not exist")
            return; // companyIdが存在しない場合は何もしない
          }
          const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/company/${param.companyId}`);
          const data = await response.json();
  
          const company = data?.data?.company || {};
  
          setCompanyItem(company);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      if (companyId) {
        fetchData();
      }
    
      return () => {
        effectRan.current = true;
      }
    }
    
  }, [companyId, router]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className=''>
          <img className="h-56 w-5/6 mx-auto my-2 object-cover object-center rounded" alt="ロゴ" src={companyItem.imgSrc} />
        </div>
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{companyItem.name}</h1>
          <div>
          {(companyItem.tag).map((tagItem) => (
            <button disabled className='bg-slate-700 text-white px-1 py-0.5 mx-1 rounded-full' key={tagItem}>{tagItem}</button>
          ))}
          </div>
          <a href='https://corp.supporterz.jp/' className="mb-8 leading-relaxed hover:text-slate-900">{companyItem.url}</a>
          
          <p className="mb-8 leading-relaxed">{companyItem.description}</p>
        </div>
      </div>
    </section> 
  )
}
