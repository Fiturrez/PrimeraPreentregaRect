import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer mensaje= 'Hola, te damos la bienvenida a nuestra tienda!'/>
  </div>
    
  )
}

export default App
