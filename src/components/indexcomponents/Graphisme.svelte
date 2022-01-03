<script>
	import Button from '../UI/Button.svelte';

	let anchorClass =
		'border-solid rounded-lg py-2 px-6 border border-white text-white hover:border-blue-450 text-2xl w-auto hover:bg-blue-450 hover:text-yellow-500';
</script>

<section class="flex flex-row-reverse h-auto py-20 ">
	<article class="shadow-xl pr-20 bg-yellow-500 editorSpace flex flex-1 justify-around flex-col">
		<h2 class="text-blue-450">Création graphique</h2>
		<p class="text-white">
			Que ce soit sur n’importe quel support, votre image de marque sera la première chose que vos
			clients ou prospects verront. Il est donc nécessaire d’avoir une bonne <strong
				>identité visuelle</strong
			> qui les rassurera sur la qualité de votre activité et qui vous permettra de vous démarquer de
			votre concurrence. De plus, une bonne identité vous permet d’être identifié et reconnu sur la durée.
		</p>
		<p class="text-white">
			Nous réalisons des logos, identités et chartes graphiques, pour tout support print et web. Ces
			éléments nous permettent de donner une tonalité au design des maquettes d’un site internet.
			Ces maquettes sont pensées et réalisées dans le souci de l’expérience utilisateur et de
			l’ergonomie.
		</p>
		<div>
			<Button tailWindClass={anchorClass} href="/">Demande de devis</Button>
		</div>
	</article>
	<article class="mt-20 z-20 absolute shadow-xl">
		<img
			src="https://drive.google.com/uc?export=view&id=19llCozd5mBn2yfiE8Qrxqh2UI2yqamcc"
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
