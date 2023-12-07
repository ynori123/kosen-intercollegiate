"use client";
import Link from "next/link";
import Icon from "public/icon.svg"
import React, { useState } from 'react'

export default function Page() {
  const [demoAlert, setDemoAlert] = useState(false);

  const handleSubmit = () => {
    setDemoAlert(true);
  }
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
        <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
          <Icon className="w-10 h-10"/>
        </a>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              アカウント作成
            </h1>
            <div className="space-y-4 md:space-y-6">
              {demoAlert ? <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">デモのためアカウントの登録はできません．デモアカウントを使用してください．</div> : ""}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">メールアドレス</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  パスワード
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className='mt-10 text-center text-sm text-gray-500'>
              <input type="checkbox" name="" id="" className="pr-2" />
              <span>利用規約</span>に同意する
            </div>

            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full text-white bg-slate-600 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                アカウント登録
              </button>
              <p className="text-sm font-light text-gray-500">
                すでにアカウントを持っていますか？ <Link href="/login" className="font-medium text-slate-600 hover:underline">Login here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
