<template>
    <div>
      <input type="todoName"><button v-on:click='submit'>登録する</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      todoName: ''
    }
  },
  methods: {
    submit: function () {
    }
  }
}
</script>
