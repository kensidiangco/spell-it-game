import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [getAge, setGetAge] = useState()
  const [age, setAge] = useState()
  const [savedAge, setSavedAge] = useState()
  const [errorMessage, setErrorMessage] = useState()
  const [successAnswer, setSuccessMessage] = useState()

  const [shuffleWord, setShuffleWord] = useState()
  const [category, setCategory] = useState()
  const [answer, setAnswer] = useState()
  const [rightAnswer, setRightAnswer] = useState()

  const BeginnerWords = {
    "Animals" : [
      "ELEPHANT", "ZEBRA", "HORSE", "UNICORN"
    ],
    "Planets" : [
      "EARTH", "SATURN", "JUPITER"
    ]
  }

  const BeginnerCategoryWords = Object.keys(BeginnerWords)

  useEffect(() => {
    if(age) {
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
  }, [age])
  
  

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

  if(!age) {
    return (
      <div className="bg-black h-screen text-white flex flex-col gap-6 justify-center items-center font-mono">

        <p className="text-5xl font-bold">Welcome to our game SPELL IT!</p>
        <p className="text-md font-bold">Input your age before you can play!</p>
        <div className="flex gap-4 justify-center items-center">
          <input type="number" placeholder='Input your age...' className="p-4 rounded-md bg-gray-400 placeholder:text-white" name="age" value={getAge} onChange={(e)=> setGetAge(e.target.value)}/>

          <input type="button" value="Submit" onClick={handleSubmit} className="p-4 bg-blue-900 hover:bg-blue-800 rounded-md cursor-pointer" />
        </div>
      </div>
    )
  }

  const handleSubmitAnswer = () => {
    if(answer.toUpperCase() === rightAnswer) {
      setSuccessMessage("Correct!")
      setTimeout(() => {
        setSuccessMessage()
      }, 5000)
    } else {
      setErrorMessage("Wrong spelling.")
      setTimeout(() => {
        setErrorMessage()
      }, 3000)
    }
  }

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex flex-col justify-center items-center gap-4">
        {/* <input type="button" value="Edit Age" onClick={editAge} className="p-4 bg-blue-900 hover:bg-blue-800 rounded-md cursor-pointer text-white" /> */}

        <div className="p-8 bg-white rounded-md shadow-md flex flex-col gap-6 mt-24">
          {errorMessage && <p className="text-center bg-red-500 text-white px-3 rounded-xl">{errorMessage}</p>}
          {successAnswer && <p className="text-center bg-green-500 text-white px-3 rounded-xl">{successAnswer}</p>}
          
          <p className="text-sm text-gray-600">Category: {category}</p>
          <p className="text-6xl font-bold text-center">{shuffleWord}</p>

          <span className='flex gap-2'>
            <input type="text" placeholder="Guess the word spelling..." className="bg-slate-300 rounded-md p-3 placeholder:text-gray-900 text-xl" value={answer} onChange={(e) => setAnswer(e.target.value)} />
            <input type="button" value="Submit" className="bg-blue-600 text-gray-200 rounded-md px-4 cursor-pointer hover:bg-blue-500" onClick={handleSubmitAnswer} />
          </span>
        </div>
      </div>
    </>
  )
}
