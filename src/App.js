import React, { useState, useEffect, useContext } from 'react'

import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Footer from './Components/Footer/Footer'
import TodoProvider from './Context/TodoProvider'
import TodoList from './Components/Todo/TodoList'

function App () {
  return (
    <div className='App'>
      {
        <TodoProvider>
          <Header />
          <section className='MainContainer'>
            <Sidebar />
            <TodoList />
          </section>
          <Footer />
        </TodoProvider>
      }
    </div>
  )
}

export default App
