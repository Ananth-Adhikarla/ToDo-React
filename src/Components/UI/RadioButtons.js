import React from 'react'
import styles from './RadioButtons.module.css'

const RadioButtons = props => {
  return (
    <div className={styles.radiobtn}>
      <input
        type='radio'
        id={props.id}
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
      />
      <label
        className={`${styles.inputSpan} ${props.style}`}
        htmlFor={props.value}
      >
        {props.value}
      </label>
    </div>
  )
}

export default RadioButtons
