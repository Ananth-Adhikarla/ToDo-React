import React, { useState, useRef, useContext } from 'react'
import RadioButtons from '../UI/RadioButtons'
import TodoContext from '../../Context/TodoContext'
import styles from './AddTodo.module.css'
import Button from '../UI/Button'
import { v4 as uuidv4 } from 'uuid'

const AddTodo = props => {
  const [priorityState, setPriorityState] = useState(
    props.priority ? props.priority : 'LOW'
  )
  const titleRef = useRef()
  const descRef = useRef()
  const dateRef = useRef()
  const todoContext = useContext(TodoContext)

  const priorityChange = event => {
    setPriorityState(event.target.value)
  }

  const PRIORITIES = [
    {
      id: 'LOW',
      value: 'LOW',
      style: styles.success,
      checked: priorityState === 'LOW' ? 'checked' : '',
      onChange: priorityChange
    },
    {
      id: 'MEDIUM',
      value: 'MEDIUM',
      style: styles.warning,
      checked: priorityState === 'MEDIUM' ? 'checked' : '',
      onChange: priorityChange
    },
    {
      id: 'HIGH',
      value: 'HIGH',
      style: styles.danger,
      checked: priorityState === 'HIGH' ? 'checked' : '',
      onChange: priorityChange
    }
  ]

  const submitHandler = event => {
    event.preventDefault()

    const todoTitle = titleRef.current.value.trim()
    const todoDesc = descRef.current.value.trim()
    const todoDate = dateRef.current.value
    const todoPriority = priorityState

    if (props.update) {
      const updateTodo = {
        id: props.id,
        project: todoContext.currentProject,
        title: todoTitle,
        desc: todoDesc,
        date: todoDate,
        priority: todoPriority,
        completed: props.completed
      }
      todoContext.updateTodo(updateTodo)
    } else {
      const newTodo = {
        id: uuidv4(),
        project: todoContext.currentProject,
        title: todoTitle,
        desc: todoDesc,
        date: todoDate,
        priority: todoPriority,
        completed: ''
      }
      todoContext.addTodo(newTodo)
    }

    props.onClick()
  }

  return (
    <form className={styles.AddTodoForm} onSubmit={submitHandler}>
      <input
        ref={titleRef}
        className={styles.input}
        type='text'
        placeholder='Title: Shopping List'
        defaultValue={props.title === '' ? '' : props.title}
        required
      />
      <textarea
        ref={descRef}
        maxLength={300}
        className={`${styles.input} ${styles.textarea}`}
        placeholder='Details: eg. Buy Veggies , Buy Condiments, Asian store or super market'
        defaultValue={props.desc === '' ? '' : props.desc}
      />
      <div className={styles.DateSelect}>
        <span className={styles.inputSpan}>Due Date</span>
        <input
          ref={dateRef}
          className={styles.dateInput}
          type='date'
          defaultValue={props.date === '' ? '' : props.date}
          required
        />
      </div>
      <div className={styles.PrioritySelect}>
        <span className={styles.inputSpan}>Priority</span>
        {PRIORITIES.map(priority => (
          <RadioButtons
            key={priority.id}
            id={priority.id}
            value={priority.value}
            style={priority.style}
            checked={priority.checked}
            onChange={priority.onChange}
          />
        ))}
      </div>
      <div className={styles.formActions}>
        <Button className={styles.formBtn} type='submit'>
          {props.update ? 'Edit To-Do' : 'Add To-Do'}
        </Button>
      </div>
    </form>
  )
}

export default AddTodo
