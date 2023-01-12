<script lang="ts">
	import type { Event } from './$types';

	export let data: Event[] = [];
</script>

<div class="flex flex-col">
    <h1 class="text-2xl text-center py-2">Trips</h1>
	<ul>
		{#each data as event}
			<li class="border border-black p-2 rounded-md cursor-pointer">
				<a href={event.href}>
					{event.info.name}
					{event.info.emoji}
					{new Date(event.info.startDate).toDateString()}
					{new Date(event.info.endDate).toDateString()}
				</a>
			</li>
		{/each}
	</ul>
</div>
