import React from 'react'
import Home from "./components/Home/Home"
import Moviescard from './components/MoviesCard/MoviesCard'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div className='App'>
      <Home />
      <Moviescard />
      <Footer />
      </div>
  )
}

export default App