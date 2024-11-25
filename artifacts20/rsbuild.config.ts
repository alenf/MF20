import fs from 'node:fs';
import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginVue(),
    pluginModuleFederation({
      name: 'Artifacts20',
      filename: "artifacts20.js",
      exposes: {        
        './ArtifactsHome': './src/App.vue'
      },
      remotes:{
        
      },
      dts: {
        generateTypes: {
          compilerInstance: 'vue-tsc'
        }
      }
    })],
  server: {
    host: 'localhost',
    port: 8100,    
    https: {
      key: fs.readFileSync('./localhostDev.key'),
      cert: fs.readFileSync('./localhostDev.crt'),
      ca: fs.readFileSync('./localCA.pem'),
      passphrase: "Dpo!23",
    },
  },
  dev:{
    hmr:true
  }
});

