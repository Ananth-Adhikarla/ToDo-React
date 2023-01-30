import React from 'react'
import styles from './AddTodoModal.module.css'
import AddTodo from './AddTodo'

const EditTodo = ({ todo, onClick }) => {
  return (
    <>
      <div className={styles.modalHeader}>
        <span> Edit {todo.title} </span>
        <span className={styles.close} onClick={onClick}>
          X
        </span>
      </div>
      <div className={styles.content}>
        <AddTodo
          onClick={onClick}
          id={todo.id}
          title={todo.title}
          desc={todo.desc}
          date={todo.date}
          priority={todo.priority}
          completed={todo.completed}
          update={true}
        />
      </div>
    </>
  )
}

export default EditTodo
