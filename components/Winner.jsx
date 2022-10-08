import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion';

function Winner({ handlePlayAgain }) {
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
            <title>Spell it | Success</title>
        </Head>
        <div className="flex flex-col gap-4 justify-center items-center h-screen bg-gradient-to-r from-green-200 to-white">
            <p className="text-2xl md:text-8xl font-bold text-green-700">Hooray!🎉</p> 
            <p className="text-2xl text-center md:text-5xl font-bold text-green-700">Thank you for playing the game🥰</p>
            <input type="button" value="Play again" className="bg-green-600 cursor-pointer text-white p-2 px-4 hover:bg-green-500 transition transition-delay-1 text-xl" onClick={handlePlayAgain}/>
        </div>
      </motion.div>
    )
}

export default Winner