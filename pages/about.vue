<script setup lang="ts">
const { data: user } = await useFetch('https://jsonplaceholder.typicode.com/todos/1')
if (process.server) {
  console.log('server')
} else {
  console.log('client')
}
const counter = useCounter()
</script>

<template>
  <div>
    {{ user.title }}
  </div>
  <div>
    <NuxtLink to="/counter">
      Count: 
    </NuxtLink>
    {{ counter }}
  </div>
</template>