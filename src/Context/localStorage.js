export const setLocalStorage = state => {
  window.localStorage.setItem(
    'currentProject',
    JSON.stringify(state.currentProject)
  )
  window.localStorage.setItem('todos', JSON.stringify(state.todos))
  window.localStorage.setItem('projects', JSON.stringify(state.projects))
  window.localStorage.setItem('notes', JSON.stringify(state.notes))
}

export const getLocalStorage = item => {
  return JSON.parse(window.localStorage.getItem(item))
}

export const clearLocalStorage = () => {
  window.localStorage.clear()
}
