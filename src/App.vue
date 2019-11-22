<template>
<div class="todos-container">
    <h1 class="todos-title">todos</h1>
    <div class="todos-content">
      <section class="todos-input-cell" v-cloak>
        <the-header :todos.sync="todos"/>
        <the-list :todos.sync="todos" :filter.sync="filter"></the-list>
         <the-footer :filters.sync="filters" :filter.sync="filter"></the-footer>
      </section>
    </div>
  </div>
</template>
<script>
import TheHeader from '@/components/TheHeader';
import TheList from '@/components/TheList';
import TheFooter from '@/components/TheFooter';
import '@/assets/index.css'
export default {
  data(){
    return{
      todos:[
      {title: '打一瓶酱油', completed: false},
      {title: '跑步800米',completed: true}
      ],
      newTodo: null,
       filters: {
       1: 'All',
       2: 'active',
       3: 'completed',
      },
      filter: 'All',
    }
  },
  components: {
    'the-header': TheHeader,
    'the-list':TheList,
    'the-footer':TheFooter,
  },
}
</script>

<style>
</style>
