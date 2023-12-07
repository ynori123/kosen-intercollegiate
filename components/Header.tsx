"use client";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Icon from "public/icon.svg";
import { parseCookies } from 'nookies';


export default function Header() {
  const [isLogin, setIsLogin] = useState(false); // ログイン状態
  useEffect(() => {
    const cookies = parseCookies();
    const checkCookie = async () => {
      if (cookies.token){
        // ログイン状態
        setIsLogin(true);
      }else{
        // ログインしていない状態
        setIsLogin(false);
      }
    }
    checkCookie();
  }, []);
  return (
    
    <header className='text-gray-600 body-font'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Icon className='w-10 h-10' />
        </Link>
        <Link href="/" className='ml-3 text-xl hover:text-gray-900'>船舶就活</Link>
        
        <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center'>
          <Link href="/event" className="mr-5 hover:text-gray-900 hover:font-medium">イベント一覧</Link>
          <Link href="/company" className="mr-5 hover:text-gray-900 hover:font-medium">企業一覧</Link>
          <Link href="/contact" className="mr-5 hover:text-gray-900 hover:font-medium">お問い合わせ</Link>
        </nav>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          {isLogin ? 
          <>
            <Link href="/logout" className="mr-5 hover:text-gray-900 hover:font-medium">ログアウト</Link>
          </>
          :
          <>
            <Link href="/signup" className="mr-5 hover:text-gray-900 hover:font-medium">登録</Link>
            <Link href="/login" className="mr-5 hover:text-gray-900 hover:font-medium">ログイン</Link>
          </>
          }
        </nav>
      </div>
    </header>
    
  )
}
