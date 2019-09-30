<template>
  <div class="header">
    <div class="header_title">Nuxt Sample Chat</div>
    <div class="header_command" v-on:click="transitionToTop">quit</div>
  </div>
</template>

<script>
export default {
  methods: {
    transitionToTop() {
      this.$router.push({path: '/'});
    }
  }
};
</script>
