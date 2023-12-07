"use client";
import { Loading } from '@/components/Loading';
import { destroyCookie } from 'nookies';
import { useEffect } from 'react';

export default function Page() {

  useEffect(() => {
    const logout = async () => {
      await destroyCookie(null, 'token');
      // cookie削除を全体に反映
      window.location.href = "/";
    };

    logout();
  }, []); 

  return (
    <Loading />
  )
}
