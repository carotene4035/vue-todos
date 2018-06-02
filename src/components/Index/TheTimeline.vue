<template>
  <div>
    <p>my timeline</p>
    <div v-for='toot in toots' :key='toot.id'>{{toot}}</div>
  </div>
</template>

<script>
export default {
  computed: {
    toots () {
      return this.$store.getters.all
    }
  }
}
</script>
