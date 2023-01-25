<template>
  <header class="header">
    <div class="container">
      <ul class="gnb-list">
        <li class="gnb-list__item">HOME</li>
        <li class="gnb-list__item">INTRO</li>
        <li class="gnb-list__item">PROJECT</li>
        <li class="gnb-list__item">CONTACT</li>
      </ul>
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