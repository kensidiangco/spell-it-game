import Link from 'next/link'
import React from 'react'

function Navigation() {
  return (
    <div className="p-2 pt-12 px-8 flex items-center justify-between">
        <Link href="/" passHref>
            <span className="p-4 text-5xl text-[#CF6E33] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] font-bold cursor-pointer rounded-md transition transition-delay-1">Spell It</span>
        </Link>
        <span class="flex gap-4 text-white">
          {/* <Link href="#" passHref>
              <span className="p-2 px-4 text-md border-2 border-green-300 rounded-xl font-bold cursor-pointer transition transition-delay-1 shadow-xl drop-shadow-xl">Contact us</span>
          </Link> */}
          <Link href="/About" passHref>
              <span className="p-2 px-4 text-md border-2 border-rose-500 rounded-xl font-bold cursor-pointer transition transition-delay-1 shadow-xl drop-shadow-xl">About us</span>
          </Link>
        </span>
        {/* <Link href="/" passHref>
            <span className="p-4 text-md font-bold cursor-pointer rounded-md transition transition-delay-1">Coins <span className="bg-yellow-600 rounded-xl px-2">0</span></span>
        </Link> */}
    </div>
  )
}

export default Navigation