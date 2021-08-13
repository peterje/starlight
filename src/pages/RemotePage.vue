<template>
  <div class="container surface">
    <VideoCallFeature class="mb-4"></VideoCallFeature>
    <MessageFeature></MessageFeature>
  </div>
</template>

<script>
import VideoCallFeature from "@/components/ui/landing/feature/VideoCallFeature";
import MessageFeature from "@/components/ui/landing/feature/MessageFeature";
export default {
  components:{
    VideoCallFeature,
    MessageFeature
  },
  name: "RemotePage"
}
</script>

<style scoped>

</style>
