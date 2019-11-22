<template>
  <div class="todos-list" id="todos-list">
    <div :class="['todo-item',{active: todo.completed}]" v-for="(todo,key) in showTodos" :key="key">
      <div class="todo-item-hd" @click='but(todo)'></div>
      <div class="todo-item-bd">{{todo.title}}</div>
      <div class="todo-item-ft" @click='del(todo)'>x</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props:{
    todos:{
      type: Array,
      default:()=>[]
    },
    filter:{
      type: String,
      default:'all'
    }
  },
  computed:{
    // showTodos(){
    //   let filter = this.filter;
    //   return this.todos.filter(data => {
    //     if(filter == 'All'){
    //       return data
    //     }else if( filter == 'active'){
    //       return !data.completed
    //     }else {
    //       return data.completed
    //     }
    //  })
    // }
    showTodos: function() {
      return this.$store.getters.showTodos;
    },
  },
  methods: {
    but(todo){
      // let index = this.todos.indexOf(todo);
      // this.todos[index].completed = !this.todos[index].completed;
      // this.$emit('update:todos', this.todos)
      this.$store.commit('iscompleted',todo);

    },
    del(todo){
      // let index = this.todos.indexOf(todo);
      // this.todos.splice(index,1);
      // this.$emit('update:todos', this.todos) 
      this.$store.commit('del',todo);
    },
  }
}
</script>