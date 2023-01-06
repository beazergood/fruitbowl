<script lang="ts">
	import type { Metadata } from './$types';
	export let metadata: Metadata;
</script>

<div class="relative bg-white flex flex-col rounded-lg border-2 {metadata.borderClass}">
	<slot name="title"/>
	<slot name="content" />
</div>
