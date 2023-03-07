import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchBar from './components/SearchBar/SearchBar'
import Weather from './components/Weather/Weather'

function App (){
  return (
    <div> 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SearchBar/>} />
      <Route path="/weather/:city" element={<Weather />} />   
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;


