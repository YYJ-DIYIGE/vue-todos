import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    todos:[
      {title: '打一瓶酱油', completed: false},
      {title: '跑步800米',completed: true}
    ],
    filter: 'All',
  },
  getters: {
    showTodos:function(state){
     let filter = state.filter;
      return state.todos.filter(data => {
        if(filter == 'All'){
          return data
        }else if( filter == 'active'){
          return !data.completed
        }else {
          return data.completed
        }
     })
    }
  },
  mutations: {
    changeFilter(state,filter){
      state.filter = filter;
    },
    addTodo (state,todo){
      console.log(todo)
      state.todos.push(todo)
    },
    iscompleted(state,todo){
      let index = state.todos.indexOf(todo);
      state.todos[index].completed = !state.todos[index].completed;
    },
    del(state,todo){
      let index = state.todos.indexOf(todo);
      state.todos.splice(index,1);
    }
  }
});
export default store;