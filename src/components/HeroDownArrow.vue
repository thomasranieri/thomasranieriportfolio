<template>
  <svg height="100" width="100" viewBox="0 0 20 20" class="hero-down-arrow">
    <polyline points="0,0  10,10, 20,0" />
    <polyline points="0,0  10,10, 20,0" style="animation-delay: 1000ms" />
    <polyline points="0,0  10,10, 20,0" style="animation-delay: 2000ms" />
  </svg>
</template>
<style scoped>
.hero-down-arrow {
  margin-bottom: 80px;
  margin-top: auto;
}

polyline {
  fill: none;
  stroke-width: 1px;
  stroke: white;
  animation: down 2s infinite linear;
  animation-fill-mode: both;
}

@keyframes down {
  0% {
    transform: translate(0px, 0px);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: translate(0px, 10px);
    opacity: 0;
  }
}
</style>
