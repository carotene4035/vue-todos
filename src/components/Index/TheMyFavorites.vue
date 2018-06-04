<template>
  <div>
      <p>fav</p>
      <div v-for="toot in toots" :key='toot.id'>{{toot}}</div>
  </div>
</template>

<script>
export default {
  props: ['toots']
}
</script>
