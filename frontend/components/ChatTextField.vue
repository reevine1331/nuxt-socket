<template>
  <div class="text-field">
    <div class="input-field">
      <input type="text" v-model="textValue" />
    </div>
    <div>
      <button @click="$emit('send')">送信</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["text"],
  data() {
    return {
      textValue: ""
    };
  },
  watch: {
    textValue: function() {
      this.$parent.text = this.textValue;
    },
    text: function() {
      this.textValue = this.text;
    }
  }
};
</script>
