<template>
  <div class="chatboard">
    <div v-for='message in messages'>
    <Message :message="message"></Message>
    </div>
  </div>
</template>

<script>
import Message from './Message'

export default {
  props: ['messages'],
  components: {
    Message
  },

};
</script>
