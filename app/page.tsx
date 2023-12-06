'use client'

import { Loading } from "@/components/Loading"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Page() {
  const router = useRouter()
  useEffect (() => {
    router.push("/login");
  })
  return (
    <Loading />
  )
}
