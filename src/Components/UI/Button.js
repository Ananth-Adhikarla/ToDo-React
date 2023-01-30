import React from 'react'
import styles from './Button.module.css'

const Button = ({ children, key = '', className = '', type = '', onClick }) => {
  const btnChildren = children === '' ? '' : children
  const btnKey = key === '' ? '' : key
  const btnClass = className === '' ? '' : className
  const btnType = type === '' ? 'button' : type

  return (
    <button key={btnKey} className={btnClass} type={btnType} onClick={onClick}>
      {btnChildren}
    </button>
  )
}

export const EditButton = ({ onClick }) => {
  return (
    <Button
      className={`bx bxs-edit bx-md ${styles.editButton}`}
      onClick={onClick}
    />
  )
}

export const DeleteButton = ({ onClick }) => {
  return (
    <Button
      className={`bx bxs-trash bx-md ${styles.deleteButton}`}
      onClick={onClick}
    />
  )
}

export const AddButton = ({ onClick }) => {
  return (
    <Button
      className={`bx bx-plus bx-md ${styles.AddButton}`}
      onClick={onClick}
    />
  )
}

export const DetailsButton = ({ onClick }) => {
  return (
    <Button className={styles.DetailsButton} onClick={onClick}>
      Details
    </Button>
  )
}
export default Button
