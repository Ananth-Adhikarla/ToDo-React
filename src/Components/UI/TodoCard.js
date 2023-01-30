import React, { useState, useEffect } from 'react'
import Checkbox from './Checkbox'
import styles from './TodoCard.module.css'
import { DetailsButton, EditButton, DeleteButton } from './Button'

const TodoCard = ({
  id,
  title,
  date,
  dateStyle,
  priority,
  updateCompleted,
  checked,
  removeTodo,
  editTodo,
  details
}) => {
  const [checkedState, setCheckedState] = useState(checked)
  const [opacity, setOpacity] = useState('')
  const [strikeout, setStrikeout] = useState('')

  const cardColor = () => {
    if (dateStyle === 'success') {
      return styles.todoDateSuccess
    } else if (dateStyle === 'warning') {
      return styles.todoDateWarning
    } else if (dateStyle === 'danger') {
      return styles.todoDateDanger
    }
  }

  const cardBorder = () => {
    if (priority === 'LOW') {
      return styles.success
    } else if (priority === 'MEDIUM') {
      return styles.warning
    } else if (priority === 'HIGH') {
      return styles.danger
    }
  }

  useEffect(() => {
    if (!checkedState) {
      setOpacity('')
      setStrikeout('')
    } else {
      setOpacity(styles.opacity)
      setStrikeout(styles.strikeOut)
    }
    updateCompleted(checkedState, id)
  }, [checkedState, checked])

  const color = cardColor()
  const border = cardBorder()

  return (
    <div className={`${styles.todoCard} ${border} ${opacity}`}>
      <div className={styles.todoLeft}>
        <Checkbox
          name={title}
          checked={checkedState ? 'checked' : ''}
          onChange={() => setCheckedState(!checkedState)}
        />
        <span className={`${styles.todoTitle} ${strikeout}`}> {title} </span>
      </div>
      <div className={styles.todoRight}>
        <DetailsButton onClick={() => details(id)} />
        <span className={`${styles.todoDate} ${color}`}> {date} </span>
        <div className={styles.icons}>
          <EditButton onClick={() => editTodo(id)} />
          <DeleteButton onClick={() => removeTodo(id)} />
        </div>
      </div>
    </div>
  )
}

export default TodoCard
