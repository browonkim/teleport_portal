<template>
  <div id="Modal">
    <h4>Modal</h4>
    <button @click="openModal">Open</button>
  </div>
  <Teleport to="#Container">
    <Transition>
      <div v-if="visible" class="modal">
        <h1>Modal</h1>
        <button @click="closeModal">Close</button>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from "vue";

const visible = ref<boolean>(false);
const openModal = () => {
  visible.value = true;
};
const closeModal = () => {
  visible.value = false;
};
</script>

<style scoped lang="sass">
#Modal
  border: 4px solid yellowgreen
  padding: 10px
.modal
  position: static
  left: 40%
  top: 20%
  display: flex
  flex-direction: column
  box-sizing: content-box
  width: 400px
  height: 400px
  border-radius: 10px
  border: 1px solid black
button
  display: block
  box-sizing: content-box
  width: 100px
.v-enter-active,.v-leave-active
  transition: opacity 0.5s ease

.v-enter-from,.v-leave-to
  opacity: 0
</style>
