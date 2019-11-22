<template>
  <div class="todos-filter" id="todos-filter" >
    <span v-for="(filtersItem,index) in filters" :key="index" :class="['filter-item',filter == index ? 'active' : '']" :data-id='index'> <router-link :to="filtersItem" 
     >{{filtersItem}}</router-link></span>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
  props:{
    todos:{
      type: Array,
      default:()=>[]
    },
    filters:{
      type: Object,
      default:()=> {return { message: 'hello' }}
    },
    filter:{
      type: String,
      default:'All'
    }
  },
  created() {
    this.switchs();
  },
  watch: {
    '$route': 'switchs'
  },
  methods: {
    switchs:function(){
      let filter = this.$route.params.filter;
      this.$store.commit('changeFilter', filter);
    }
  }
}
</script>