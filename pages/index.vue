<template>
  <p v-if="pending">loading...</p>
  <pre v-else>{{ user }}</pre>
</template>
<script setup lang="ts">
  definePageMeta({ middleware: 'auth' })

  const { data: user, pending } = useFetch('/api/bsky/user')
</script>