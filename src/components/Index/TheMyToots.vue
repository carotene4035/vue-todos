<template>
  <div>
      <p>myToots</p>
      <div v-for="myToot in toots" :key='myToot.id'>
        {{myToot}}
      </div>
  </div>
</template>

<script>
export default {
  props: ['toots']
}
</script>
