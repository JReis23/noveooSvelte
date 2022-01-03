<script>
	import Button from '../UI/Button.svelte';

	let footerLinksClass = 'text-white text-xl py-1 hover:text-yellow-500';
	let socialClass = 'text-white mr-5 text-4xl py-5';
</script>

<footer class="bg-gray-800">
	<div class="h-full flex px-10 flex-col sm:flex-row items-center">
		<div class="flex flex-col w-1/2 py-5">
			<Button href="/" tailWindClass={footerLinksClass}>Nos services</Button>
			<Button href="/" tailWindClass={footerLinksClass}>Qui sommes-nous ?</Button>
			<Button href="/" tailWindClass={footerLinksClass}>Expertises</Button>
			<Button href="/" tailWindClass={footerLinksClass}>Contact</Button>
			<Button href="/" tailWindClass={footerLinksClass}>C.G.U & Mentions légales</Button>
			<Button href="/" tailWindClass={footerLinksClass}>Paramètres des données</Button>
		</div>
		<div class="w-1/2 py-5">
			<img class="py-5 xl:w-1/2" src="../static/images/noveoo-ok.png" alt="" />
			<span />
			<div class="py-5">
				<Button href="/" tailWindClass={socialClass}><i class="fab fa-facebook-square" /></Button>
				<Button href="/" tailWindClass={socialClass}><i class="fab fa-instagram-square" /></Button>
				<Button href="/" tailWindClass={socialClass}><i class="fab fa-linkedin" /></Button>
			</div>
			<p class="text-white text-sm pb-4">
				* ** Les prix présentés sur notre site se basent sur une prestation minimum de logo et de
				conception CMS (outil de création de site prédéfini).
			</p>
			<p class="text-sm text-white">copyright &#xA9; Noveoo</p>
		</div>
	</div>
</footer>
