<script lang="ts">
	export let showModal = false;
</script>

{#if showModal}
	<div class="backdrop relative z-10">
		<div class="modal">
			<div class="flex flex-row-reverse">
				<button
					class="text-blue-900 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none"
					on:click={() => (showModal = false)}
				>
					X
				</button>
			</div>
			<slot />
		</div>
	</div>
{/if}

<style>
	.backdrop {
		width: 100%;
		height: 100%;
		position: fixed;
		background: rgba(0, 0, 0, 0.8);
	}

	.modal {
		padding: 10px;
		border-radius: 10px;
		max-width: 400px;
		margin: 10% auto;
		text-align: center;
		background: white;
	}

</style>
