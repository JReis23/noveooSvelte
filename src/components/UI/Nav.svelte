<script>
	import Button from '../UI/Button.svelte';

	let navBtnStyle = 'uppercase p-2';
	let classList = 'shadow-lg text-center py-3 px-6';
</script>

<nav class="flex justify-between">
	<div />
	<ul class="flex">
		<li class={classList}>
			<Button href="/" tailWindClass={navBtnStyle}>Nos services</Button>
		</li>
		<li class={classList}>
			<Button href="/" tailWindClass={navBtnStyle}>Nos prix</Button>
		</li>
		<li class={classList}>
			<Button href="/" tailWindClass={navBtnStyle}>Expertises</Button>
		</li>
		<li class={classList}>
			<Button href="/" tailWindClass={navBtnStyle}>Contact</Button>
		</li>
	</ul>
	<div />
</nav>
