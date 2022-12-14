import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

function GamePanel({ disableButton, category, rightAnswer, skipWord, shuffleWord, handleSubmitAnswer, handleSkip, answer, setAnswer, errorMessage, successAnswer, handleNextLevel }) {

  let utterance = new SpeechSynthesisUtterance();
  utterance.text=rightAnswer
  const handleSpeech = () => {
    speechSynthesis.speak(utterance);
  }

  return (
    <>
      <div className='grid grid-cols-1 gap-4 backdrop-blur-xl bg-white/90 p-4 mt-28 rounded-md shadow-md font-bold'>
          <span className="flex items-center xl:flex-row justify-between gap-4">
            <p className="border-2 border-purple-800 text-purple-800 px-2 rounded-md md:text-xl">{category}</p> 

              <Image onClick={handleSpeech} disabled={!rightAnswer} src="/Speaker_Icon.png" width={30} height={25} className="cursor-pointer"/>


            {/*<p className="text-sm text-purple-500">Level: {level}</p>
            <p className={`${trySubmit > 2? "text-md bg-red-600 text-white px-2 rounded-md text-xl" : "text-purple-700 text-sm"}`}>Fails: {trySubmit - 1}</p>
            <p className={`${skipWord > 2? "text-md bg-red-600 text-white px-2 rounded-md text-xl" : "text-purple-700 text-sm"}`}>Skips: {skipWord}</p>*/}
          </span>

        <form className='flex flex-col xl:flex-row gap-2' onSubmit={handleSubmitAnswer}>
          <input type="button" value="Skip" className={`${skipWord == 3? "border-2 border-gray-500 text-gray-600" : "border-2 border-blue-600 xl:hover:border-blue-500 text-blue-600"} rounded-md p-2 cursor-pointer transition transition-delay-1 hidden xl:block`} onClick={handleSkip} disabled={disableButton || !shuffleWord}/>
          
          <input type="text" placeholder="Spell it..." className="bg-slate-300 rounded-md p-3 placeholder:text-gray-600 text-xl" value={answer} onChange={(e) => setAnswer(e.target.value)} required />
          
          <input type="submit" value="Submit" className={`${disableButton || !shuffleWord? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-500'} text-gray-200 rounded-md p-2 cursor-pointer transition transition-delay-1`} disabled={disableButton || !shuffleWord}/>

          <input type="button" value="Skip" className={`${skipWord == 3? "border-2 border-gray-500 text-gray-600" : "border-2 border-blue-600 xl:hover:border-blue-500 text-blue-600"} rounded-md p-2 cursor-pointer transition transition-delay-1 xl:hidden`} onClick={handleSkip} disabled={disableButton || !shuffleWord}/>
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
              <p className="text-center bg-red-500 text-white px-3 rounded-md text-xl">{errorMessage}</p>
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
              <p className="text-center bg-green-500 text-white px-3 rounded-md text-xl">{successAnswer}</p>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </>
  )
}

export default GamePanel