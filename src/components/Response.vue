<template>
    <div class="mainBody">


        <button  v-on:click="greet" value="">CLICK ME</button>
        <h1>The following people raided [{{results.length}}]</h1>

        <div v-for="item in results" :key="item">
            {{item}}
        </div>

    </div>
</template>

<script>


export default {
  name: 'Response',
  el: '#Response-example',
  data() {
   return {
     results: ["a","b","c"],
    }
  },
  methods: {


  },
  mounted(){
  }
}

</script>
<style scoped>

</style>
