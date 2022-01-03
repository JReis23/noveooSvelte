<script>
	export let href = null;
	export let type = 'button';
	export let tailWindClass = 'prix';
	export let disabled = false;
</script>

{#if { href }}
	<a {href} class={tailWindClass}>
		<slot />
	</a>
{:else}
	<button class={tailWindClass} {type} {disabled} on:click>
		<slot />
	</button>
{/if}
