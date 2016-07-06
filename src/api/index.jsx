import {v4} from 'node-uuid';

const fakeDb = {
  todos: [
    {
      id: v4(),
      text: 'hey',
      completed: true
    }, {
      id: v4(),
      text: 'ho',
      completed: true
    }, {
      id: v4(),
      text: 'hii',
      completed: false
    }, {
      id: v4(),
      text: 'let',
      completed: true
    }, {
      id: v4(),
      text: 'hey',
      completed: false
    }
  ]
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = filter => delay(500).then(() => {

  if (Math.random() > 0.5) {
    throw new Error('Boom!');
  }

  switch (filter) {
    case 'all':
      return fakeDb.todos;
    case 'active':
      return fakeDb
        .todos
        .filter((e) => !e.completed);
    case 'completed':
      return fakeDb
        .todos
        .filter((e) => e.completed);
    default:
      throw new Error(`Unkown filter ${filter}`);
  }
});
