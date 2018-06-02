<template>
  <div>
      <the-toot-form></the-toot-form>
      <the-my-favorites></the-my-favorites>
      <the-my-toots></the-my-toots>
      <the-timeline></the-timeline>
  </div>
</template>

<script>
import TheMyFavorites from '@/components/Index/TheMyFavorites.vue'
import TheMyToots from '@/components/Index/TheMyToots.vue'
import TheTimeline from '@/components/Index/TheTimeline.vue'
import TheTootForm from '@/components/Index/TheTootForm.vue'

export default {
  components: {
    TheMyFavorites,
    TheMyToots,
    TheTimeline,
    TheTootForm
  }
}
</script>

<style scoped>

</style>
