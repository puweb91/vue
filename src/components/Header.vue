<script>
export default {
  name: "Header"
}
</script>

<template>
  <header class="header">
    <div class="container">
      <nav class="gnb-list">
        <router-link to="/">HOME</router-link>
        <router-link to="/About">ABOUT</router-link>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  .gnb-list {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 40px;
  }
}
</style>