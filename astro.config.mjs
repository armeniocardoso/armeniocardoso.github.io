
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
        // CulturaTEC
        {
          label: 'CulturaTEC',
          link: '/inicio/',
        },

        // Programação para Iniciantes
        {
          label: 'Programação para Iniciantes',
          collapsed: true,
          items: [
            {
              slug: 'programacao-iniciantes',
              label: 'Visão geral',
            },
            'programacao-iniciantes/pensamento-computacional',
            'programacao-iniciantes/conceito-de-logica',
            'programacao-iniciantes/algoritmos',
            'programacao-iniciantes/programacao',
          ],
        },
        // Orientação a Objetos
        {
          label: 'Orientação a Objetos',
          collapsed: true,
          items: [
            {
              slug: 'orientacao-a-objetos',
              label: 'Visão geral',
            },
            'orientacao-a-objetos/introducao',
            'orientacao-a-objetos/introducao-java',
            'orientacao-a-objetos/propriedades-metodos',
            'orientacao-a-objetos/heranca',
          ],
        },
        // Engenharia de Software
        {
          label: 'Engenharia de Software',
          collapsed: true,
          items: [
            {
              slug: 'engenharia-de-software',
              label: 'Visão geral',
            },
            {
              label: 'Fundamentos',
              collapsed: true,
              items: [
                'engenharia-de-software/fundamentos/introducao-engenharia-software',                
                'engenharia-de-software/fundamentos/processos-de-desenvolvimento-de-software',
                'engenharia-de-software/fundamentos/introducao-rup',
                'engenharia-de-software/fundamentos/introducao-requisitos',
                'engenharia-de-software/fundamentos/introducao-modelo-dominio',
              ],
            },
            {
              label: 'Arquitetura',
              collapsed: true,
              items: [
                'engenharia-de-software/arquitetura/introducao-api-rest',
              ],
            },
            {
              label: 'Boas Práticas',
              collapsed: true,
              items: [
                'engenharia-de-software/boas-praticas/test-driven-development',
                'engenharia-de-software/boas-praticas/auditoria-desempenho-otimizacao-aplicacoes-web',
              ],
            },
          ],
        },
        // Desenvolvimento Web
        {
          label: 'Desenvolvimento Web',
          collapsed: true,
          items: [
            {
              slug: 'desenvolvimento-web',
              label: 'Visão geral',
            },
            {
              label: 'React',
              collapsed: true,
              items: [
                {
                  slug: 'desenvolvimento-web/react',
                  label: 'Visão geral',
                },
              ],
            },
            {
              label: 'Next.js',
              collapsed: true,
              items: [
                {
                  slug: 'desenvolvimento-web/nextjs',
                  label: 'Visão geral',
                },
                'desenvolvimento-web/nextjs/introducao-nextjs',
              ],
            },
          ],
        },
        // Modelagem de Dados e SQL        
        {
          label: 'Modelagem de Dados e SQL',
          collapsed: true,
          items: [
            {
              slug: 'modelagem-dados-sql',
              label: 'Visão geral',
            },
          ],
        },
        // Domain-Driven Design
        {
          label: 'Domain-Driven Design',
          collapsed: true,
          items: [
            {
              slug: 'domain-driven-design',
              label: 'Visão geral',
            },
          ],
        },
      ],
    }),
  ],
});
