<script>
	let boxClass = 'flex flex-col p-3 border rounded-lg border-gray-100 shadow-xl';
	let paraClass = 'leading-8';
</script>

<section class="container flex justify-center py-10">
	<div class="p-10 max-w-screen-md">
		<span />
		<h2>Les Indispensables</h2>
		<p class={paraClass}>
			En amont du développement de votre site, nous pouvons vous accompagner dans l’élaboration de
			votre cahier des charges. En aval, nous mettons en place des procédés qui sont aujourd’hui
			nécessaires pour l’optimisation de tout site web.
		</p>
	</div>
</section>
<section class="container-xl py-10">
	<div class="flex flex-col md:flex-row px-10 gap-12">
		<div class={boxClass}>
			<h4>Responsive Web design</h4>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-10 w-10 my-6 self-center"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
				/>
			</svg>
			<p>
				Aujourd’hui, votre site doit être visible sur un écran d’ordinateur, tablette et portable.
				Le responsive va permettre l’affichage adapté à toutes les tailles d’écrans. Cette technique
				est donc nécessaire en cas de refonte si votre site en est dépourvu ou si vous avez besoin
				d’un site, quel qu’il soit.
			</p>
		</div>
		<div class={boxClass}>
			<h4>Administration et sécurité</h4>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-10 w-10 my-6 self-center"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
				/>
			</svg>
			<p>
				Votre site est votre propriété. Nous mettons en œuvre des fonctionnalités qui vous
				permettent de le gérer vous-même, et nous dispensons des formations afin que vous puissiez
				le maîtriser en toute autonomie. Nous gérons également la sécurité de votre site, pour
				assurer son bon fonctionnement et sa longévité.
			</p>
		</div>
		<div class={boxClass}>
			<h4>Référencement et maintenance</h4>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-10 w-10 self-center my-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
				/>
			</svg>
			<p>
				Nous développons tout site avec le procédé de référencement SEO qui permet d’obtenir une
				meilleure visibilité sur le web sur les moteurs de recherche. Une fois votre site en ligne,
				nous proposons des modules ponctuels ou forfaits prolongés de maintenance, pour
				d’éventuelles mises à jour ou réparations.
			</p>
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
