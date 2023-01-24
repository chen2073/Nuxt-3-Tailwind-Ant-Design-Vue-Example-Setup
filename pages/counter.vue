<script setup lang="ts">
if (process.server) {
  console.log('server')
} else {
  console.log('client')
}

const color = useColor()
const counter = useCounter()
</script>

<template>
  <div>
    <h2>Current color: {{ color }}</h2>
    <input class="text-purple" />
    <div>
      Count: {{ counter }}
      <a-button type="primary" @click="counter++">
        +
      </a-button>
      <a-button type="primary" @click="counter--">
        -
      </a-button>
    </div>
  </div>
</template>