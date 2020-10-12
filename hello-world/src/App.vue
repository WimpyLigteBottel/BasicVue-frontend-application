<template>
    <div>
        <Input/>
        <Response/>
    </div>
</template>

<script>
import Input from '@/components/Input.vue'
import Response from '@/components/Response.vue'
import '@/assets/globalStyles.css'

export default {
  name: 'App',
  components: {
    Input,
    Response
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
