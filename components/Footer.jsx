import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className="p-8 bg-black flex justify-center text-white">
        <Link href="#" passHref>
            <span className="text-xl font-bold cursor-pointer rounded-md transition transition-delay-1">About us</span>
        </Link>
    </div>
  )
}

export default Footer