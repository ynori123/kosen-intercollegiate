"use client";
import { useParams, useRouter,  } from 'next/navigation';
import { parseCookies } from 'nookies';
import React, { useEffect } from 'react'

export default function page() {
  const param = useParams();
  const eventId = param.eventId;
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
  }, []);
  if (window.location.pathname === `/apply/${eventId}`) {
    setTimeout(() => {
      router.push("/");
    }, 3 * 1000);
  }
  return (
    <div className='mx-auto my-5'>イベントid"{eventId}"に応募が完了しました．</div>
  )
}
