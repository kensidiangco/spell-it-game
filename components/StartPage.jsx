import React from 'react'

function StartPage({handleSubmit, getAge, setGetAge}) {
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

export default StartPage