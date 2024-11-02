import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import Nav from './components/Navbar/Nav'
import Banner from './components/Banner/Banner'
import Button from './components/Button/Button'
import Players from './components/players/Players'
import SelectedPlayers from './components/selected Players/SelectedPlayers'
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'




function App() {

  const [addCoin, setAddCoin] = useState(0)

  const handelAddCoin = () => {
    toast.success("Coin add successful", {
      position: "top-center",
      autoClose: 3000,
    })
    setAddCoin(addCoin + 2000000)
  }

  const [isActive, setActive] = useState(true)

  const handelActive = (active) => {
    setActive(active)

  }

  const [selectedPlayers, setSelectedPlayers] = useState([])

  const handelSelectedPlayer = (player) => {
    console.log(player)
    if (addCoin < player.price) {
      toast.error("Insufficient Coin", {
        position: "top-center",
        autoClose: 3000,
      })
      return
    }
    if (selectedPlayers.length >= 6) {
      toast.info("maximum player already added", {
        position: "top-center",
        autoClose: 3000,
      })
      return
    }
    if (selectedPlayers.find(p => p.id === player.id)) {
      toast.warning("Player already selected!", { 
        position: 'top-center', 
        autoClose: 3000 
      });
      return;
    }

    else {
      toast.success("player added successful", {
        position: "top-center",
        autoClose: 3000,
      })
      const newSelectedPlayers = [...selectedPlayers, player]
      setSelectedPlayers(newSelectedPlayers)

      setAddCoin(addCoin - player.price)
    }
  }

  const handleRemovePlayer = (id, price) => {
    const remainingPlayer = selectedPlayers.filter(p => p.id !== id)
    setSelectedPlayers(remainingPlayer)
    toast.success("player removed successful", {
      position: "top-center",
      autoClose: 3000,
    })
    setAddCoin(addCoin + price)
  }

  return (
    <>
      <Nav addCoin={addCoin}></Nav>
      <Banner handelAddCoin={handelAddCoin}></Banner>
      <Button selectedPlayers={selectedPlayers} handelActive={handelActive} isActive={isActive} ></Button>
      {
        isActive ? <Players handelSelectedPlayer={handelSelectedPlayer}></Players> : <SelectedPlayers handleRemovePlayer={handleRemovePlayer} selectedPlayers={selectedPlayers}></SelectedPlayers>
      }
      <Newsletter></Newsletter>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
