<template>
  <div class="top">
    <div>
      <div class="top_title">Vue Sample Chat</div>
      <div class="top_click-here" v-on:click="transitionToDashboard">click here to start</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    transitionToDashboard() {
      this.$router.push({path: '/dashboard'});
    }
  }
};
</script>