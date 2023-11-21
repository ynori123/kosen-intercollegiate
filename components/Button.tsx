import React from 'react'

export const Button = (props: {title: string}) => {
  return (
    <>
      <button className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
        {props.title}
      </button>
    </>
  )
}
