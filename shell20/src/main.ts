import { init, registerRemotes, loadRemote } from '@module-federation/enhanced/runtime';

import { createApp, defineAsyncComponent } from 'vue';
import App from './App.vue';
import './index.css';

init({
    name: '@inf/Shell',
    remotes: []
})

registerRemotes([
    {
        name: 'Artifacts20',
        entry: 'https://localhost:8100/mf-manifest.json'
    }
])


createApp(App).mount('#root');
