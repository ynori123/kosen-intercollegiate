"use client";
import React, { Component } from 'react'
import GithubIcon from "public/github.svg";
import Link from 'next/link';


export default class page extends Component {
  render() {
    return (
      <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">お問い合わせ</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">お問い合わせフォームです．</p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">名前・所属</label>
                <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">メッセージ</label>
                <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none hover:bg-slate-600 rounded text-lg">送信</button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a className="text-slate-800 font-bold">example@email.com</a>
              <p className="leading-normal my-5">Kosen Intercollegiate 4th-term <br />E-team
              </p>
              <span className="inline-flex">
                <Link href="https://github.com/ynori123/kosen-intercollegiate" className="text-gray-500">
                  <GithubIcon className='w-10 h-10 opacity-80 hover:opacity-100' />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
}
