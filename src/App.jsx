import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import History from './pages/History'
import Header from './components/Header'
import Footer from './components/Footer'
import RecipePage from './pages/RecipePage'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/recipe' element={<RecipePage/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
