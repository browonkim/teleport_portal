<template>
  <div id="Container">
    <h1>Container</h1>
    <div id="Main">
      <h2>Main</h2>
      <div id="Card">
        <h3>card</h3>
        <CommonModal />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CommonModal from "@/components/CommonModal";
</script>

<style scoped lang="sass">
#Container
  border: 3px dashed blue
#Main
  position: relative
  box-sizing: content-box
  width: 1000px
  height: 500px
  border: 1px solid black
#Card
  box-sizing: content-box
  border: 2px solid red
</style>
