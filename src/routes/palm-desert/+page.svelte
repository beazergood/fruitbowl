<script>
	import Countdown from '../../lib/components/Countdown/Countdown.svelte';
    import data from './viewModel'
</script>

<div class="flex justify-center h-screen">
    <div class="flex flex-col ">
        <Countdown event={data.event}/>
    </div>
</div>
