<template>
<b-list-group-item
	:class="{completed}"

>
	<label 
		v-if="locked"
		@dblclick="locked = false"
	>
		{{ title }}
	</label>
	<input
		v-else
		type="text"
        v-model="content"
        @keyup.enter="update(content)"
	>
	<b-button 
        variant="outline-primary" 
        @click="remove">
        Удалить
	</b-button>
</b-list-group-item>
</template>

<script>
export default {
	name: 'todo',
	props: ['id', 'title', 'edit', 'completed'],

    
    data() {
        return {
            content: this.title,
            locked: true,
        }
    },
	
	computed: {
		todos() {
            return this.$store.state.todos     
        }     
    },
    methods: {
        
        editTodo() {
            this.$store.commit('editTodo', this.id)
        },

        update(content) {
            this.$store.commit('update', { id: this.id, content })
            this.locked = true
        },

        remove() {
            this.$store.commit('remove', this.id)
        },
        
        check() {
            this.$store.commit('check', this.id)
        }
    }
}
</script>

<style lang="scss" scoped>
.b-list-group-item {
    // display: flex;
    // flex-direction: column;
    // justify-content: space-between;

}
button {
    // display: block;
	// margin-left: auto;
    // margin-left: 20px;
   }
</style>