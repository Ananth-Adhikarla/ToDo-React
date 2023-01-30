import React from 'react'
import styles from './AddTodoModal.module.css'
import AddNote from './AddNote'

const EditNote = ({ note, onClick }) => {
  return (
    <>
      <div className={styles.modalHeader}>
        <span> Edit {note.title} </span>
        <span className={styles.close} onClick={onClick}>
          X
        </span>
      </div>
      <div className={styles.content}>
        <AddNote
          onClick={onClick}
          id={note.id}
          title={note.title}
          desc={note.desc}
          update={true}
        />
      </div>
    </>
  )
}

export default EditNote
