import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.css'

const ModalBackdrop = () => {
  return <div className={styles.Backdrop} />
}

const ModalOverlay = ({ children, className }) => {
  return (
    <div className={`${styles.modal} ${className ? className : ''}`}>
      {children}
    </div>
  )
}

const portalElement = document.getElementById('overlays')

const Modal = ({ children, onClose, className }) => {
  return (
    <>
      {ReactDOM.createPortal(<ModalBackdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay className={className} onClose={onClose}>
          {children}
        </ModalOverlay>,
        portalElement
      )}
    </>
  )
}

export default Modal
