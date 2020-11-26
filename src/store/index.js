import Vue from 'vue'
import Vuex from 'vuex'

import localData from '../modules/localData'

Vue.use(Vuex)

export default new Vuex.Store({
state: {
		todos: localData().get(),
		newEvent: ''
},

mutations: {

		addTask: (state, data) => {
				state.todos.push(data)
				localData().set(state.todos)
		},

		editTodo: (state, id) => {
				let todo = state.todos.find(todo => 
						(todo.id === id))
				todo.edit = true
				localData().set(state.todos)
				
		},

		update: (state, { id, content }) => {
				let todo = state.todos.find(todo => 
						(todo.id === id))
		
				todo.title = content
				localData().set(state.todos)
		},

		remove: (state, id) => {
				let todo = state.todos.findIndex(todo => 
						(todo.id === id))

						state.todos = [
								...state.todos.slice(0, todo),
								...state.todos.slice(todo + 1)
						]
						localData().set(state.todos)
		},
},

})