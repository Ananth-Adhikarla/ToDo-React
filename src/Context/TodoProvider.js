import React, { useReducer, useEffect, useState } from 'react'
import TodoContext from './TodoContext'
import {
  setLocalStorage,
  setLocalStorageSingle,
  getLocalStorage,
  clearLocalStorage
} from './localStorage'
import { NOTES_DEFAULT, PROJECTS_DEFAULT, TODOS_DEFAULT } from './defaultValues'

let currentProject = getLocalStorage('currentProject')
let todos = getLocalStorage('todos')
let projects = getLocalStorage('projects')
let notes = getLocalStorage('notes')

if (todos.length === 0) {
  todos = [...todos, ...TODOS_DEFAULT]
}

if (projects.length === 0) {
  projects = [...projects, ...PROJECTS_DEFAULT]
}

if (notes.length === 0) {
  notes = [...notes, ...NOTES_DEFAULT]
}

const initState = {
  showSidebar: false,
  currentProject: currentProject ? currentProject : 'Home',
  todos: todos,
  projects: projects,
  notes: notes
}

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ShowSidebar':
      return { ...state, showSidebar: action.item }
    case 'ChangeProject':
      return { ...state, currentProject: action.title }
    case 'AddTodo': {
      const existingTodoIndex = state.todos.findIndex(
        todo => todo.id === action.item.id
      )

      let updatedTodo

      if (existingTodoIndex >= 0) {
        updatedTodo = [...state.todos]
        updatedTodo[existingTodoIndex] = action.item
      } else {
        updatedTodo = state.todos.push(action.item)
      }

      return {
        ...state,
        todos: updatedTodo
      }
    }
    case 'RemoveTodo': {
      const updatedTodos = state.todos.filter(todo => todo.id !== action.id)

      return {
        ...state,
        todos: updatedTodos
      }
    }
    case 'UpdateTodo': {
      const existingTodoIndex = state.todos.findIndex(
        todo => todo.id === action.item.id
      )

      let updatedTodo = [...state.todos]
      if (existingTodoIndex >= 0) {
        updatedTodo[existingTodoIndex] = action.item
      }

      return {
        ...state,
        todos: updatedTodo
      }
    }
    case 'AddProject': {
      const existingProjectIndex = state.projects.findIndex(
        project =>
          project.id === action.item.id || project.title === action.item.title
      )

      let updatedProject

      if (existingProjectIndex >= 0) {
        updatedProject = [...state.projects]
        updatedProject[existingProjectIndex] = action.item
      } else {
        updatedProject = state.projects.push(action.item)
      }

      return {
        ...state,
        projects: updatedProject,
        currentProject: action.item.title
      }
    }
    case 'RemoveProject': {
      const updatedProjects = state.projects.filter(
        project => project.title !== action.currentProject
      )

      return {
        ...state,
        projects: updatedProjects,
        currentProject: 'Home'
      }
    }
    case 'AddNote': {
      const existingNodeIndex = state.notes.findIndex(
        note => note.id === action.item.id
      )

      let updatedNote

      if (existingNodeIndex >= 0) {
        updatedNote = [...state.notes]
        updatedNote[existingNodeIndex] = action.item
      } else {
        updatedNote = state.notes.push(action.item)
      }

      return {
        ...state,
        notes: updatedNote
      }
    }
    case 'RemoveNote': {
      const updatedNotes = state.notes.filter(note => note.id !== action.id)
      return {
        ...state,
        notes: updatedNotes
      }
    }
    case 'UpdateNote': {
      const existingNoteIndex = state.notes.findIndex(
        note => note.id === action.item.id
      )

      let updatedNote = [...state.notes]
      if (existingNoteIndex >= 0) {
        updatedNote[existingNoteIndex] = action.item
      }

      return {
        ...state,
        notes: updatedNote
      }
    }
    default:
      return state
  }
}

const TodoProvider = ({ children }) => {
  const [todoState, dispatchTodoAction] = useReducer(todoReducer, initState)
  const [clearedData, setClearedData] = useState(false)

  const updateShowSidebar = showSidebar => {
    dispatchTodoAction({ type: 'ShowSidebar', item: showSidebar })
  }

  const addTodo = todo => {
    dispatchTodoAction({ type: 'AddTodo', item: todo })
  }

  const removeTodo = id => {
    dispatchTodoAction({
      type: 'RemoveTodo',
      id: id
    })
  }

  const updateTodo = todo => {
    dispatchTodoAction({ type: 'UpdateTodo', item: todo })
  }

  const addProject = project => {
    dispatchTodoAction({ type: 'AddProject', item: project })
  }

  const addNote = note => {
    dispatchTodoAction({ type: 'AddNote', item: note })
  }

  const removeNote = id => {
    dispatchTodoAction({
      type: 'RemoveNote',
      id: id
    })
  }

  const updateNote = note => {
    dispatchTodoAction({ type: 'UpdateNote', item: note })
  }

  const changeProject = title => {
    dispatchTodoAction({ type: 'ChangeProject', title: title })
  }

  const removeProject = currentProject => {
    dispatchTodoAction({
      type: 'RemoveProject',
      currentProject: currentProject
    })
  }

  const clearData = () => {
    clearLocalStorage()
    todoState.todos = []
    todoState.projects = []
    todoState.notes = []
    setClearedData(true)
  }

  const todoContext = {
    showSidebar: todoState.showSidebar,
    currentProject: todoState.currentProject,
    todos: todoState.todos,
    projects: todoState.projects,
    notes: todoState.notes,
    updateShowSidebar: updateShowSidebar,
    changeProject: changeProject,
    addTodo: addTodo,
    removeTodo: removeTodo,
    updateTodo: updateTodo,
    addProject: addProject,
    removeProject: removeProject,
    addNote: addNote,
    removeNote: removeNote,
    updateNote: updateNote,
    clearData: clearData
  }

  useEffect(() => {
    setLocalStorage(todoState)
    setClearedData(false)
  }, [todoState, clearedData])

  return (
    <TodoContext.Provider value={todoContext}>{children}</TodoContext.Provider>
  )
}

export default TodoProvider
