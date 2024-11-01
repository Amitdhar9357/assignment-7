import { useState } from 'react'

import './App.css'
import Nav from './components/Navbar/Nav'
import Banner from './components/Banner/Banner'
import Button from './components/Button/Button'
import Players from './components/players/Players'
import SelectedPlayer from './components/selected Player/Selectedplayer'
import Footer from './components/Footer/Footer'




function App() {

  const [isActive, setActive] = useState(true)

  const handelActive = (active) => {
    setActive(active)

  }

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Button handelActive={handelActive} isActive={isActive} ></Button>
      {
        isActive ? <Players></Players>: <SelectedPlayer></SelectedPlayer> 
      }
      <Footer></Footer>
    </>
  )
}

export default App
