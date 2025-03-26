<template>
  
    <BaseCard />


</template>

<script>
import BaseCard from './components/BaseCard.vue'

export default {
  name: 'App',
  components: {
    BaseCard
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 100px;
  background: radial-gradient(71.11% 100% at 50% 0%, #020204 14.6%, #011F35 100%);
  box-sizing: border-box;
}

#app {
  width: 100%;
  min-height: 100vh;
}
</style>
