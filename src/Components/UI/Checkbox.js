import React from 'react'
import styles from './Checkbox.module.css'

const Checkbox = ({ name = '', checked = '', onChange }) => {
  return (
    <input
      className={styles.customCheckbox}
      type='checkbox'
      name={name}
      checked={checked}
      onChange={onChange}
    />
  )
}

export default Checkbox
