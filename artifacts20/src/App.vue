<template>
  <div class="content">
    <h1>Artifacts 20</h1>
    <p>Remote application for Shell20</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ArtifactsHome',
  props: {
    title: String,
    amount: Number
  },
  setup(_props, _ctx) {
    // debugger;
    return {}
  }
})

</script>

<style scoped>
.content {
  display: flex;
  min-height: 100vh;
  line-height: 1.1;
  text-align: center;
  flex-direction: column;
  justify-content: center;
}

.content h1 {
  font-size: 3.6rem;
  font-weight: 700;
}

.content p {
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.5;
}
</style>
