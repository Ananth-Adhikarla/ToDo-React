import React, { useRef, useContext } from 'react'
import Button from '../UI/Button'
import styles from './AddTodo.module.css'
import TodoContext from '../../Context/TodoContext'
import { v4 as uuidv4 } from 'uuid'

const AddNote = props => {
  const titleRef = useRef()
  const descRef = useRef()
  const todoContext = useContext(TodoContext)

  const submitHandler = event => {
    event.preventDefault()

    const noteTitle = titleRef.current.value.trim()
    const noteDesc = descRef.current.value

    if (props.update) {
      const updateNote = {
        id: props.id,
        project: todoContext.currentProject,
        title: noteTitle,
        desc: noteDesc
      }
      todoContext.addNote(updateNote)
    } else {
      const newNote = {
        id: uuidv4(),
        project: todoContext.currentProject,
        title: noteTitle,
        desc: noteDesc
      }
      todoContext.addNote(newNote)
    }

    props.onClick()
  }

  return (
    <form className={styles.AddTodoForm} onSubmit={submitHandler}>
      <input
        ref={titleRef}
        className={styles.input}
        type='text'
        placeholder='Note Title: Shopping, Study Plan, ...'
        defaultValue={props.title === '' ? '' : props.title}
        required
      />
      <textarea
        ref={descRef}
        maxLength={1000}
        className={`${styles.input} ${styles.textarea}`}
        placeholder='Details: '
        defaultValue={props.desc === '' ? '' : props.desc}
      />
      <div className={styles.formActions}>
        <Button className={styles.formBtn} type='submit'>
          {props.update ? 'Update Note' : 'Create Note'}
        </Button>
      </div>
    </form>
  )
}

export default AddNote
