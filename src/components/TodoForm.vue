<template>
  <div>
    <input type="todoName">
    <button v-on:click='submit'>提出する</button>
    <div>{{ todos }}</div>
    <div>
      <p>{{ count }}</p>
      <button v-on:click='increment'>カウントする</button>
    </div>
  </div>
</template>

<script>
import actionTypes from '@/store/action-types'

export default {
  data () {
    return {
      todoName: ''
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    },
    todos () {
      return this.$store.state.todos
    }
  },
  methods: {
    increment () {
      /**
       * mutationを直接呼び出す書き方
       */
      // 引数を渡すこともできる
      // this.$store.commit('increment', 2)

      // オブジェクトとして渡すこともできる（store側ではpayloadとして渡される
      // this.$store.commit('increment', { amount: 2 })

      // こういう書き方もできる
      // this.$store.commit({
      //   type: types.INCREMENT,
      //   amount: 10
      // })
      this.$store.dispatch({
        type: actionTypes.INCREMENT,
        amount: 10
      })
    },
    submit () {
      /** これだと、対象のストアがわかりにくい */
      this.$store.commit('addtodo')
    }
  }
}
</script>
