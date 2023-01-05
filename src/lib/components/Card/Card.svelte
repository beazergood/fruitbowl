<script lang="ts">
	import type { Metadata } from './$types';
	export let metadata: Metadata;
</script>

<div class="bg-white/100 flex flex-col p-2 rounded-lg border-2 {metadata.borderClass}">
	<slot name="title" class="text-md text-left lext-lg text-gray-700 font-semibold mb-2"/>
	<slot name="content" />
</div>
