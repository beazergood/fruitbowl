<script lang="ts">
    import type {meta} from './$types';

    import Card from './Card.svelte';

    export const meta: meta = {
        borderClass: 'border-gray-400'
    };
</script>

<Card meta={meta}>
    <h1 slot="title">Card Title</h1>
    <p slot="content">Card Content</p>
</Card>