import React from 'react'
import styles from './NoteCard.module.css'

const NoteCard = ({ title, body, id, onClick, editTodo }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardDelete}>
          <span className={styles.delete} onClick={() => editTodo(id)}>
            edit
          </span>
          <span className={styles.delete} onClick={() => onClick(id)}>
            X
          </span>
        </div>
        <div className={styles.cardHeader}>{title}</div>
        <div className={styles.cardBody}>{body}</div>
      </div>
    </>
  )
}

export const NoteGrid = ({ children }) => {
  return <div className={styles.grid}>{children}</div>
}

export default NoteCard
