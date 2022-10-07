import React from 'react'

export default function Header() {
  return (
    <>
    <input
        className="outline-none border-none bg-gray-50 h-full w-full mr-2"
        type="search"
        name="search"
        placeholder="Search"
    />
    <img
        className="inline h-6 cursor-pointer"
        src="./assets/search.svg"
        alt="Search"
    />
    </>
  )
}
