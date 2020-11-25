<template>
  <div id="app">
    <Nav class="app__nav-component" />

    <main class="app__main-section">

		<section class="app__user-panel-container">
			<UserPanel class="app__user-panel-component" />
		</section>

		<section class="app__table-container">
			<!-- <Table
				class="app__table-component" 
				@removeProduct="removeProduct"
			/> -->
		</section>

    </main>
  </div>
</template>

<script>
import Nav from './components/Nav'
// import Table from './components/Table'
import UserPanel from './components/UserPanel'
import "bootstrap-vue/dist/bootstrap-vue.css"
import "bootstrap/dist/css/bootstrap.min.css"

export default {
  name: 'App',
  components: {
    Nav,
    // Table,
    UserPanel
  },
//  created () {
//      this.$store.dispatch('requestProducts')
//   },
//   methods: {
//     removeProduct (item) {
//       this.$store.dispatch('removeProduct', item)
//     }
//   }
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
