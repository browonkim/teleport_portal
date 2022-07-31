<template>
  <div id="Modal">
    <h4>Modal</h4>
    <h3 v-if="props.mountDone">Good</h3>
    <button @click="openModal">Open</button>
  </div>
  <Teleport v-if="props.mountDone" :to="props.where">
    <Transition>
      <div v-if="visible" class="modal">
        <h1>Modal</h1>
        <button @click="closeModal">Close</button>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";

interface ModalProps {
  mountDone: boolean;
  where: string;
}
const props = defineProps<ModalProps>();
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
  position: absolute
  background-color: gray
  top: 0
  left: 40%
  display: flex
  flex-direction: column
  box-sizing: content-box
  width: inherit / 2
  height: inherit /2
  border-radius: 10px
  border: inherit
button
  display: block
  box-sizing: content-box
  width: 100px
.v-enter-active,.v-leave-active
  transition: opacity 0.5s ease

.v-enter-from,.v-leave-to
  opacity: 0
</style>
