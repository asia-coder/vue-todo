import axios from 'axios'

const state = {
  todos: [
    {
      id: 1,
      title: 'Todo one'
    },
    {
      id: 2,
      title: 'Todo two'
    }
  ]
}

const getters = {
  getAllTodos: state => state.todos
}

const actions = {
  fetchTodos: async ({ commit }) => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    )

    commit('setTodos', response.data)
  },

  async addTodo({ commit }, title) {
    const reposonse = await axios.post(
      'https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      }
    )

    commit('newTodo', reposonse.data)
  }
}

const mutations = {
  setTodos(state, todos) {
    state.todos = todos
  },

  newTodo: (state, todo) => state.todos.unshift(todo)
}

export default {
  state,
  getters,
  actions,
  mutations
}
