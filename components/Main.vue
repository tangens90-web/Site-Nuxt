<template>
<div>
  <my-header></my-header>
  
  <sign-form ></sign-form>
  <log></log>
  <posts></posts>

  </div>
</template>

<script>
import MyHeader from "./Header.vue"
import SignForm from "./SignForm.vue"
import Posts from "./Posts.vue";
import Log from "./LogIn.vue"
export default {
  name: 'Header',
  data () {
    return {
      
    }
  },
  methods: {
   
  },
  components: {
    MyHeader,
    SignForm,
    Posts,
    Log
  },
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
