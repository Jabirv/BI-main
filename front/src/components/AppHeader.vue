<script setup lang="ts">
// AppHeader.vue
</script>

<template>
  <header class="app-header">
    <div class="logo">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 4H15C15.5304 4 16.0391 4.21071 16.4142 4.58579C16.7893 4.96086 17 5.46957 17 6V20L12 17L7 20V6C7 5.46957 7.21071 4.96086 7.58579 4.58579C7.96086 4.21071 8.46957 4 9 4Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span>Team KAYOUX</span>
    </div>
    <h1>Visualisation des Données Ferroviaires</h1>
  </header>
</template>

<style scoped>
.app-header {
  padding: var(--space-6) 0;
  margin-bottom: var(--space-6);
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-primary-600);
  margin-bottom: var(--space-4);
}

.logo span {
  font-weight: var(--font-weight-bold);
  font-size: 1.25rem;
}

h1 {
  font-size: 1.875rem;
  color: var(--color-neutral-900);
  margin-bottom: var(--space-2);
}

@media (min-width: 768px) {
  h1 {
    font-size: 2.25rem;
  }
}
</style>
