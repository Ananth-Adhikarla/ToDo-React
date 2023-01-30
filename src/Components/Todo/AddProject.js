import React, { useState, useRef, useContext } from 'react'
import Button from '../UI/Button'
import styles from './AddTodo.module.css'
import TodoContext from '../../Context/TodoContext'
import { v4 as uuidv4 } from 'uuid'

const AddProject = props => {
  const titleRef = useRef()
  const todoContext = useContext(TodoContext)

  const submitHandler = event => {
    event.preventDefault()

    const projectTitle = titleRef.current.value.trim()

    const newProject = {
      id: uuidv4(),
      title: projectTitle
    }

    todoContext.addProject(newProject)

    props.onClick() // close modal
  }

  return (
    <form className={styles.AddTodoForm} onSubmit={submitHandler}>
      <input
        ref={titleRef}
        className={styles.input}
        type='text'
        placeholder='Project Name: Shopping, Study Plan, ...'
        required
      />
      <div className={styles.formActions}>
        <Button className={styles.formBtn} type='submit'>
          Create Project
        </Button>
      </div>
    </form>
  )
}

export default AddProject
