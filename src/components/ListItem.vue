<template>
    <li class="list-item">
      {{ name }}
    </li>
  </template>
  
  <script setup>
    const { props } = defineProps(['name']);
  </script>
  
  <style scoped>
  .list-item {
    list-style: none;
  }
  </style>
  