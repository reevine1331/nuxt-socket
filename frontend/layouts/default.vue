<template>
  <div>
    <Header v-show="$route.path !== '/'" />
    <nuxt />
  </div>
</template>

<script>
import Header from './../components/Header'

export default {
  components: {
    Header,
  }
}
</script>