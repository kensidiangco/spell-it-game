import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion';

function Loser({ handlePlayAgain }) {
  return (
    <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={{
          hidden: {
            scale: .8,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: .4
            }
          },
        }}
      >
        <Head>
          <title>Spell it | Game Over</title>
        </Head>
        <div className="flex flex-col gap-4 justify-center items-center h-screen bg-gradient-to-r from-red-200 to-white">

          <p className="text-2xl md:text-8xl font-bold text-red-600">😭GAME OVER!💔</p>
          <input type="button" value="Play again" className="bg-white hover:bg-gray-50 border-2 border-red-600 shadow-md cursor-pointer py-2 px-4 transition transition-delay-1 text-xl" onClick={handlePlayAgain}/>
        </div>
      </motion.div>
  )
}

export default Loser