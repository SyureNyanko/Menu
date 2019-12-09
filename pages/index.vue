<template>
<SlotAnimation/>
</template>

<script>
import SlotAnimation from '~/components/SlotAnimation.vue'

export default {
  components: {
    SlotAnimation
  },
  data() {
    return {
      start: false,
    }
  }
}
</script>

