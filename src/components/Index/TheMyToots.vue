<template>
  <div>
      <p>myToots</p>
      <div v-for="myToot in myToots" :key='myToot.id'>{{myToot}}</div>
  </div>
</template>

<script>
export default {
  computed: {
    myToots () {
      return this.$store.getters['toot/myToots'](1)
    }
  }
}
</script>
