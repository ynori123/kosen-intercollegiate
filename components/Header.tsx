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
        <Link href="/" className='ml-3 text-xl hover:text-gray-900'>船舶就活</Link>
        
        <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center'>
          <Link href="/event" className="mr-5 hover:text-gray-900 hover:font-medium">イベント一覧</Link>
          <Link href="/company" className="mr-5 hover:text-gray-900 hover:font-medium">企業一覧</Link>
          <Link href="/contact" className="mr-5 hover:text-gray-900 hover:font-medium">お問い合わせ</Link>
        </nav>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          <Link href="/signup" className="mr-5 hover:text-gray-900 hover:font-medium">登録</Link>
          <Link href="/login" className="mr-5 hover:text-gray-900 hover:font-medium">ログイン</Link>
        </nav>
      </div>
    </header>
    </>
  )
}
