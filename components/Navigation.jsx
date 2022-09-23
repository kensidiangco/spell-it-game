import Link from 'next/link'
import React from 'react'

function Navigation() {
  return (
    <div className="p-2 px-8 bg-black text-white flex items-center justify-between">
        <Link href="/" passHref>
            <span className="p-4 text-xl font-bold cursor-pointer hover:bg-gray-800 rounded-md transition transition-delay-1">Spell It</span>
        </Link>

        <Link href="/" passHref>
            <span className="p-4 text-md font-bold cursor-pointer hover:bg-gray-800 rounded-md transition transition-delay-1">About us</span>
        </Link>
        {/* <Link href="/" passHref>
            <span className="p-4 text-md font-bold cursor-pointer hover:bg-gray-800 rounded-md transition transition-delay-1">Coins <span className="bg-yellow-600 rounded-xl px-2">0</span></span>
        </Link> */}
    </div>
  )
}

export default Navigation