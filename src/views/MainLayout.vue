<template>
  <div id="Container">
    <h1>Container</h1>
    <div id="Main">
      <h2>Main</h2>
      <div id="Card">
        <h3>card</h3>
        <CommonModal :mountDone="mountDone" :where="selected" />
      </div>
    </div>
    <button v-for="item in items" @click="onClickButton(item)" :key="item">
      {{ item }}
    </button>
  </div>
</template>

<script setup lang="ts">
import CommonModal from "@/components/CommonModal";
import { onMounted, ref } from "vue";

const mountDone = ref<boolean>(false);
onMounted(() => {
  mountDone.value = true;
});
const selected = ref("#Card");
const items = ["#Card", "#Main", "#Container", "body"];
const onClickButton = (value) => {
  selected.value = value;
};
</script>

<style scoped lang="sass">
#Container
  border: 3px dashed blue
  position: relative
#Main
  position: relative
  box-sizing: content-box
  width: 1000px
  height: 500px
  border: 1px solid black
#Card
  position: relative
  box-sizing: content-box
  border: 2px solid red
</style>
