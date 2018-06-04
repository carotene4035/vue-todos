<template>
  <div>
      <the-toot-form></the-toot-form>
      <the-my-favorites :toots='myFavToots'></the-my-favorites>
      <the-my-toots :toots='myToots'></the-my-toots>
      <the-timeline :toots='timelineToots'></the-timeline>
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
  },
  created () {
    this.$store.dispatch('toot/INITIALIZE')
  },
  computed: {
    timelineToots () {
      return this.$store.getters['toot/allToots']
    },
    myToots () {
      return this.$store.getters['toot/myToots'](1)
    },
    myFavToots () {
      return this.$store.getters['toot/myFavToots']
    }
  }
}
</script>

<style scoped>

</style>
