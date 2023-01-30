import React, { useContext, useState, useEffect } from 'react'
import styles from './TodoList.module.css'
import TodoContext from '../../Context/TodoContext'
import TodoCard from '../UI/TodoCard'
import moment from 'moment'
import Button from '../UI/Button'
import EditTodo from './EditTodo'
import Modal from '../Modal/Modal'
import ShowDetails from './ShowDetails'
import NoteCard, { NoteGrid } from '../UI/NoteCard'
import EditNote from './EditNote'

const TodoList = () => {
  const todoContext = useContext(TodoContext)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  const [showNoteModal, setShowNoteModal] = useState(false)
  const [editTodo, setEditTodo] = useState({})
  const [detailsTodo, setDetailsTodo] = useState({})
  const [note, setNote] = useState({})

  const dateChecker = date => {
    let now = moment()
    let diff = now.diff(new Date(date), 'days')

    if (diff <= 0) {
      return 'success'
    } else if (diff <= 7) {
      return 'warning'
    } else {
      return 'warning'
    }
  }

  const dateFormat = date => {
    return moment(new Date(date)).utc().format('MMM, Do YYYY')
  }

  const todoCompleted = (checked, id) => {
    let todo = todoContext.todos.filter(todo => todo.id === id).pop()
    todo.completed = checked
    todoContext.updateTodo(todo)
  }

  const deleteProject = () => {
    todoContext.removeProject(todoContext.currentProject)
  }

  const removeTodo = id => {
    todoContext.removeTodo(id)
  }

  const openEditModal = id => {
    const currentTodo = todoContext.todos.filter(todo => todo.id === id).pop()
    setEditTodo(currentTodo)
    setShowEditModal(!showEditModal)
  }

  const openDetailsModal = id => {
    const currentTodo = todoContext.todos.filter(todo => todo.id === id).pop()
    setDetailsTodo(currentTodo)
    setShowDetailsModal(!showDetailsModal)
  }

  const closeEditModal = () => {
    setShowEditModal(!showEditModal)
  }

  const closeDetailsModal = () => {
    setShowDetailsModal(!showDetailsModal)
  }

  let filteredTodos = todoContext.todos.filter(
    todos => todos.project === todoContext.currentProject
  )

  const deleteNote = id => {
    todoContext.removeNote(id)
  }

  const openEditNoteModal = id => {
    const currentNote = todoContext.notes.filter(note => note.id === id).pop()
    setNote(currentNote)
    setShowNoteModal(!showNoteModal)
  }

  const closeEditNoteModal = () => {
    setShowNoteModal(!showNoteModal)
  }

  return (
    <>
      <div className={styles.todoListContainer}>
        <h1 className={styles.projectTitle}>{todoContext.currentProject}</h1>

        {todoContext.currentProject === 'Home' ||
        todoContext.currentProject === 'Today' ||
        todoContext.currentProject === 'Week' ||
        todoContext.currentProject === 'Notes' ||
        filteredTodos.length > 0 ? (
          ''
        ) : (
          <div className={styles.EmptyProject}>
            <h3> Empty Project!.. </h3>
            <h5> Create a new to-do item or delete project. </h5>
            <Button onClick={deleteProject}> Delete Project </Button>
          </div>
        )}

        {todoContext.currentProject === 'Notes' ? (
          <NoteGrid>
            {todoContext.notes.map((note, index) => {
              return (
                <NoteCard
                  key={index}
                  title={note.title}
                  body={note.desc}
                  id={note.id}
                  onClick={deleteNote}
                  editTodo={openEditNoteModal}
                />
              )
            })}
          </NoteGrid>
        ) : (
          filteredTodos.map(todo => {
            return (
              <TodoCard
                key={todo.id}
                id={todo.id}
                title={todo.title}
                date={dateFormat(todo.date)}
                priority={todo.priority}
                dateStyle={dateChecker(todo.date)}
                updateCompleted={todoCompleted}
                checked={todo.completed}
                removeTodo={removeTodo}
                editTodo={openEditModal}
                details={openDetailsModal}
              />
            )
          })
        )}

        {showEditModal && (
          <Modal>
            <EditTodo todo={editTodo} onClick={closeEditModal} />
          </Modal>
        )}

        {showDetailsModal && (
          <Modal className={styles.showDetailsModal}>
            <ShowDetails todo={detailsTodo} onClick={closeDetailsModal} />
          </Modal>
        )}

        {showNoteModal && (
          <Modal className={styles.showDetailsModal}>
            <EditNote note={note} onClick={closeEditNoteModal} />
          </Modal>
        )}
      </div>
    </>
  )
}

export default TodoList
