module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				blue: {
					450: '#401cff'
				}
			}
		}
	},
	variants: {
		extend: { textColor: ['visited'] }
	},
	plugins: [require('daisyui')]
};
