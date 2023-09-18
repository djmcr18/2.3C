<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <!-- 11. Routers -->
        <RouterLink to="/">Home (1. Template Syntax)</RouterLink>
        <RouterLink to="/mouse-tracker">2, 3, 7, 8, 9 Demonstrations</RouterLink>
        <RouterLink to="/form-input-bindings-a">8. Form Input Bindings A</RouterLink>
        <RouterLink to="/parent-component">10. Components</RouterLink>
        <RouterLink to="/four-five-six">4, 5, 6 Demonstrations</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>
    <p>Author: Diego Miranda</p>
  </footer>
</template>

<style scoped>
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem 0;
}

header {
  background-color: #3366cc;
  color: white;
  padding: 1rem 0;
  text-align: center;
}

nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
  font-size: 1rem;
  padding: 1rem 0;
}

nav a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

nav a:hover {
  background-color: #254c99;
  color: white;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }

  nav {
    gap: 2rem;
  }
}
</style>
