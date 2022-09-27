import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [getAge, setGetAge] = useState()
  const [age, setAge] = useState()
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
  }

  if(trySubmit > 3) {
    return (
      <>
        <Head>
          <title>Spell it | Game Over</title>
        </Head>
        <div className="flex flex-col gap-4 justify-center items-center h-screen bg-gradient-to-r from-red-200 to-white">

          <p className="text-2xl md:text-8xl font-bold text-red-600">😭GAME OVER!💔</p>
          <input type="button" value="Play again" className="bg-white hover:bg-gray-50 border-2 border-red-600 shadow-md cursor-pointer py-2 px-4 transition transition-delay-1 text-xl" onClick={handlePlayAgain}/>
        </div>
      </>
    )
  }

  if(level > 2) {
    return (
      <>
        <Head>
          <title>Spell it | Success</title>
        </Head>
        <div className="flex flex-col gap-4 justify-center items-center h-screen bg-gradient-to-r from-green-200 to-white">
          <p className="text-2xl md:text-8xl font-bold text-green-700">Hooray!🎉</p> 
          <p className="text-2xl text-center md:text-5xl font-bold text-green-700">Thank you for playing the game🥰</p>
          <input type="button" value="Play again" className="bg-green-600 cursor-pointer text-white p-2 px-4 hover:bg-green-500 transition transition-delay-1 text-xl" onClick={handlePlayAgain}/>
        </div>
      </>
    )
  }

  if(!age) {
    return (
      <div className="bg-black h-screen text-white text-center flex flex-col gap-6 justify-center items-center font-mono">

        <p className="text-5xl font-bold">Welcome to our game SPELL IT!</p>
        <p className="text-md font-bold">Input your age before you can play!</p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <input type="number" placeholder='Input your age...' className="p-4 rounded-md bg-gray-400 placeholder:text-white" name="age" value={getAge} onChange={(e)=> setGetAge(e.target.value)}/>

          <input type="submit" value="Submit" className="p-4 bg-blue-900 hover:bg-blue-800 rounded-md cursor-pointer"/>
        </form>
      </div>
    )
  }

  const handleSubmitAnswer = (e) => {
    e.preventDefault()
    
    if(answer?.toUpperCase() === rightAnswer) {
      setSuccessMessage("Correct!")
      setLevel(level + 1);
      setTimeout(() => {
        setSuccessMessage()
      }, 5000)
    } else {
      setErrorMessage(`Wrong spelling! \n try: ${trySubmit}`)
      setTrySubmit(trySubmit + 1);
      setTimeout(() => {
        setErrorMessage()
      }, 3000)
    }
  }

  const handleSkip = () => {
    if(skipWord < 3) {
      setSkipWord(skipWord + 1)
    }
    if(skipWord > 3) {
      setErrorMessage(`No more skip!`)
        setTimeout(() => {
          setErrorMessage()
        }, 3000)
    }
  }
  
  console.log(skipWord)

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex flex-col justify-center items-center gap-4 pb-12">
        {/* <input type="button" value="Edit Age" onClick={editAge} className="p-4 bg-blue-900 hover:bg-blue-800 rounded-md cursor-pointer text-white" /> */}
        <div className="md:mt-8 flex flex-col">
          <p className="text-2xl">Rules:</p>
          <p className="text-2xl">- 3 Tries only</p>
          <p className="text-2xl">- 3 Skips only</p>
          <p className="text-2xl">- 2 correct answers to finish the game</p>
        </div>
        <div className="p-8 bg-white rounded-md shadow-xl flex flex-col gap-6 my-8">
          <span className="flex flex-col md:flex-row justify-around items-center">
            <p className="text-sm text-purple-700">Category: {category}</p>
            <p className={`${trySubmit > 2? "text-md bg-red-600 text-white px-2 rounded-xl" : "text-purple-700 text-sm"}`}>Tries: {trySubmit - 1}</p>
            <p className="text-sm text-purple-700">Level: {level}</p>
            <p className={`${skipWord > 2? "text-md bg-red-600 text-white px-2 rounded-xl" : "text-purple-700 text-sm"}`}>Skips: {skipWord}</p>
          </span>
          <p className="text-6xl font-bold text-center">{shuffleWord}</p>

          <form className='flex flex-col md:flex-row gap-2' onSubmit={handleSubmitAnswer}>
            <input type="button" value="Skip" className="bg-green-600 text-gray-200 rounded-md px-4 cursor-pointer hover:bg-green-500" onClick={handleSkip} />
            <input type="text" placeholder="Spell it..." className="bg-slate-300 rounded-md p-3 placeholder:text-gray-600 text-xl" value={answer} onChange={(e) => setAnswer(e.target.value)} required />
            <input type="submit" value="Submit" className="bg-blue-600 text-gray-200 rounded-md px-4 cursor-pointer hover:bg-blue-500"/>
          </form>
          {errorMessage && <p className="text-center bg-red-500 text-white px-3 rounded-xl">{errorMessage}</p>}
          {successAnswer && <p className="text-center bg-green-500 text-white px-3 rounded-xl">{successAnswer}</p>}
        </div>
      </div>
    </>
  )
}
