import Link from 'next/link'
import React from 'react'
import Icon from "public/icon.svg";


export default function Header() {
  return (
    <>
    <header className='text-gray-600 body-font'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Icon className='w-10 h-10' />
        </Link>
        <Link href="/" className='ml-3 text-xl'>船舶就活</Link>
        
        <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center'>
          <Link href="/event" className="mr-5 hover:text-gray-900">イベント一覧</Link>
          <Link href="/company" className="mr-5 hover:text-gray-900">会社一覧</Link>
        </nav>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          <Link href="/login" className="mr-5 hover:text-gray-900">ログイン</Link>
          <Link href="/signup" className="mr-5 hover:text-gray-900">登録</Link>
        </nav>
      </div>
    </header>
    </>
  )
}
