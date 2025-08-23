'use client'
// pages/index.js
import Head from 'next/head'
import Image from 'next/image'
//import { useState } from 'react'
import Poorns from "../../../public/assets/Poorns/poorna.png";
import Swan from "../../../public/assets/Poorns/swan.png";
import Me from "../../../public/assets/Poorns/me.png";

export default function WeddingGift() {
  const handleGiftCardClick = () => {
    // Replace this URL with the actual Airbnb gift card link
    window.open('https://www.airbnb.com/gift', '_blank')
  }

  return (
    <>
      <Head>
        <title>Wedding Gift for Poorna & Swanand</title>
        <meta name="description" content="A special wedding gift" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
        {/* Header */}
        <header className="px-6 py-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-pink-300 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">🏠</span>
              </div>
              <span className="text-xl font-light text-purple-700">Wedding Travels</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-6 py-16">
          <div className="max-w-2xl mx-auto text-center">
            {/* Title */}
            <h1 className="text-5xl sm:text-6xl font-extralight text-purple-800 mb-4 tracking-tight">
              You're 6 months Married! 🎉
            </h1>
            <h2 className="text-3xl sm:text-4xl font-thin text-pink-600 mb-20">
              Poorna & Swanand ✨
            </h2>

            {/* Photos Section */}
            <div className="flex justify-center items-center space-x-16 mb-20">
              {/* Swanand's Photo */}
              <div className="text-center">
                <div className="w-40 h-40 sm:w-44 sm:h-44">
                  <Image
                    src={Swan}
                    alt="Swanand"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="mt-4 text-base font-light text-blue-700">Swanand</p>
              </div>

              {/* Heart Icon */}
              <div className="text-5xl">💕</div>

              {/* Poorna's Photo */}
              <div className="text-center">
                <div className="w-40 h-40 sm:w-44 sm:h-44">
                  <Image
                    src={Poorns}
                    alt="Poorna"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="mt-4 text-base font-light text-blue-700">Poorna</p>
              </div>
            </div>

            {/* Message */}
            <div className="bg-gradient-to-br from-yellow-100 to-green-100 rounded-3xl p-10 sm:p-12 mb-20 border border-green-200">
              <p className="text-xl sm:text-2xl text-purple-700 mb-8 font-light leading-relaxed">
                OMG, you two are finally tying the knot! 🥳
              </p>
              <p className="text-lg sm:text-xl text-blue-700 mb-12 font-extralight leading-relaxed">
                Get ready for the adventure of a lifetime! I'm talking cozy Airbnbs, 
                spontaneous road trips, and making memories that'll make everyone else jealous. 
                This little gift should get your wanderlust started! 🗺️✈️
              </p>

              {/* Your Photo */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24">
                  <Image
                    src={Me}
                    alt="From your friend"
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-base text-pink-600 font-light">Can't wait to see where you go! 🏖️🏔️🏙️</p>
            </div>

            {/* Gift Card Button */}
            <div className="mb-12">
              <button
                onClick={handleGiftCardClick}
                className="
                  bg-gradient-to-r from-pink-300 to-purple-300 text-purple-800 font-light text-xl
                  px-12 py-5 rounded-full 
                  border-2 border-pink-200
                  focus:outline-none focus:ring-4 focus:ring-pink-100
                "
              >
                Let's Gooo! 🚀 Get Your Gift Card
              </button>
            </div>

            {/* Footer Message */}
            <p className="text-blue-600 text-base font-extralight">
              Your honeymoon adventure awaits! 🌴☀️
            </p>
          </div>
        </main>

        {/* Colorful background elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
          <div className="absolute top-20 left-10 w-4 h-4 bg-pink-300 rounded-full"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-purple-300 rounded-full"></div>
          <div className="absolute bottom-40 left-20 w-5 h-5 bg-blue-300 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-2 h-2 bg-yellow-300 rounded-full"></div>
          <div className="absolute top-60 left-1/3 w-3 h-3 bg-green-300 rounded-full"></div>
          <div className="absolute bottom-60 right-1/3 w-4 h-4 bg-orange-300 rounded-full"></div>
        </div>
      </div>
    </>
  )
}