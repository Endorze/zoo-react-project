import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HeaderFooterLayout from './components/Layout/HeaderFooterLayout/headerFooterLayout'
import HomePage from './components/Pages/HomePage/homePage'
import ReptilesPage from './components/Pages/ReptilesPage/reptilesPage'
import MammalsPage from './components/Pages/MammalsPage/mammalsPage'
import BirdsPage from './components/Pages/BirdsPage/birdsPage'


function App() {

  return (
    <Routes>
      <Route element={<HeaderFooterLayout />}>
        <Route path='/' element={<HomePage />}/>
        <Route path='/reptiles' element={<ReptilesPage />}/>
        <Route path='/mammals' element={<MammalsPage />}/>
        <Route path='/birds' element={<BirdsPage />}/>
      </Route>
    </Routes>
  )
}

export default App
