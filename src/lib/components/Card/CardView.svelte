<script lang="ts">
    import type {Metadata} from './$types';

    import Card from './Card.svelte';

    export const metadata: Metadata = {
        borderClass: 'border-gray-400'
    };
</script>

<Card metadata={metadata}>
    <h1 slot="title">Card Title</h1>
    <p slot="content">Card Content</p>
</Card>