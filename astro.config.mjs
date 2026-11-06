// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://culturatec.com.br',
	base: '/',
	integrations: [
		starlight({
			title: 'CulturaTec',
			description: 'Tutoriais práticos de Engenharia de Software orientados a projetos.',
			favicon: '/favicon.ico',
			locales: {
				root: { label: 'Português (Brasil)', lang: 'pt-BR' },
			},
			logo: {
				src: './src/assets/logo_banner.jpg',
				replacesTitle: true,
			},
			social: [
        		{
            		icon: 'youtube',
            		label: 'YouTube',
            		href: 'https://youtube.com/@culturatec',
        		},				
				{
    				icon: 'instagram',
    				label: 'Instagram',
    				href: 'https://www.instagram.com/culturatec_engsoft',
				},
    		],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'CulturaTEC',
					items: [{ autogenerate: { directory: 'inicio' } }],
				},
				{
					label: 'Programação para Iniciantes',
					items: [
						{ slug: 'programacao-iniciantes' },
						{ slug: 'programacao-iniciantes/pensamento-computacional' },
						{ slug: 'programacao-iniciantes/conceito-de-logica' },
						{ slug: 'programacao-iniciantes/algoritmos' },
						{ slug: 'programacao-iniciantes/programacao' },
					],
				},
				{
					label: 'Engenharia de Software',
					items: [
						{ slug: 'engenharia-de-software' },
						{
							label: 'Boas Práticas',
							items: [								
								{
									slug: 'engenharia-de-software/boas-praticas/test-driven-development',
								},
								{
									slug: 'engenharia-de-software/boas-praticas/auditoria-desempenho-otimizacao-aplicacoes-web',
								},
							],
						},
					],
				},
				{
					label: 'Modelagem de Dados e SQL',
					items: [
						{ slug: 'modelagem-dados-sql' },
					],
				},
				{
					label: 'Orientação a Objetos',
					items: [
						{ slug: 'orientacao-a-objetos' },
						{ slug: 'orientacao-a-objetos/introducao-java' },
						{ slug: 'orientacao-a-objetos/introducao' },
						{ slug: 'orientacao-a-objetos/propriedades-metodos' },
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
