<template>
  <main class="centered">
    <!-- 1. a. Text Interpolation -->
    <h1>Welcome to task 2.3C!</h1>
    <br>
    <!-- 1. c. Attribute Bindings [v-bind:id] -->
    <h3 v-bind:id="headerId">{{ message }}</h3>
    <br>
    <!-- 1. b. Raw HTML [v-html] -->
    <div v-html="htmlContent"></div>
    <br>
    <!-- 1. d. JavaScript expressions inside syntax {{ }} -->
    <p>{{ '2 + 3 equals ' + (2 + 3) }}</p>
  </main>
</template>

<script setup>
  // Data
  const headerId = 'myHeader'
  const message = 'Please navigate through the website to find all the required Vue 3 concepts being demonstrated.'
  const htmlContent = '<p>This is raw <strong>HTML</strong> content.<br>By the way, read through the <i>code comments</i> for a more in depth understanding of how the concept is being implemented.</p>'
</script>

<style scoped>
.centered {
  text-align: center;
  background-color: #f8f8f8;
  margin: 0 auto; /* Center horizontally */
}

h1 {
  font-size: 24px;
  margin-bottom: 1rem;
}

h3 {
  font-size: 20px;
  color: #3366cc;
  margin-bottom: 1rem;
}

p {
  font-size: 18px;
}

strong {
  color: #3366cc;
}
</style>
