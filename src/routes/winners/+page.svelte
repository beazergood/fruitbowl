<script>
	import HonorsBoard from '../../lib/components/HonorsBoard/HonorsBoard.svelte';
    import data from './viewModel'

</script>

<div class="flex justify-start w-full h-screen">
    <div class="flex flex-col ">
        <HonorsBoard {data} />
    </div>
</div>
