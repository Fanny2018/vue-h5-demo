<template>
  <div class="page-warp text-center">
    <div class="content">
      <img src="../../assets/images/note.jpg" alt="">
      <h1>启航</h1>
    </div>
  </div>
</template>
<script src="./home.ts" lang="ts"></script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .page-warp {
    position: relative;
    .content {
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      h1 {
        color: #ffc107;
      }
    }
  }
</style>
