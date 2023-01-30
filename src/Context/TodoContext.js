import { createContext } from 'react'

const TodoContext = createContext({
  showSidebar: false,
  currentProject: '',
  todos: [],
  projects: [],
  notes: [],
  updateShowSidebar: () => {},
  changeProject: title => {},
  addTodo: newTodo => {},
  removeTodo: id => {},
  updateTodo: id => {},
  addProject: newProject => {},
  removeProject: id => {},
  addNote: newNote => {},
  removeNote: id => {},
  updateNote: id => {},
  clearData: () => {}
})

export default TodoContext
