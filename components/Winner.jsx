import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion';

function Winner({ handlePlayAgain, correctAnswer, level, skipWord, trySubmit }) {
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
        <div className="flex flex-col-reverse xl:flex-row gap-6 xl:gap-4 justify-center items-center bg-gradient-to-r from-green-200 to-white min-h-screen py-6 xl:py-none">
          <div className="p-4 backdrop-blur-xl bg-white/50 shadow-md rounded-md flex gap-2 flex-col">
            <p className="text-2xl">Score board:</p>
            <p className="text-xl text-green-600">Score: {level - 1}</p>
            <p className="text-xl text-red-600">Skips: {skipWord}</p>
            <p className="text-xl text-red-600">Fails: {trySubmit}</p>
            <p className="text-xl">Correct answers:</p>
            {correctAnswer?.map((answer, i) => (
              <li className="border-2 border-green-600 text-green-700 bg-white/70 p-2 text-xl rounded-md" key={i}>{answer}</li>
            ))}
          </div>
          <div className="flex flex-col gap-6 justify-center items-center">
            <p className="text-2xl md:text-8xl font-bold text-green-700">Hooray!🎉</p> 
            <p className="text-2xl text-center md:text-5xl font-bold text-green-700">Thank you for playing the game🥰</p>
            <input type="button" value="Play again" className="bg-green-600 cursor-pointer text-white p-2 px-4 hover:bg-green-500 transition transition-delay-1 text-xl rounded-md" onClick={handlePlayAgain}/>
          </div>
        </div>
      </motion.div>
    )
}

export default Winner