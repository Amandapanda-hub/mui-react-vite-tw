import React from 'react'
import Hero from './components/Hero/Hero'
import SignUp from './components/SignUp/SignUp'
import FirstStopShop from './components/FirstStopShop/FirstStopShop'
import Options from './components/Options/Options'
import SignUpSlide from './components/SignUpSlide/SignUpSlide'

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden mb-10">
      <Hero/>
      <SignUp/>
      <FirstStopShop/>
      <Options/>
      <SignUpSlide/>
    </div>
  )
}