<template>
  <div class="content">
    <h1>Shell 20</h1>
    <p>Main conumer and orchestrator.</p>
    <remote-artifacts></remote-artifacts>
  </div>
</template>
<script lang="ts">
import { loadRemote } from '@module-federation/enhanced/runtime';
import { defineAsyncComponent, defineComponent } from 'vue';
const remoteArtifacts = defineAsyncComponent({
  // @ts-ignore
  loader: () => loadRemote('Artifacts20/ArtifactsHome')
})


export default defineComponent({
  name: "ShellHome",
  components: { remoteArtifacts },  
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
