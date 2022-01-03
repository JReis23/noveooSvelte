<script>
	import Button from '../UI/Button.svelte';

	let anchorClass =
		'border-solid rounded-lg py-2 px-6 border border-white text-white hover:border-yellow-500 text-2xl w-auto hover:bg-yellow-500 hover:text-blue-450';
</script>

<section class="flex flex-row h-auto py-20 ">
	<article class="mt-20 z-20 absolute shadow-xl">
		<img
			src="https://drive.google.com/uc?export=view&id=1lwUOJ3cWfZL3XrAdDpnSGrfA5qrtP70w"
			alt=""
		/>
	</article>
	<article class="flex-1 shadow-xl py-10 bg-blue-450 editorSpace flex justify-around flex-col">
		<h2 class="text-yellow-500">Site Vitrine</h2>
		<p class="text-white">
			Aujourd’hui, il est important voire indispensable d’avoir un site vitrine car exister sur le
			web est plus efficace que d’exister uniquement sur les réseaux sociaux. En effet, le <strong
				>site vitrine</strong
			> est un investissement qui vous permettra de récupérer et rassurer vos futurs prospects et ainsi
			augmenter votre chiffre d’affaires. Tout en exposant qui vous êtes et ce que vous faites à la façon
			d’une carte de visite.
		</p>
		<p class="text-white">
			Que vous ayez une idée prédéfinie de l’image que vous souhaitez donnez à votre activité ou
			non, nous sommes là pour recueillir vos besoins et vos attentes. Noveoo vous accompagne dans
			la conception, pour réaliser ensuite un site qui sera aussi attractif qu’agréable pour vous et
			votre cible.
		</p>
		<div>
			<Button tailWindClass={anchorClass} href="/">Demande de devis</Button>
		</div>
	</article>
</section>

<style>
	img {
		height: 40vw;
	}

	.editorSpace {
		margin-left: 30%;
		height: 40vw;
		padding-left: 15vw;
	}
</style>
