"use client"
import React, { useEffect, useState } from 'react'
import { parseCookies, setCookie } from 'nookies';
import Icon from "public/icon.svg";
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const [loginFailedAlert, setLoginFailedAlert] = useState<boolean>(false);

  useEffect(() => {
    const cookies = parseCookies();
    const checkCookie = async () => {
      if (cookies.token){
        router.push("/");
      }
    }
    checkCookie();
  }, [router]);
  interface FormData {
    email: string;
    password: string;
  }
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      email: e.target.value,
    }));
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      password: e.target.value,
    }));
  };
  const [submitLoading, setSubmitLoading] = useState<boolean>(false); // ログインボタンのローディング
  const handleSubmit = () => {
    // process.env.NEXT_PUBLIC_BACK_URL
    // console.log(formData);
    const postData = async () => {
      try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          const data: {code: number, token: string} = await response.json() || {code: 2, token: ""};

          // alert(data.code + " " + data.token);
          if (data?.code === 0){
            setCookie(null, "token", data?.token, { maxAge: 30 * 24 * 60 * 60 });
            window.location.reload();
          }else{
            setLoginFailedAlert(false);
            // alert("ログインに失敗しました．");
            setFormData({email: "", password: ""});
          }
        }
      } catch (error) {
        setLoginFailedAlert(true);
        console.error('Error fetching data:', error);
        return null;
      }
    };
    setSubmitLoading(true);
    postData();
    setSubmitLoading(false);
    console.log(loginFailedAlert);
  };

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
        <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
          <Icon className="w-10 h-10"/>
        </a>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              ログイン
            </h1>
            <div className="space-y-4 md:space-y-6">
              {loginFailedAlert && <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">ログインに失敗しました。</div> }
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">メールアドレス</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChangeEmail}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-slate-600 focus:border-slate-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">パスワード</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChangePassword}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-slate-600 focus:border-slate-600 block w-full p-2.5"
                  required
                />
              </div>
              {
                submitLoading ? 
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full text-white opacity-30 bg-slate-600 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  disabled
                >
                  ログイン中...
                </button>
                :
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full text-white bg-slate-600 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  ログイン
                </button>
              }
              
              <p className="text-sm font-light text-gray-500">
                アカウントを持っていませんか？ <a href="/signup" className="font-medium text-slate-600 hover:underline ">Sign up here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
