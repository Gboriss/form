<template>
  <div id="app">
    <Nav class="app__nav-component" />

    <main class="app__main-section">
		<section class="app__user-panel-container">
			<UserPanel class="app__user-panel-component" />
		</section>

		<section class="app__table-container">
			<Form />
			<b-list-group>
				<todo
					v-for="todo in todos" 
					:key="todo.id"
					v-bind="todo"
				/>
			</b-list-group>
		</section>
		<footer class="blockquote-footer">
			<span>
				List: {{ todos.length }}
			</span>
		</footer>
    </main>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Form from "@/components/Form"
import UserPanel from '@/components/UserPanel'
import Todo from "@/components/Todo"

import "bootstrap-vue/dist/bootstrap-vue.css"
import "bootstrap/dist/css/bootstrap.min.css"

export default {
	name: 'App',
	components: {
		Nav,
		UserPanel,
		Form,
		Todo
	},
		data: () => ({
		filter: 'all',
	}),
	computed: {
		todos() {
			return this.$store.state.todos
		},
		search() {
			
		}
	},

}
</script>

<style lang="scss">
  #app {
    display: grid;
    grid-template-columns: 1fr 4fr;
  }
  .app__user-panel-container {
    display: flex;
    justify-content: flex-end;
  }
  .page-link {
    color: black;

    &:hover {
      background-color: #1e2933;
      color: white;
    }
  }
  .page-item.active .page-link {  
    background-color: #1e2933;
    border: none;  
  }
</style>
