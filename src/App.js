import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Coins from './components/Coins'
import Coin from './routes/Coin'
import Navbar from './components/Navbar'


function App() {

  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=75&page=1&sparkline=false'

  useEffect(() => {
    console.log("hii here we go");
    axios.get(url).then((response) => {
      console.log(response.status);
      console.log(response.config);
      console.log(response.request);
console.log(response.data[0])
      setCoins(response.data) 
      
    }).catch((error) => {
      console.log(error)
    })
  }, [])
   
  return (
    <>
      <Navbar />
            <Routes>
              {/* coins=array passed as argument  */}
      <Route  path='/' element={<Coins coins={coins} />} />  
      <Route  path='/coin' element={<Coin />} >
            <Route  path=':coinId' element={<Coin />} />
      </Route>
      </Routes>

    </>
  );
}

export default App;