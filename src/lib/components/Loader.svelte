<script>
	import { asset } from '$app/paths';
	import { fade } from 'svelte/transition';
</script>

<div class="loader" transition:fade={{ duration: 120 }}>
	<img src={asset('/xkcd_waiting_upscaled.png')} alt="XKCD characters sitting and waiting" />
	<div class="thinker thinker-left">
		<div class="dot">.</div>
		<div class="dot">.</div>
		<div class="dot">.</div>
	</div>
	<div class="thinker thinker-right">
		<div class="dot">.</div>
		<div class="dot">.</div>
		<div class="dot">.</div>
	</div>
</div>

<style>
	.loader {
		position: relative;
		display: block;
		width: 60%;
		margin: auto;
	}

	.loader img {
		display: block;
		width: 100%;
	}

	.thinker {
		position: absolute;
	}

	.thinker-left {
		top: 8%;
		left: 20%;
	}

	.thinker-right {
		top: 0;
		left: 70%;
	}

	.thinker .dot {
		opacity: 0;
		display: inline-block;
		font-size: 3em;
		animation: blink-1 3.5s linear 0s infinite forwards;
	}

	.thinker-right .dot {
		animation-delay: 1s;
	}

	.thinker .dot:nth-child(1) {
		animation-name: blink-1;
	}

	.thinker .dot:nth-child(2) {
		animation-name: blink-2;
	}

	.thinker .dot:nth-child(3) {
		animation-name: blink-3;
	}

	@keyframes blink-1 {
		0%,
		20%,
		100% {
			opacity: 0;
		}

		20.01%,
		84% {
			opacity: 1;
		}
	}

	@keyframes blink-2 {
		0%,
		40%,
		100% {
			opacity: 0;
		}

		40.01%,
		84% {
			opacity: 1;
		}
	}

	@keyframes blink-3 {
		0%,
		60%,
		100% {
			opacity: 0;
		}

		60.01%,
		84% {
			opacity: 1;
		}
	}
</style>
