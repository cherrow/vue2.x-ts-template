<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Vue from "vue"
import { getAppName } from "@/service/api";

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    foo(): boolean {
      return getAppName(true)
    },
    bar(): string {
      return this.$api.getAppName()
    }
  }
})
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
