import { useState } from 'react'
import './CSS/App.css'
import { BrowserRouter } from 'react-router-dom'

import { Navbar } from './components/Navbar' // Adjust the path as needed
import { Home } from './Pages/Home'
import { MyRouter } from './Routes/MyRouter'
function App() {
  return (
    <>

      <BrowserRouter>
        <div className='backgroundBody'> 
          {/* Replace MyRouter with a valid component or import it */}
          {/* <Home />   */}
          <MyRouter/>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
