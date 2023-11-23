"use client";
import { useParams } from 'next/navigation';
import React from 'react'

export default function page() {
  const param = useParams();
  const eventId = param.eventId;
  return (
    <div className="flex font-bold">
      イベントid : {eventId}
      
    </div>
  )
}
