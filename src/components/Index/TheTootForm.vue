<template>
  <div>
    <input type="" v-model='toot'>
    <button v-on:click='submit'>提出する</button>
  </div>
</template>

<script>
import ACTION from '@/vuex/action-types'

export default {
  data () {
    return {
      toot: ''
    }
  },
  methods: {
    submit () {
      this.$store.dispatch({
        type: ACTION.ADD_TOOT,
        text: this.toot
      })
    }
  }
}
</script>
