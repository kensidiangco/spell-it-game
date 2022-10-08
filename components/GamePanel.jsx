import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

function GamePanel({ disableButton, category, trySubmit, skipWord, shuffleWord, handleSubmitAnswer, handleSkip, answer, setAnswer, errorMessage, successAnswer }) {
  return (
    <>
        {/* <div className="p-8 bg-white rounded-md shadow-xl flex flex-col gap-6 md:my-8"> */}
           <span className="flex flex-col md:flex-row items-center">
            <p className="bg-purple-800 text-white px-2 rounded-xl">Category: {category}</p>
            {/*<p className="text-sm text-purple-500">Level: {level}</p>
            <p className={`${trySubmit > 2? "text-md bg-red-600 text-white px-2 rounded-xl" : "text-purple-700 text-sm"}`}>Fails: {trySubmit - 1}</p>
            <p className={`${skipWord > 2? "text-md bg-red-600 text-white px-2 rounded-xl" : "text-purple-700 text-sm"}`}>Skips: {skipWord}</p>
          */}</span>

          <motion.button
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: .5 },
            }}
            // whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
            <p className="text-5xl md:text-7xl bg-purple-800 text-white rounded-md px-2 font-bold text-center tracking-widest">{shuffleWord}</p>
          </motion.button>

          <form className='flex flex-col md:flex-row gap-2' onSubmit={handleSubmitAnswer}>
            <input type="button" value="Skip" className={`${skipWord == 3? "bg-red-600" : "bg-blue-600 hover:bg-blue-500"} text-gray-200 rounded-md p-2 cursor-pointer transition transition-delay-1`} onClick={handleSkip}/>
            <input type="text" placeholder="Spell it..." className="bg-slate-300 rounded-md p-3 placeholder:text-gray-600 text-xl" value={answer} onChange={(e) => setAnswer(e.target.value)} required />
            <input type="submit" value="Submit" className={`${disableButton? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-500'} text-gray-200 rounded-md p-2 cursor-pointer transition transition-delay-1`} disabled={disableButton}/>
          </form>

          <AnimatePresence>
            {errorMessage && 
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
                },
              }}
              >
                <p className="text-center bg-red-500 text-white px-3 rounded-xl">{errorMessage}</p>
              </motion.div>
            }
          </AnimatePresence>
          
          <AnimatePresence>
            {successAnswer && 
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
                },
              }}
              >
                <p className="text-center bg-green-500 text-white px-3 rounded-xl">{successAnswer}</p>
              </motion.div>
            }
          </AnimatePresence>
        {/* </div> */}
    </>
  )
}

export default GamePanel