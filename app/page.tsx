'use client'
import { Loading } from "@/components/Loading"
import { useRouter } from "next/navigation"
import { parseCookies } from "nookies";
import { useEffect } from "react"

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    const cookies = parseCookies();
    const checkCookie = async () => {
      if (cookies.token){
        // ログイン状態
        router.push("/event");
      }else{
        // ログインしていない状態
        router.push("/login");
      }
    }
    checkCookie();
  }, [router]);
  return (
    <Loading />
  )
}
