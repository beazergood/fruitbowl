import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: [
        vitePreprocess(),
        (svelteOptions) => {
            return {
                ...svelteOptions,
                globals: {
                    ...svelteOptions.globals,
                    window: 'window'
                }
            };
        }
    ],
    kit: {
        adapter: adapter({
            strict: false,
            fallback: 'index.html'
        })
    }
};

export default config;