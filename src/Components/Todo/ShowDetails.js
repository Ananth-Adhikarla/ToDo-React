import React from 'react'
import styles from './AddTodoModal.module.css'
import detailStyles from './ShowDetails.module.css'
import moment from 'moment'

const ShowDetails = ({ todo, onClick }) => {
  const dateFormat = date => {
    return moment(new Date(date)).utc().format('MMM, Do YYYY')
  }

  return (
    <>
      <div className={`${styles.modalHeader} ${detailStyles.modalHeader}`}>
        <span className={detailStyles.close} onClick={onClick}>
          X
        </span>
      </div>
      <div className={`${styles.content} ${detailStyles.content}`}>
        <h1> {todo.title} </h1>
        <div className={detailStyles.todo}>
          <div className={detailStyles.desc}>
            Project :
            <span className={detailStyles.details}>{todo.project}</span>
          </div>
          <div className={detailStyles.desc}>
            Description :
            <span className={detailStyles.details}>{todo.desc}</span>
          </div>
          <div className={detailStyles.desc}>
            Priority :
            <span
              className={`${detailStyles.details} ${detailStyles.priorityColor}`}
            >
              {todo.priority}
            </span>
          </div>
          <div className={detailStyles.desc}>
            Due Date :
            <span className={detailStyles.details}>
              {dateFormat(todo.date)}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShowDetails
