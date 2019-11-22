<template>
  <div class="todos-input-cell">
    <input @keyup.enter="addTodo" v-model="newTodo" ref="input" class="todos-input" id="todo-input" type="text" name="todo" placeholder="好想射点什么">
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  props:{
    todos:{
      type: Array,
      default:()=>[]
    }
  },
  data() {
    return {
      newTodo: ''
    }
  },
  methods: {
    addTodo: function() {
      if (!this.newTodo) {
        return
      }
       this.$store.commit('addTodo',{
        title: this.newTodo,
        completed: false
      })
      // this.$emit('update:todos',todos);
      this.newTodo = '';
    },
  }
}
</script>