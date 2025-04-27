import { useState } from 'react'
import './CSS/App.css'

import { Navbar } from './components/Navbar' // Adjust the path as needed
import { Home } from './Pages/Home'
function App() {
 return(
  <>
  <div className='backgroundBody'>   
    <Navbar />   
  </div>
  </>
 )
}

export default App
