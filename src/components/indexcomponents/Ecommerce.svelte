<script>
	import Button from '../UI/Button.svelte';

	let anchorClass =
		'border-solid rounded-lg py-2 px-6 border border-white text-white hover:border-blue-450 text-2xl w-auto hover:bg-blue-450 hover:text-yellow-500';
</script>

<section class="flex flex-row-reverse h-auto py-20 ">
	<article class="shadow-xl pr-20 bg-yellow-500 editorSpace flex flex-col flex-1 justify-around ">
		<h2 class="text-blue-450">Site E-commerce</h2>
		<p class="text-white">
			Que vous ayez une boutique installée ou que vous souhaitez faire uniquement de la vente
			dématérialisée, l’aspect pratique d’une boutique à portée de main séduira vos clients, et vous
			facilitera vos quantités et organisation de stockage. En effet, un <strong
				>site marchand</strong
			>
			permettra d’être constamment au plus proche de votre clientèle et de conquérir de nouveaux marchés.
		</p>
		<p class="text-white">
			Noveoo s'applique à concevoir un site avec toutes les fonctionnalités nécessaires pour
			optimiser votre commerce : création de compte, fidélisation, gestion des produits, d’offres et
			de commandes. De plus, nous portons une attention particulière à la gestion des données, aux
			normes RGPD, pour que votre site soit fonctionnel et sécurisé.
		</p>
		<div>
			<Button tailWindClass={anchorClass} href="/">Demande de devis</Button>
		</div>
	</article>
	<article class="mt-20 z-20 absolute shadow-xl">
		<img
			src="https://drive.google.com/uc?export=view&id=1m3TDYuHrjObsRzcbgWb3f0NF7z1Glb7T"
			alt=""
		/>
	</article>
</section>

<style>
	img {
		height: 40vw;
	}

	.editorSpace {
		margin-right: 30%;
		height: 40vw;
		padding-right: 15vw;
		padding-left: 5vw;
	}
</style>
