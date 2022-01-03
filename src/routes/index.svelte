<script>
	import Projets from '../components/indexcomponents/Projets.svelte';
	import Header from '../components/indexcomponents/Header.svelte';
	import Services from '../components/indexcomponents/Services.svelte';
	import Vitrine from '../components/indexcomponents/Vitrine.svelte';
	import Ecommerce from '../components/indexcomponents/Ecommerce.svelte';
	import Mesure from '../components/indexcomponents/Mesure.svelte';
	import Graphisme from '../components/indexcomponents/Graphisme.svelte';
	import Indispensables from '../components/indexcomponents/Indispensables.svelte';
	import Expertises from '../components/indexcomponents/Expertises.svelte';
	import Footer from '../components/indexcomponents/Footer.svelte';
</script>

<svelte:head>
	<script defer src="../node_modules/@fortawesome/fontawesome-free/js/brands.js"></script>
	<script defer src="../node_modules/@fortawesome/fontawesome-free/js/solid.js"></script>
	<script defer src="../node_modules/@fortawesome/fontawesome-free/js/fontawesome.js"></script>
	<title>Home Page</title>
</svelte:head>

<Header />
<Services />
<Projets />
<Vitrine />
<Ecommerce />
<Mesure />
<Graphisme />
<Indispensables />
<Expertises />
<Footer />
