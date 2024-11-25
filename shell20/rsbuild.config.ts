import fs from 'node:fs';
import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginVue(),
    pluginModuleFederation({
      name: 'AppShell20',
      filename: "shell20.js",
      exposes: {
        './AuthService':'./src/auth/AuthService.ts',
        './Home': './src/App.vue'
      },
      dts: {
        generateTypes: {
          compilerInstance: 'vue-tsc'
        }
      }
    })],
  server: {
    host: 'localhost',
    port: 9000,
    https: {
      key: fs.readFileSync('./localhostDev.key'),
      cert: fs.readFileSync('./localhostDev.crt'),
      ca: fs.readFileSync('./localCA.pem'),
      passphrase: "Dpo!23",
    }
  },
  dev:{
    hmr:true
  }
});
