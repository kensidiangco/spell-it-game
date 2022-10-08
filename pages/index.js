import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import GamePanel from '../components/GamePanel'
import Loser from '../components/Loser'
import StartPage from '../components/StartPage'
import Winner from '../components/Winner'
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  const [getAge, setGetAge] = useState()
  const [age, setAge] = useState()
  const [adulthood, setAdulthood] = useState('')
  const [savedAge, setSavedAge] = useState()
  const [errorMessage, setErrorMessage] = useState()
  const [successAnswer, setSuccessMessage] = useState()
  const [level, setLevel] = useState(1);
  const [trySubmit, setTrySubmit] = useState(1);

  const [shuffleWord, setShuffleWord] = useState()
  const [category, setCategory] = useState()
  const [answer, setAnswer] = useState()
  const [rightAnswer, setRightAnswer] = useState()
  const [skipWord, setSkipWord] = useState(0)
  const [disableButton, setDisableButton] = useState(false)

  const [correctAnswer, setCorrectAnswer] = useState([]);

  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };
  
    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);

  const BeginnerWords = {
    "Animals" : [
      "ELEPHANT", "ZEBRA", "HORSE", "DOG", "CAT", "RAT", "TIGER", "MOUSE"
    ],
  }

  const mediumWords = {
    "Planets" : [
      "EARTH", "SATURN", "JUPITER", "PLUTO", "MECURY", "SUN", "MARS", "VENUS"
    ]
  }

  const BeginnerCategoryWords = Object.keys(BeginnerWords)
  const MediumCategoryWords = Object.keys(mediumWords)

  useEffect(() => {
    if (age < 11) {
      setAdulthood('Young children')
    } 

    if (age > 10 && age < 20) {
      setAdulthood('Teenager')
    } 

    if (age > 19 && age <26) {
      setAdulthood('Young Adult')
    } 

    if (age > 25) {
      setAdulthood('Late Adult')
    } 

    // Level 1
    if(age && level == 1) {
      const pickedCategory = BeginnerCategoryWords[Math.floor(Math.random()*BeginnerCategoryWords.length)]
      setCategory(pickedCategory)
      const word = BeginnerWords[pickedCategory]
      const pickedWord = word[Math.floor(Math.random()*word.length)]
      setRightAnswer(pickedWord)
      const shuffleWord = pickedWord.split('').sort(function(){return 0.5-Math.random()}).join('') 
      if(pickedWord !== shuffleWord){
        setShuffleWord(shuffleWord)
      }else{
        setShuffleWord(pickedWord.split('').sort(function(){return 0.5-Math.random()}).join(''))
      }
    }

    // Level 2
    if(age && level == 2) {
      const pickedCategory = MediumCategoryWords[Math.floor(Math.random()*MediumCategoryWords.length)]
      setCategory(pickedCategory)
      const word = mediumWords[pickedCategory]
      const pickedWord = word[Math.floor(Math.random()*word.length)]
      setRightAnswer(pickedWord)
      const shuffleWord = pickedWord.split('').sort(function(){return 0.5-Math.random()}).join('') 
      if(pickedWord !== shuffleWord){
        setShuffleWord(shuffleWord)
      }else{
        setShuffleWord(pickedWord.split('').sort(function(){return 0.5-Math.random()}).join(''))
      }
    }
  }, [age, trySubmit, level, skipWord])

  useEffect(() => {
    if(getAge) {
      localStorage.setItem('age', age)
      const userAge = localStorage.getItem('age')
      
      setSavedAge(userAge)
      console.log(userAge, " localStorage")
    }
  }, [age])

  const handleSubmit = () => {
    setAge(getAge)
  }

  const editAge = () => {
    setAge(null)
  }

  const handlePlayAgain = () => {
    setTrySubmit(1)
    setAnswer()
    setLevel(1)
    setSkipWord(0)
    setCorrectAnswer([])
    setSuccessMessage('')
    setErrorMessage('')
  }

  const handleSubmitAnswer = (e) => {
    e.preventDefault()
    setAnswer('')

    setDisableButton(true)
    setTimeout(() => {
      setDisableButton(false)
    }, 1500)
    
    if(answer?.toUpperCase() === rightAnswer) {
      setSuccessMessage("Correct!")
      setCorrectAnswer(prevArr => [...prevArr, answer])
      setLevel(level + 1);
      setTimeout(() => {
        setSuccessMessage()
      }, 1500)
    } else {
      setErrorMessage(`Wrong spelling! \n try: ${trySubmit}`)
      setTrySubmit(trySubmit + 1);
      setTimeout(() => {
        setErrorMessage()
      }, 1500)
    }
  }

  const handleSkip = () => {
    if(skipWord < 3) {
      setSkipWord(skipWord + 1)
    }
    if(skipWord == 3) {
      setErrorMessage(`No more skip!`)
        setTimeout(() => {
          setErrorMessage()
        }, 2000)
    }
  }

  // Pages 

  if(trySubmit > 3) {
    return <Loser handlePlayAgain={handlePlayAgain} />
  }

  if(level > 2) {
    return <Winner handlePlayAgain={handlePlayAgain} />
  }

  if(!age) {
    return <StartPage handleSubmit={handleSubmit} getAge={getAge} setGetAge={setGetAge} />
  }
  
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
        <title>Spell It | Gameplay</title>
      </Head>
      <p className="text-3xl text-gray-800 pt-8 ml-10">Player: {adulthood}</p>
      {/* <div className="flex flex-col justify-center items-center gap-4 pb-12 min-h-screen"> */}

        {/* <input type="button" value="Edit Age" onClick={editAge} className="p-4 bg-blue-900 hover:bg-blue-800 rounded-md cursor-pointer text-white" />
        <div className="mt-8 flex flex-col mx-8 md:mx-none">
          <p className="text-2xl">Game rules:</p>
          <p className="text-2xl">- 3 Fails only</p>
          <p className="text-2xl">- 3 Skips only</p>
          <p className="text-2xl">- 2 correct answers to finish the game</p>
        </div> */}
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center md:h-screen items-start pt-4 pb-8 md:pt-16">
          <div className='flex flex-col gap-4 bg-white p-4 rounded-md shadow-md md:w-96'>
            <p className="text-3xl font-bold text-gray-700">Score board</p>
            <p className="text-xl bg-purple-800 px-2 text-white rounded-md">Score: <span>{level - 1}</span></p>

            <AnimatePresence>
              {correctAnswer?.map((answer, i) => (
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
                  <li className="bg-green-600 px-2 rounded-md text-white">{answer}</li>
              </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className='grid grid-cols-1 gap-4 bg-white p-4 rounded-md shadow-md'>
            <GamePanel 
              level={level} 
              category={category} 
              trySubmit={trySubmit} 
              skipWord={skipWord} 
              shuffleWord={shuffleWord} 
              handleSubmitAnswer={handleSubmitAnswer} 
              handleSkip={handleSkip} 
              answer={answer} 
              setAnswer={setAnswer} 
              errorMessage={errorMessage} 
              successAnswer={successAnswer} 
              disableButton={disableButton}
            />
          </div>

          <div className='grid grid-cols-1 gap-4 bg-white p-4 rounded-md shadow-md md:w-96'>
            <p className="text-3xl font-bold text-gray-700">Status</p>
            <p className="text-purple-600">Level: {level}</p>
            {trySubmit > 2 ? 
              <motion.div
                animate={{
                  rotate: [-1, 1.4, 1],
                }}
                transition={{
                  delay: Math.random() * 0.7 + 0.05,
                  repeat: Infinity,
                  duration: Math.random() * 0.07 + 0.23
                }}
              >
                <p className={`${trySubmit > 2? "text-md bg-red-600 text-white px-2 rounded-xl" : "text-purple-700"}`}>Fails: {trySubmit - 1}</p>
              </motion.div>
            :
              <p className={`${trySubmit > 2? "text-md bg-red-600 text-white px-2 rounded-xl" : "text-purple-700"}`}>Fails: {trySubmit - 1}</p>
            
            }
            {skipWord > 2?
              <motion.div
                animate={{
                  rotate: [-1, 1.4, 1],
                }}
                transition={{
                  delay: Math.random() * 0.7 + 0.05,
                  repeat: Infinity,
                  duration: Math.random() * 0.07 + 0.23
                }}
              >
                <p className={`${skipWord > 2? "text-md bg-red-600 text-white px-2 rounded-xl" : "text-purple-700"}`}>Skips: {skipWord}</p>
              </motion.div>
            :
              <p className={`${skipWord > 2? "text-md bg-red-600 text-white px-2 rounded-xl" : "text-purple-700"}`}>Skips: {skipWord}</p>
            }
          </div>
        </div>
          
      {/* </div> */}
      </motion.div>
  )
}
