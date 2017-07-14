<template>
  <div class="profile-container">
    <text>个人中心</text>
  </div>
</template>

<style scoped>
  .profile-container {
    width: 750px;
    height: 400px;
    align-items: center;
    justify-content: center;
    background-color: red;
  }
</style>

<script>
  const modal = weex.requireModule('modal')
  export default {
    data () {
      return {

      }
    },
    computed: {
      state () {
        return this.$store.state
      }
    },
    methods: {
      showAlert (text) {
        modal.alert({
          message: text,
          duration: 0.3
        }, function (value) {
          console.log('alert callback', value)
        })
      }
    }
  }
</script>
