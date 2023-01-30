import React, { useState, useEffect, useContext } from 'react'
import styles from './Sidebar.module.css'
import Button, { AddButton } from '../UI/Button'
import TodoContext from '../../Context/TodoContext'
import Modal from '../Modal/Modal'
import AddTodoModal from '../Todo/AddTodoModal'

const Sidebar = props => {
  const todoContext = useContext(TodoContext)
  const [showModal, setShowModal] = useState(false)
  const width = window.innerWidth

  const closeModal = () => {
    setShowModal(!showModal)
  }

  const setActiveLink = id => {
    if (id === todoContext.currentProject) return styles.active
    else return ''
  }

  useEffect(() => {
    if (showModal && width < 768)
      todoContext.updateShowSidebar(!todoContext.showSidebar)
  }, [showModal])

  const changeProject = title => {
    todoContext.changeProject(title)
    if (todoContext.showSidebar && width < 768)
      todoContext.updateShowSidebar(!todoContext.showSidebar)
  }

  return (
    <>
      {showModal && (
        <Modal>
          <AddTodoModal onClick={closeModal} />
        </Modal>
      )}
      <nav
        className={`${styles.sidebar} ${
          todoContext.showSidebar ? styles.showSidebar : ''
        }`}
      >
        <SidebarLinks
          active={setActiveLink('Home')}
          onClick={() => changeProject('Home')}
        >
          Home
        </SidebarLinks>
        <SidebarLinks
          active={setActiveLink('Today')}
          onClick={() => changeProject('Today')}
        >
          Today
        </SidebarLinks>
        <SidebarLinks
          active={setActiveLink('Week')}
          onClick={() => changeProject('Week')}
        >
          Week
        </SidebarLinks>
        <span className={styles.linkTitle}> Projects </span>
        {todoContext.projects.map((project, index) => {
          return (
            <SidebarLinksUser
              key={index}
              active={setActiveLink(project.title)}
              onClick={() => changeProject(project.title)}
            >
              {' '}
              {project.title}{' '}
            </SidebarLinksUser>
          )
        })}
        <SidebarLinks
          active={setActiveLink('Notes')}
          onClick={() => changeProject('Notes')}
        >
          Notes
        </SidebarLinks>
        <AddButton onClick={() => setShowModal(true)} />
        <Button
          className={styles.clearData}
          onClick={() => todoContext.clearData()}
        >
          Clear Data
        </Button>
      </nav>
    </>
  )
}

export const SidebarLinks = ({ children, active, onClick }) => {
  return (
    <span className={`${styles.links} ${active}`} onClick={onClick}>
      {' '}
      {children}{' '}
    </span>
  )
}

export const SidebarLinksUser = ({ children, active, onClick }) => {
  return (
    <span
      className={`${styles.links} ${styles.linksIndented} ${active}`}
      onClick={onClick}
    >
      {children}
    </span>
  )
}

export default Sidebar
