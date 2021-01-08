<template>
    <div class="hello">
      <span> {{defaultName}}</span>
        <input type="text"  v-model="inputtext" placeholder="input your name..."/>

        <input type="button" value="click me!" v-on:click="ClickMethodClicked()"/>
    </div>
</template>

<script>

import DateUtils from '@/javascript/utils/DateUtils.js'

export default {
  name: 'HelloWorld',
  props: {
    // insert message parameters that is passed in
  },
  data() {

    return {
      defaultName: "world!",
      inputtext: ""
    }
  },
  methods: {

    HelloWorld: function(){
      let currentDate=  DateUtils.formatDateYYYYMMDD(new Date());
      console.log("CurrentDate(YYYY/MM/DD): "+ currentDate);
    },
    ClickMethodClicked: function(){
      let currentDate=  DateUtils.toIsoString(new Date());
      console.log("hello world was clicked at "+ currentDate);
      alert(`Hello ${this.inputtext}`);
    }
   
  },
  mounted() {
    this.defaultName= "world modified in mounted!";

    this.HelloWorld();
    console.log("hello losers!");
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
