<template>
  <div>{{ title }}</div>
</template>
<script setup lang="ts">
  definePageMeta({ middleware: 'auth' })

  const title = ref('Home') 
</script>