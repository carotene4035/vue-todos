<template>
  <div>
      <p>fav</p>
      <div v-for="toot in myFavs" :key='toot.id'>{{toot}}</div>
  </div>
</template>

<script>
export default {
  computed: {
    myFavs () {
      return this.$store.getters.myFavs
    }
  }
}
</script>
