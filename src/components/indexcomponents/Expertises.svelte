<script>
	let iconsClass = 'flex flex-col items-center p-6';
</script>

<section class="container flex justify-center py-10">
	<div class="p-10 max-w-screen-md">
		<span />
		<h3 class="pt-5">Expertises</h3>
	</div>
</section>
<section class="container-xl py-10">
	<div class="flex flex-col md:flex-row px-12 gap-12">
		<div class="flex flex-col md:flex-row">
			<div
				class="h-7 md:h-auto rounded-l-lg w-auto md:w-20 bg-gradient-to-t from-yellow-500 to-yellow-300"
			/>
			<div class="md:px-5">
				<h4 class="md:pb-5">Scrum Agile</h4>
				<p class="pt-5">
					Une méthodologie collaborative centrée sur l’humain et la communication, qui permet une
					meilleure adaptation face au changement et à l’évolution des attentes du client. Cette
					méthode est restée notre dynamique et organisation de travail.
				</p>
			</div>
		</div>
		<div class="flex flex-col md:flex-row">
			<div
				class="h-7 md:h-auto rounded-l-lg w-auto md:w-20 bg-gradient-to-t from-yellow-500 to-yellow-300"
			/>
			<div class="md:px-5">
				<h4 class="md:pb-5">Opquast</h4>
				<p class="pt-5">
					Certification Opquast, qui prouve la maîtrise de la qualité en projet web, plus
					précisément les bonnes pratiques du web qui prennent en compte l’expérience utilisateur.
				</p>
			</div>
		</div>
	</div>
</section>
<section class="flex justify-center p-10">
	<div class="max-w-screen-md flex flex-col">
		<h4 class="text-center">Compétences</h4>
		<div class="flex flex-col">
			<div class="flex">
				<div class={iconsClass}>
					<i class="fab fa-html5 fa-5x" />
					<h5>Html</h5>
				</div>
				<div class={iconsClass}>
					<i class="fab fa-css3-alt fa-5x" />
					<h5>CSS</h5>
				</div>
				<div class={iconsClass}>
					<i class="fab fa-js-square fa-5x" />
					<h5>JavaScript</h5>
				</div>
			</div>
			<div class="flex justify-center">
				<div class={iconsClass}>
					<i class="fab fa-python fa-5x" />
					<h5>Python</h5>
				</div>
				<div class={iconsClass}>
					<i class="fab fa-php fa-5x" />
					<h5>PHP</h5>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	span {
		border: solid 3px #f59e0b;
		border-radius: 5px;
		width: 80px;
	}
</style>
