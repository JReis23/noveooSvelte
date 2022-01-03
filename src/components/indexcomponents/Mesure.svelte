<script>
	import Button from '../UI/Button.svelte';

	let anchorClass =
		'border-solid rounded-lg py-2 px-6 border border-white text-white hover:border-yellow-500 text-2xl w-auto hover:bg-yellow-500 hover:text-blue-450';
</script>

<section class="flex flex-row py-20 ">
	<article class="flex-auto mt-20 z-20 absolute shadow-xl">
		<img
			src="https://drive.google.com/uc?export=view&id=1OlaBPApbzPq07UAbnwfByYdjkWtG6P3V"
			alt=""
		/>
	</article>
	<article class="flex flex-col flex-1 shadow-xl py-10 bg-blue-450 justify-around editorSpace ">
		<h2 class="text-yellow-500">Site Sur Mesure</h2>
		<p class="text-white">
			Que vous souhaitez vous démarquer de la concurrence ou que votre projet sorte de la trame
			traditionnelle, le <strong>site sur mesure</strong>
			vous donne la possibilité de mettre en place des fonctionnalités bien spécifiques qui répondront
			à vos besoins. Qu’il s’agisse de la partie visible pour vos visiteurs ou de l’espace d’administration
			à destination de vous et votre équipe, nous développons intégralement un site qui sera conçu et
			personnalisé pour votre entreprise, et construit sur une base technique sur-mesure.
		</p>
		<p class="text-white">
			Nous voyons avec vous quelles sont vos attentes et nous vous guidons dans le choix des
			meilleures fonctionnalités pour que votre site se démarque des autres en toute performance.
			Noveoo vous propose des modules «à la carte» qui correspondront à votre projet.
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
