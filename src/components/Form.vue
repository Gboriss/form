<template>
<b-form class="search" @submit.prevent="addTask">
    <b-form-input  
        class="input-group mb-3"
        type="text" 
        id="new-task" 
        placeholder="New item" 
        v-model.trim="inputEntry"
        autocomplete="off"
    />
</b-form>	

</template>


<script>


export default {
    name: 'Form',
   
    data() {
        return {
            inputEntry: '',
            error: false,
        }
    },

    methods: {
       addTask() {
            if (this.inputEntry) {
                this.$store.commit('addTask', {
                    id: Date.now(),
                    title: this.inputEntry,
                    completed: false,
                    edit: false,
                })
                this.inputEntry = ''
            }
        }

    }
}
</script>


<style lang="scss" scoped>
.input-group {
    margin-top: 84px;
}
</style>
