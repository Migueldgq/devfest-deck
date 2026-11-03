<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <div class="prompt">
    <p>{{ text }}</p>
  </div>
</template>
