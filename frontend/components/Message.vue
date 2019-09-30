<template>
  <div class="message">
    <div class="message_user">{{ message.name}}</div>
    <div class="message_text">{{ message.text }}</div>
    <div class="message_time">{{ message.time}}</div>
  </div>
</template>

<script>
export default {
  props: ['message']
};
</script>
