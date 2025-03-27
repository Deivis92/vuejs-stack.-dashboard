<template>
    <div class="base-card">
      <slot></slot>
    </div>
  </template>
  
  <script setup>
  // Keine zusätzliche Logik notwendig, da die Card nur als Wrapper dient
  </script>

  
  
  <style scoped>
  .base-card {
    background: rgba(1, 31, 53, 1);
    border-radius: 16px;
    padding: 20px 32px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  </style>
  