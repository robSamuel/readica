import type { Config } from 'tailwindcss';

//import { shadcnPreset } from '@shadcn/ui'; // Only needed if using ShadCN

const config: Config = {
	// presets: [shadcnPreset], // Remove this line if you're not using ShadCN yet
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [],
};

export default config;
