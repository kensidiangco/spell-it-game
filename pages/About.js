import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className="px-24 py-8">
        <div className="bg-white p-8 shadow-xl flex flex-col gap-4 rounded-xl">
          <div className="flex flex-col gap-4">
            <p className="text-3xl font-bold">About website.</p>
            <p className="text-xl mx-8">This website is created for those grade 12 students who will take BSIT on Saint Jude College Manila, we expect that the student who will use this website has a background about programming in python and developing a website using HTML, CSS, and JS</p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-3xl font-bold">Developers:</p>
            <div className="flex flex-wrap gap-8 p-2 justify-center items-center">
              <div className="bg-gray-100 rounded-xl shadow-md">
                <Image src="/kensidiangco.jpg" width={300} height={340} className="rounded-xl" />
                <p className="text-xl font-bold mx-6">Sidiangco, John Keneth</p>
                <p className="text-xl font-bold mx-6">kensidiangco@gmail.com</p>
                <p className="text-xl font-bold mx-6 pb-4">Full Stack Developer</p>
              </div>
              <div className="bg-gray-100 rounded-xl shadow-md">
                <Image src="/nikkimarcelo.jpg" width={340} height={340} className="rounded-xl" />
                <p className="text-xl font-bold mx-6">Marcelo, Nikki</p>
                <p className="text-xl font-bold mx-6">nikkimarcelo71@gmail.com</p>
                <p className="text-xl font-bold mx-6 pb-4">Researcher, Designer</p>
              </div>
              <div className="bg-gray-100 rounded-xl shadow-md">
                <Image src="/jhonacarag.jpg" width={370} height={340} className="rounded-xl" />
                <p className="text-xl font-bold mx-6">Carag, Jhona May</p>
                <p className="text-xl font-bold mx-6">jhonamay271@gmail.com</p>
                <p className="text-xl font-bold mx-6 pb-4">Researcher, Documents</p>
              </div>
              <div className="bg-gray-100 rounded-xl shadow-md">
                <Image src="/hattamadid.jpg" width={340} height={340} className="rounded-xl" />
                <p className="text-xl font-bold mx-6">Madid, AbdulHatta</p>
                <p className="text-xl font-bold mx-6">pxhatta36@gmail.com</p>
                <p className="text-xl font-bold mx-6 pb-4">Researcher, Documents</p>
              </div>
              <div className="bg-gray-100 rounded-xl shadow-md">
                <Image src="/patrickdalioan.jpg" width={340} height={340} className="rounded-xl" />
                <p className="text-xl font-bold mx-6">Dalioan, Patrick John</p>
                <p className="text-xl font-bold mx-6">patrickdalioan20@gmail.com</p>
                <p className="text-xl font-bold mx-6 pb-4">Researcher, Documents</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About