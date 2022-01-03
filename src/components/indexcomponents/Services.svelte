<script>
	import Button from '../UI/Button.svelte';

	let anchorClass = 'py-1 text-3xl flex items-center justify-between';
	let listClass = 'py-4';
	let paraClass = 'leading-8';
</script>

<section class="grid grid-cols-6 gap-4">
	<div class="col-start-2 col-span-2 p-10">
		<span />
		<h2>Nos services</h2>
		<p class={paraClass}>
			De la maquette au déploiement, en passant par la création graphique, nous réalisons tout site
			répondant à vos besoins. Nous sommes là pour créer et gérer la communication de votre projet,
			sur le web. Noveoo, c’est l’accompagnement de toute structure à la transformation numérique.
		</p>
	</div>
	<div class="flex flex-col col-start-4 col-span-2 p-10">
		<h3>Services</h3>
		<ul class="p-6">
			<li class={listClass}>
				<Button href="/" tailWindClass={anchorClass}>
					Site Vitrine
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-8 w-8 text-yellow-500"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
							clip-rule="evenodd"
						/>
					</svg></Button
				>
				<p class={paraClass}>
					Faites connaître votre entreprise, vos produits ou vos services a vos futurs clients
				</p>
			</li>
			<li class={listClass}>
				<Button href="/" tailWindClass={anchorClass}>
					E-commerce
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-8 w-8 text-yellow-300"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
							clip-rule="evenodd"
						/>
					</svg>
				</Button>
				<p class={paraClass}>
					Avec votre boutique en ligne, mettez en avant vos produits et gérez leur vente, vos
					promotions et vos commandes
				</p>
			</li>
			<li class={listClass}>
				<Button href="/" tailWindClass={anchorClass}>
					Site sur mesure
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-8 w-8 text-yellow-500"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
							clip-rule="evenodd"
						/>
					</svg>
				</Button>
				<p class={paraClass}>
					Montrez votre activité sur le web, à travers un site qui n’a pas de thème prédéfini et qui
					est unique
				</p>
			</li>
			<li class={listClass}>
				<Button href="/" tailWindClass={anchorClass}>
					Graphisme
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-8 w-8 text-yellow-300"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
							clip-rule="evenodd"
						/>
					</svg>
				</Button>
				<p class={paraClass}>
					Visualisez ce que sera votre site grâce au maquettage et donnez une identité visuelle à
					votre entreprise.
				</p>
			</li>
		</ul>
	</div>
</section>

<style>
	span {
		border: solid 3px #f59e0b;
		border-radius: 5px;
		width: 80px;
	}
</style>
