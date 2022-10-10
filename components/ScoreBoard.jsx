import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

function ScoreBoard({ correctAnswer, level, adulthood }) {
  return (
    <>
        <div className='flex flex-col gap-4 backdrop-blur-xl bg-white/90 p-4 rounded-md shadow-md md:w-80 xl:w-96'>
            <p className="font-bold text-gray-700">Player: {adulthood}</p>
            <p className="text-3xl font-bold text-gray-700">Score board:</p>
            <p className="text-xl border-2 border-purple-800 text-purple-800 rounded-md px-4">Score: <span>{level - 1}</span></p>

            <AnimatePresence>
              {correctAnswer?.map((answer, i) => (
                <motion.div 
                  key={i}
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
                  },
                }}
              >
                  <li className="bg-green-600 px-2 rounded-md text-white text-xl">{answer}</li>
              </motion.div>
              ))}
            </AnimatePresence>
          </div>
    </>
  )
}

export default ScoreBoard