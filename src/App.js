import React, { useEffect, useState } from 'react'
import Navbar from './scenes/Navbar'
import DotGroup from './scenes/DotGroup'
import Landing from './scenes/Landing'
import MySkills from './cmp/MySkills'
import LineGradient from './cmp/LineGradient'
import Projects from './cmp/Projects'
import Feedback from './cmp/Feedback'

const App = () => {
  const [selectedPage, setSelectedPage] = useState('home')
  const [isTopOfPage, setIsTopOfPage] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true)
      if (window.screenY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <div className="w-full px-4 md:px-0 sm:w-5/6 mx-auto py-20">
        <DotGroup
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          // Wrap DotGroup in a condition
          className={!isTopOfPage ? 'hidden sm:block' : ''}
        />
        <Landing setSelectedPage={setIsTopOfPage} />
      </div>
      <LineGradient/>
      <div className="w-full sm:w-5/6 mx-auto py-20 px-4 md:px-0">
        <MySkills />
      </div>
      <LineGradient/>
      <div className="w-full sm:w-5/6 mx-auto py-20 px-4 md:px-0">
        <Projects />
      </div>
      <div className="w-full sm:w-5/6 mx-auto py-20 px-4 md:px-0">
        <Feedback />
      </div>
    </div>
  )
}

export default App
