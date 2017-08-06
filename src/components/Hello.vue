<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <app-input :msg="message" @messageChanged="message = $event"></app-input>
  </div>
</template>

<script>
  import Input from './Input.vue'

  export default {
    data () {
      return {
        message: 'Hello message'
      }
    },
    components: {
      'app-input': Input
    }
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
