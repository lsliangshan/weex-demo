<template>
  <div class="app-main" @androidback="back">
    <router-view style="flex: 1;"></router-view>
  </div>
</template>

<script>
  export default {
    methods: {
      back: function () {
        this.$router.back()
      }
    }
  }
</script>

<style>
  @import "../assets/animate.css";
  .app-main {
    background-color: #e5e5e5;
    /*display: flex;*/
    /*align-items: center;*/
    /*justify-content: center;*/
    /*overflow-x: hidden;*/
  }
</style>