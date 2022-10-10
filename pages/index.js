import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import GamePanel from '../components/GamePanel'
import Loser from '../components/Loser'
import StartPage from '../components/StartPage'
import Winner from '../components/Winner'
import { AnimatePresence, motion } from 'framer-motion';
import TrySubmit from '../components/TrySubmit'
import Skips from '../components/Skips'
import ScoreBoard from '../components/ScoreBoard'

export default function Home() {
  const [getAge, setGetAge] = useState()
  const [age, setAge] = useState()
  const [adulthood, setAdulthood] = useState('')
  const [savedAge, setSavedAge] = useState()
  const [errorMessage, setErrorMessage] = useState()
  const [successAnswer, setSuccessMessage] = useState()
  const [level, setLevel] = useState(1);
  const [trySubmit, setTrySubmit] = useState(0);

  const [shuffleWord, setShuffleWord] = useState()
  const [category, setCategory] = useState()
  const [answer, setAnswer] = useState()
  const [rightAnswer, setRightAnswer] = useState()
  const [skipWord, setSkipWord] = useState(0)
  const [disableButton, setDisableButton] = useState(false)

  const [nextLevel, setNextLevel] = useState(0)

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
    "Planets" : [
      "EARTH", "SATURN", "JUPITER", "PLUTO", "MERCURY", "SUN", "MARS", "VENUS"
    ],
    "Colors": [
      "WHITE", "BLACK", "RED", "GREEN", "BLUE", "PURPLE", "ORANGE", "YELLOW", "GRAY"
    ]
  }

  const mediumWords = {
    "Body parts" : [
      "SHOULDER", "HAND", "PALM", "FOOT", "HEAD", "BACK", "CHEST", "LEGS", "UNCLE", "NECK", "EARS", "EYES", "NOSE", "MOUTH", "CHEEKS", "TEETH", "TOUNGE", "STOMACH", "TOE", "KNEE", "ELBOW", "FINGERS", "NAILS"
    ],
    "Numbers" : [
      "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN", "TWELVE", "THIRTHEEN", "FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN", "NINETEEN", "TWENTY"
    ],
  }

  const hardWords = {
    "Animals" : [
      "ELEPHANT", "ZEBRA", "HORSE", "DOG", "CAT", "TIGER", "MOUSE", "LION", "OSTRICH", "BIRD", "KANGAROO", "MONKEY", "GIRAFFE", "CROCODILE", "FISH", "DOLPHIN", "SHARK"
    ],
  }

  const intermediateWords = {
    "Super heroes": [
      "BATMAN", "SUPERMAN", "AQUAMAN", "SPIDERMAN", "IRONMAN", "BATWOMAN", "ANTMAN", "JOKER", "ROBINHOOD", "HULK", "WOLVERINE", "THOR", "ROBIN", "THANOS"
    ]
  }

  const BeginnerCategoryWords = Object.keys(BeginnerWords)
  const MediumCategoryWords = Object.keys(mediumWords)
  const HardCategoryWords = Object.keys(hardWords)
  const intermediateCategoryWords = Object.keys(intermediateWords)

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
      }
      
      if(pickedWord === shuffleWord) {
        setShuffleWord(pickedWord.split('').sort(function(){return 0.5-Math.random()}).join(''))
      }
      console.log(pickedWord, shuffleWord)
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
      }
      
      if(pickedWord === shuffleWord){
        setShuffleWord(pickedWord.split('').sort(function(){return 0.5-Math.random()}).join(''))
      }
    }
    // level 3
    if(age && level == 3) {
      const pickedCategory = HardCategoryWords[Math.floor(Math.random()*HardCategoryWords.length)]
      setCategory(pickedCategory)
      const word = hardWords[pickedCategory]
      const pickedWord = word[Math.floor(Math.random()*word.length)]
      setRightAnswer(pickedWord)
      const shuffleWord = pickedWord.split('').sort(function(){return 0.5-Math.random()}).join('') 

      if(pickedWord !== shuffleWord){
        setShuffleWord(shuffleWord)
      }
      
      if(pickedWord === shuffleWord){
        setShuffleWord(pickedWord.split('').sort(function(){return 0.5-Math.random()}).join(''))
      }
    }
    // level 4
    if(age && level == 4) {
      const pickedCategory = intermediateCategoryWords[Math.floor(Math.random()*intermediateCategoryWords.length)]
      setCategory(pickedCategory)
      const word = intermediateWords[pickedCategory]
      const pickedWord = word[Math.floor(Math.random()*word.length)]
      setRightAnswer(pickedWord)
      const shuffleWord = pickedWord.split('').sort(function(){return 0.5-Math.random()}).join('') 

      if(pickedWord !== shuffleWord){
        setShuffleWord(shuffleWord)
      }
      
      if(pickedWord === shuffleWord){
        setShuffleWord(pickedWord.split('').sort(function(){return 0.5-Math.random()}).join(''))
      }
    }
  }, [age, skipWord, nextLevel])

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
    setTrySubmit(0)
    setAnswer()
    setLevel(1)
    setSkipWord(0)
    setCorrectAnswer([])
    setSuccessMessage('')
    setErrorMessage('')
    setNextLevel(0)
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
      setShuffleWord('')
      setTimeout(() => {
        setSuccessMessage()
      }, 1500)
    } else {
      setErrorMessage('Wrong! try again.')
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

  const handleNextLevel = () => {
    setNextLevel(nextLevel + 1)
    setErrorMessage('')
    setSuccessMessage('')
  }

  // Pages 

  if(trySubmit > 2) {
    return <Loser 
            handlePlayAgain={handlePlayAgain}
            correctAnswer={correctAnswer}
            level={level}
            skipWord={skipWord}
            trySubmit={trySubmit}
          /> 
  }

  if(level > 4) {
    return <Winner 
              handlePlayAgain={handlePlayAgain}
              correctAnswer={correctAnswer}
              level={level}
              skipWord={skipWord}
              trySubmit={trySubmit}
            />
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
      {/* <p className="text-3xl text-gray-800 pt-8 ml-10">Player: {adulthood}</p> */}
      {/* <div className="flex flex-col justify-center items-center gap-4 pb-12 min-h-screen"> */}

        {/* <input type="button" value="Edit Age" onClick={editAge} className="p-4 bg-blue-900 hover:bg-blue-800 rounded-md cursor-pointer text-white" />
        <div className="mt-8 flex flex-col mx-8 md:mx-none">
          <p className="text-2xl">Game rules:</p>
          <p className="text-2xl">- 3 Fails only</p>
          <p className="text-2xl">- 3 Skips only</p>
          <p className="text-2xl">- 2 correct answers to finish the game</p>
        </div> */}
        
        <div class="grid grid-cols-1 xl:grid-cols-3 gap-4 place-items-center xl:h-screen items-start pt-4 pb-8 md:pt-16">
          <ScoreBoard level={level} correctAnswer={correctAnswer} />

          <div className='grid grid-cols-1 gap-4 backdrop-blur-xl bg-white/90 p-4 rounded-md shadow-md'>
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
              rightAnswer={rightAnswer}
              handleNextLevel={handleNextLevel}
            />
          </div>

          <div className='grid grid-cols-1 gap-4 backdrop-blur-xl bg-white/90 p-4 rounded-md shadow-md w-auto xl:w-96'>
            <p className="text-3xl font-bold text-gray-700">Game status:</p>
            <p className="text-xl border-2 border-purple-800 px-2 text-purple-800 rounded-md">Level: {level}</p>
            
            <TrySubmit trySubmit={trySubmit} />
            <Skips skipWord={skipWord} />
              
          </div>
        </div>
          
      {/* </div> */}
      </motion.div>
  )
}
