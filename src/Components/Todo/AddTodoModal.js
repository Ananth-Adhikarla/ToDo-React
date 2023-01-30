import React, { useState, useEffect, useRef } from 'react'
import styles from './AddTodoModal.module.css'
import AddTodo from './AddTodo'
import AddProject from './AddProject'
import AddNote from './AddNote'

const AddTodoModal = props => {
  const MENU = ['AddTodo', 'AddProject', 'AddNote']

  const todoRef = useRef(null)
  const projectRef = useRef(null)
  const noteRef = useRef(null)

  const [showMenu, setShowMenu] = useState(MENU[0])
  const [menuComponent, setMenuComponent] = useState(<AddTodo />)

  useEffect(() => {
    switch (showMenu) {
      case MENU[0]:
        todoRef.current.classList.add(styles.active)
        setMenuComponent(<AddTodo onClick={props.onClick} />)
        break
      case MENU[1]:
        projectRef.current.classList.add(styles.active)
        setMenuComponent(<AddProject onClick={props.onClick} />)
        break
      case MENU[2]:
        noteRef.current.classList.add(styles.active)
        setMenuComponent(<AddNote onClick={props.onClick} />)
        break
      default:
        break
    }

    // Clean up function - target? if not null then remove
    return () => {
      todoRef.current?.classList.remove(styles.active)
      projectRef.current?.classList.remove(styles.active)
      noteRef.current?.classList.remove(styles.active)
    }
  }, [showMenu])

  const menuHandler = event => {
    setShowMenu(event.currentTarget.id)
  }

  return (
    <>
      <div className={styles.modalHeader}>
        <span> Create a new </span>
        <span className={styles.close} onClick={props.onClick}>
          X
        </span>
      </div>
      <div className={styles.content}>
        <div className={styles.menu}>
          <span
            ref={todoRef}
            className={styles.menuLink}
            id={MENU[0]}
            onClick={menuHandler}
          >
            Todo
          </span>
          <span
            ref={projectRef}
            className={styles.menuLink}
            id={MENU[1]}
            onClick={menuHandler}
          >
            Project
          </span>
          <span
            ref={noteRef}
            className={styles.menuLink}
            id={MENU[2]}
            onClick={menuHandler}
          >
            Note
          </span>
        </div>
        {menuComponent}
      </div>
    </>
  )
}

export default AddTodoModal
