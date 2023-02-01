import { v4 as uuidv4 } from 'uuid'

export const NOTES_DEFAULT = [
  {
    id: uuidv4(),
    project: 'Notes',
    title: 'Shopping List',
    desc: 'Cheese\nOnions\nPotatoes\nTomatoes\nBell Peppers\nLays - salt & vinegar\nCoca Cola\nFrozen Pizza'
  },
  {
    id: uuidv4(),
    project: 'Notes',
    title: 'New trending songs',
    desc: 'Never gonna give you up. \nIm blue da bee da ba daaa.\ndarude sandstorm????'
  }
]

export const PROJECTS_DEFAULT = [
  {
    id: uuidv4(),
    title: 'Work'
  },
  {
    id: uuidv4(),
    title: 'School'
  },
  {
    id: uuidv4(),
    title: 'Misc.'
  }
]

export const TODOS_DEFAULT = [
  {
    id: uuidv4(),
    project: 'Home',
    title: 'Check E-Mail',
    desc: 'Check email for updates every day',
    date: '2023-02-02',
    priority: 'HIGH',
    completed: ''
  },
  {
    id: uuidv4(),
    project: 'Home',
    title: 'Cook Dinner',
    desc: 'Pasta with italian sausage, mushrooms, onions, tomatoes, olives, oregano with sweet basil sauce and parmesan cheese',
    date: '2023-01-24',
    priority: 'LOW',
    completed: ''
  },
  {
    id: uuidv4(),
    project: 'Home',
    title: 'Wash dishes',
    desc: 'wash dishes after cooking pasta',
    date: '2023-01-25',
    priority: 'LOW',
    completed: true
  },
  {
    id: uuidv4(),
    project: 'Home',
    title: 'Learn React',
    desc: 'Learn react and JavaScript everyday',
    date: '2023-02-10',
    priority: 'HIGH',
    completed: ''
  },
  {
    id: uuidv4(),
    project: 'Today',
    title: 'Groceries',
    desc: 'remember to buy food after work',
    date: '2023-01-29',
    priority: 'HIGH',
    completed: true
  },
  {
    id: uuidv4(),
    project: 'Today',
    title: 'try a new song',
    desc: 'find out what is trending in music today.',
    date: '2023-01-29',
    priority: 'LOW',
    completed: ''
  },
  {
    id: uuidv4(),
    project: 'Week',
    title: 'Maple Leafs vs Boston Bruins',
    desc: 'Wed, Feb 1, 7:30 p.m.',
    date: '2023-02-01',
    priority: 'MEDIUM',
    completed: ''
  },
  {
    id: uuidv4(),
    project: 'Work',
    title: 'Index out of bounds error on line 43',
    desc: 'fix the bug!!!!!',
    date: '2023-02-09',
    priority: 'HIGH',
    completed: ''
  },
  {
    id: uuidv4(),
    project: 'Work',
    title: 'API key - not working',
    desc: 'API key has expired need to renew it.',
    date: '2023-03-01',
    priority: 'HIGH',
    completed: ''
  },
  {
    id: uuidv4(),
    project: 'School',
    title: 'Learn Python',
    desc: '',
    date: '2023-01-01',
    priority: 'MEDIUM',
    completed: ''
  }
]
