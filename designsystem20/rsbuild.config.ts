import fs from 'node:fs';
import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginVue(),
    pluginModuleFederation({
      name: 'AppDesignSystem20',
      filename: 'designsystem20.js',
      exposes: {
        './DS': './src/App.vue'
      },
      dts: {
        generateTypes: {
          compilerInstance: 'vue-tsc'
        }
      }
    })],
  server: {
    host: 'localhost',
    port: 8001,
    https: {
      key: fs.readFileSync('./localhostDev.key'),
      cert: fs.readFileSync('./localhostDev.crt'),
      ca: fs.readFileSync('./localCA.pem'),
      passphrase: "Dpo!23",
    }
  },
  dev: {
    hmr: true,
  }
});
