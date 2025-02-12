import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Body from './components/Body'

function App() {


  return (
    <div className='container-app'>

      <div className='div-header'>

      <Header />

      </div>
      <div className='div-body'>

      <Body />

      </div>


      

    </div>
  )
}

export default App
