import React from 'react'
import Blog from './Blog'

export default function BlogList() {
  return (
    <>
    <div className="absolute inset-0">
    <div className="bg-white h-1/3 sm:h-2/3"></div>
</div>
<div className="relative max-w-7xl mx-auto">
    <div className="text-center">
        <h2
            className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
        >
            ALL BLOGS ARE HERE
        </h2>
        <p
            className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
        >
            Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Ipsa libero labore natus atque, ducimus sed.
        </p>
    </div>

   
    <div
        className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
    >
        <Blog />
    </div>
</div>
</>
  )
}