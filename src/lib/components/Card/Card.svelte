<script lang="ts">
	import type { Metadata } from './$types';
	export let metadata: Metadata;
	export let bgColor = 'bg-white';
</script>

<div class="relative {bgColor} flex flex-col rounded-lg border-2 {metadata.borderClass}">
	<slot name="title"/>
	<slot name="content" />
</div>
