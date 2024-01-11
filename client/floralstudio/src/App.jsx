import { useState } from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './components/pages/Home'


function App() {
  

  return (
    <>
     <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </>
  )
}

export default App
