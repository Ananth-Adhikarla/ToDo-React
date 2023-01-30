import React, { useState, useEffect, useContext } from 'react'
import styles from './Header.module.css'
import logo from '../../assets/logo.png'
import TodoContext from '../../Context/TodoContext'

const Header = () => {
  const todoContext = useContext(TodoContext)

  const toggleMenu = () => {
    todoContext.updateShowSidebar(!todoContext.showSidebar)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={logo} alt='logo' />
        <h1>To-Do Lite</h1>
      </div>
      <span
        className={`bx bx-menu ${styles.mobileMenu}`}
        onClick={toggleMenu}
      />
    </header>
  )
}

export default Header
