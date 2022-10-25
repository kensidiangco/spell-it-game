import React from 'react'

function StartPage({handleSubmit, getAge, setGetAge}) {
    return (
        <div className="drop-shadow-2xl text-center flex flex-col gap-6 font-helvetica">
  
          <p className="text-4xl xl:text-[75px] text-[#C2D515] font-bold drop-shadow-xl mt-32">LET&#39;S PLAY SPELL IT!</p>
          
          <p className="text-xl font-bold text-[#C2D515]">Input your age before you can play!</p>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <input type="number" placeholder='Input your age...' className="p-4 rounded-md bg-gray-400 placeholder:text-white" name="age" value={getAge} onChange={(e)=> setGetAge(e.target.value)} required/>
  
            <input type="submit" value="Play" className="p-4 bg-rose-600 hover:bg-rose-500 rounded-md cursor-pointer transition transition-delay-1 text-white font-bold"/>
          </form>
        </div>
      )
}

export default StartPage