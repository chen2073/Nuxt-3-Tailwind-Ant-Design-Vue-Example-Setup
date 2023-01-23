<script setup lang="ts">
  const { data } = await useFetch('http://localhost:3000/api/hello')
  if (process.server) {
    console.log('server')
  } else {
    console.log('client')
  }
</script>

<template>
  <div>
    <h1>
      test
    </h1>
    <p>
      {{ data.msg }}
    </p>
  </div>
</template>