<script lang="ts">
	export let meta: any;
</script>

<div class="relative flex flex-col z-0 rounded-lg border-2 {meta.borderClass} {meta.bgClasses}">
	<slot name="title" />
	<slot name="content" />
</div>
