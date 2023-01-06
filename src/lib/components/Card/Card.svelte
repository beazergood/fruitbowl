<script lang="ts">
	export let metadata: any;
</script>

<div class="relative flex flex-col rounded-lg border-2 {metadata.borderClass} {metadata.bgColorClass}">
	<slot name="title" />
	<slot name="content" />
</div>
