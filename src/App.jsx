import { Routes, Route } from 'react-router-dom'
import HeaderFooterLayout from './components/Layout/HeaderFooterLayout/headerFooterLayout'
import HeaderLayout from './components/Layout/HeaderLayout/headerLayout'
import HomePage from './components/Pages/HomePage/homePage'
import ReptilesPage from './components/Pages/ReptilesPage/reptilesPage'
import MammalsPage from './components/Pages/MammalsPage/mammalsPage'
import BirdsPage from './components/Pages/BirdsPage/birdsPage'
import AnimalInfo from './components/AnimalInfo/animalInfo'



function App() {

  return (
    <Routes>
      <Route element={<HeaderFooterLayout />}>
          <Route path='/' element={<HomePage />}/>
          <Route path='/reptiles' element={<ReptilesPage />}/>
          <Route path='/mammals' element={<MammalsPage />}/>
          <Route path='/birds' element={<BirdsPage />}/>
      </Route>
      <Route element={<HeaderLayout />}>
          <Route path='/animal/:id' element={<AnimalInfo />}/>
      </Route>
    </Routes>
  )
}

export default App
