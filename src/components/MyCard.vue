<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="my-card">
    <div v-if="title" class="my-card__header">{{ title }}</div>
    <div class="my-card__body">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.my-card {
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
}
/* 更多样式... */
</style>