<template>
  <div>
      <todo-form></todo-form>
      <todo-list></todo-list>
  </div>
</template>

<script>
import MyFavorites from '@/components/Index/MyFavorites.vue'
import MyToots from '@/components/Index/MyToots.vue'
import Timeline from '@/components/Index/Timeline.vue'
import TootForm from '@/components/Index/TootForm.vue'

export default {
  components: { MyFavorites, MyToots, Timeline, TootForm }
}
</script>

<style scoped>

</style>
