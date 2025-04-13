<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <main>
    <h1>Thomas Ranieri</h1>

    <p>I like to make things that help people.</p>

    <div class="social-links">
      <a href="https://www.linkedin.com/in/thomas-ranieri-dev/" class="social-link">
        <Icon icon="mdi:linkedin" />
      </a>
      <a href="https://github.com/thomasranieri" class="social-link">
        <Icon icon="mdi:github" />
      </a>
    </div>
  </main>
</template>
<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  font-size: 60px;
  color: black;

  &:hover {
    color: #0077b5;
  }
}
</style>