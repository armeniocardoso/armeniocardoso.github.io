
// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://culturatec.com.br',
  base: '/',

  integrations: [
    starlight({
      title: 'CulturaTEC',
      description:
        'Tutoriais práticos de Engenharia de Software orientados a projetos.',

      favicon: '/favicon.ico',

      locales: {
        root: {
          label: 'Português (Brasil)',
          lang: 'pt-BR',
        },
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
          items: [
            { autogenerate: { directory: 'inicio' } },
          ],
        },
        {
          label: 'Programação para Iniciantes',
          items: [
            { autogenerate: { directory: 'programacao-iniciantes' } },
          ],
        },
        {
          label: 'Engenharia de Software',
          items: [
            { autogenerate: { directory: 'engenharia-de-software' } },
          ],
        },
        {
          label: 'Desenvolvimento Web',
          items: [
            { autogenerate: { directory: 'desenvolvimento-web' } },
          ],
        },
        {
          label: 'Modelagem de Dados e SQL',
          items: [
            { autogenerate: { directory: 'modelagem-dados-sql' } },
          ],
        },
        {
          label: 'Orientação a Objetos',
          items: [
            { autogenerate: { directory: 'orientacao-a-objetos' } },
          ],
        },
        {
          label: 'Domain-Driven Design',
          items: [
            { autogenerate: { directory: 'domain-driven-design' } },
          ],
        },
      ],
    }),
  ],
});
