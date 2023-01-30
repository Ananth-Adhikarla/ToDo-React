import React from 'react'
import styles from './NotificationIcon.module.css'

const NotificationIcon = ({ children }) => {
  return (
    <div className={styles.notificationContainer}>
      <span className={styles.notificationText}>{children}</span>
    </div>
  )
}

export default NotificationIcon
