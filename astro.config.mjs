// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'CulturaTec',
			description: 'Tutoriais práticos de Engenharia de Software orientados a projetos.',
			locales: {
				root: { label: 'Português (Brasil)', lang: 'pt-BR' },
			},
			logo: {
				src: './src/assets/logo_banner.jpg',
				replacesTitle: true,
			},
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Engenharia de Software',
					items: [{ autogenerate: { directory: 'engenharia-de-software' } }],
				},
				{
					label: 'Orientação a Objetos',
					items: [
						{ slug: 'orientacao-a-objetos' },
						{ slug: 'orientacao-a-objetos/introducao_java' },
						{ slug: 'orientacao-a-objetos/introducao' },
						{ slug: 'orientacao-a-objetos/propriedades_metodos' },
						{ slug: 'orientacao-a-objetos/heranca' },
					],
				},
				{
					label: 'Domain-Driven Design',
					items: [{ autogenerate: { directory: 'domain-driven-design' } }],
				},
			],
		}),
	],
});
