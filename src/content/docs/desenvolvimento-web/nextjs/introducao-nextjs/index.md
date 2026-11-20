---
title: Introdução ao Next.js
description: Conheça os fundamentos do Next.js.
sidebar:
  order: 10
  label: Introdução ao Next.js
---
O React possui uma base instalada gigantesca e é uma plataforma de desenvolvimento muito conhecida e utilizada. No entanto, ele apresenta algumas limitações, e a ideia do Next.js é justamente superar esses gargalos, trazendo tudo o que o React tem a oferecer e expandindo suas capacidades.

O principal dilema do React puro é a questão da Single Page Application executada no client-side. O servidor entrega apenas um HTML vazio, que funciona como um esqueleto estrutural para ser usado pelo JavaScript. Quando esse pacote chega ao navegador, o JavaScript é executado sobre esse esqueleto HTML, e só então ocorre a renderização. O JSX é transformado, gerando o HTML e produzindo a estrutura dos componentes visuais.

Isso gera problemas de SEO, pois os motores de busca são penalizados ao encontrar apenas uma página em branco, sem uma organização textual que permita a indexação. Outro problema é a performance inicial. Embora o carregamento se beneficie de Content Delivery Networks, a primeira apresentação da página pode ficar comprometida pelo tempo necessário para processar a renderização no navegador.

Para resolver isso, a Vercel, empresa que tem a infraestrutura da AWS por trás, criou o Next.js. Ele é um framework open source que utiliza a biblioteca React e adiciona características de pré-renderização. O Next.js permite que a tela seja renderizada no servidor, enviando para o navegador um HTML já preenchido.




A partir desse HTML pronto, entra o conceito de hidratação para tornar a página interativa. AA partir desse HTML pronto, entra o conceito de hidratação para tornar a página interativa. A hidratação ocorre quando o React assume o controle do HTML estático enviado pelo servidor, anexando os eventos e os estados aos componentes. É como se o componente estivesse desidratado (apenas visual). Quando o JavaScript é carregado e executado, ele ganha vida. Após a hidratação, podemos usar hooks como o useEffect para buscar dados adicionais.





Um exemplo prático de busca de dados no cliente é a criação de dois selects, um para Unidade da Federação e outro para município. Após a página ser hidratada e estar interativa, o componente usa o useEffect para buscar os dados no IBGE em formato JSON e utiliza a função map para preencher o primeiro select. Quando o usuário interage e escolhe o Rio de Janeiro, o evento onChange dispara uma nova busca, trazendo os municípios e preenchendo o segundo select. Vale ressaltar que componentes estáticos, como um menu de navegação simples, são hidratados para receber interatividade, mas não precisam buscar dados externos.

## React como Biblioteca versus Frameworks

O Next.js se tornou um concorrente de peso porque traz muitas adições e extensões, fazendo com que muitos desenvolvedores prefiram trabalhar com um framework completo. Em termos técnicos puros, o React é uma biblioteca, não um framework.

Certa vez, ao ministrar uma disciplina de graduação chamada Front-end com Frameworks, eu estava ensinando React. Um aluno questionou, com toda a razão, o motivo de estarmos estudando uma biblioteca em uma disciplina sobre frameworks. A explicação é que, muitas vezes, esses nomes são dados por questões de marketing. Tecnicamente, no React, a biblioteca fica inerte e o desenvolvedor precisa controlar tudo, escrever todos os fluxos de execução e decidir quando e onde chamar as funcionalidades.

Já um framework, como o Gatsby ou o Next.js, fornece um conjunto de ferramentas onde você posiciona o componente em um diretório específico e ele automaticamente recebe funcionalidades. No Gatsby, bastava colocar um arquivo JavaScript dentro da pasta pages para que a URL fosse gerada automaticamente. O framework também associava consultas GraphQL diretamente às propriedades do componente sem intervenção manual. O framework é encarregado dos fluxos e fornece os lugares onde você encaixa o seu código.

O React, atualmente, já possui maturidade para se tornar um framework e concorrer diretamente com o Next.js, mas essa é uma decisão técnica e arquitetural dos engenheiros de software que o mantêm. Por enquanto, o React continua sendo uma biblioteca, e o Next.js explora as dificuldades de configuração manual do React, oferecendo uma infraestrutura completa out of the box.

## Ecossistema e Ferramentas do Next.js

O Next.js possui uma empresa forte dando suporte e criando recursos prontos para uso. Ele oferece geração estática, renderização incremental, renderização no servidor e suporte nativo ao TypeScript sem necessidade de configurações complexas. Nesta disciplina, optaremos por usar o JavaScript puro para não aumentar a curva de aprendizado com o JSX, deixando o TypeScript para um momento futuro da formação.

O framework oferece grande flexibilidade na escolha do ambiente de execução, transitando entre o navegador e o servidor. No React puro, a execução é exclusiva no cliente, dependendo do Document Object Model e de tags HTML. O Next.js busca ser universal. Ao usar a pré-renderização, o processamento ocorre no servidor Node.js, utilizando suas APIs.

Isso permite o Server-Side Rendering, que funciona de maneira muito parecida com linguagens clássicas como PHP, ASP e JSP. O usuário faz uma requisição, o servidor processa e devolve o HTML pronto. A grande vantagem é poder programar com componentes React, mas aproveitando a robustez do processamento no servidor que já conhecemos há muito tempo.

O Next.js se destaca no ecossistema Jamstack, unindo JavaScript, APIs e marcação pré-construída. Ele orquestra a velocidade dos sites estáticos distribuídos via CDN com o poder das aplicações dinâmicas, permitindo até mesmo a criação de APIs dentro do próprio framework. Comparado a outras opções de mercado como Gatsby, Nuxt e Angular, o Next.js oferece flexibilidade absoluta sem a necessidade de instalar dezenas de plugins, já trazendo recursos nativos, como otimização de imagens, que no Gatsby exigiam configurações adicionais.

## Material de Apoio e Dicas de Estudo

Na plataforma Infnet Online, vocês encontram diversos recursos, como aulas gravadas, slides, códigos e trilhas de aprendizagem com capítulos de livros. Alguns desses materiais estão em inglês. É fundamental não deixar que o idioma seja uma barreira. O uso de ferramentas como o tradutor do Chrome é perfeitamente válido. O importante é consumir o conteúdo, traduzir para o português quando necessário e complementar o que é visto em aula.

## Prática Inicial e Criação do Projeto

Para iniciar um projeto, utilizamos o gerenciador de pacotes NPM e o comando NPX. É recomendável atualizar o Node.js para a versão LTS mais recente, garantindo suporte de longo prazo. O comando utilizado é o create-next-app, que gera a aplicação baseada em um template fornecido pela própria Vercel, dispensando configurações iniciais.

Ao abrir o projeto gerado, observamos pastas especiais. A filosofia principal do framework é a convenção sobre configuração. A pasta pages é o coração da navegação. Qualquer arquivo JavaScript colocado ali torna-se automaticamente uma rota pública. A pasta public armazena ativos estáticos absolutos, como favicon, imagens e fontes. Há também uma pasta específica para estilos CSS globais e o arquivo de configuração central do framework.

## Roteamento e Divisão de Código

O roteamento automático elimina a necessidade de bibliotecas complexas de navegação, como o React Router. Um arquivo chamado index na pasta pages responde pela raiz do site, enquanto um arquivo chamado sobre responde pela rota correspondente. A navegação entre páginas é feita através do componente Link integrado ao framework.

A navegação do lado do cliente com o Next.js é extremamente rápida porque o framework realiza a divisão de código automaticamente, criando chunks. Diferente de uma Single Page Application tradicional em React, onde todas as páginas são carregadas em um único pacote gigante, o Next.js carrega apenas o código necessário para a página atual.

Quando o componente Link aparece na janela de visualização do navegador, o Next.js faz uma pré-busca automática do código da página de destino em segundo plano. Assim, ao clicar no link, a transição é quase instantânea. Essa otimização de performance é refletida positivamente em ferramentas de análise como o Lighthouse.

## Criação de Layout e Estilos Globais

Para manter a consistência visual, criamos uma pasta de componentes e dentro dela um arquivo de layout. Esse componente recebe as propriedades da página, especificamente a propriedade children, que representa o conteúdo central. O layout define a estrutura padrão, como cabeçalho e menu de navegação, e envolve o conteúdo dinâmico de cada página.

Para aplicar estilos globais sem precisar importá-los em cada arquivo individualmente, o Next.js utiliza um arquivo especial chamado \_app.js dentro da pasta pages. Esse arquivo funciona como um ponto de entrada e um template principal para todas as páginas. Ele recebe os componentes e as propriedades da página, aplica os estilos globais e renderiza o conteúdo, simplificando muito a manutenção do código.

## Estratégias de Renderização

O Next.js não obriga o desenvolvedor a escolher um único modelo de renderização para todo o projeto. Ele possui uma arquitetura modular onde cada página pode adotar uma estratégia diferente. As quatro principais estratégias são Server-Side Rendering, Static Site Generation, Client-Side Rendering e Incremental Static Regeneration.

O Server-Side Rendering gera o HTML dinamicamente no servidor a cada requisição do usuário. O servidor Node.js busca os dados em uma API ou banco de dados e devolve a página pronta. A vantagem é a segurança, pois as APIs privadas não são expostas ao cliente, além de um excelente SEO. A desvantagem é a latência de rede e o aumento do custo de infraestrutura, pois exige processamento constante do servidor. Um caso de uso ideal seria um sistema de fila de restaurante, onde a posição do cliente muda constantemente e a informação precisa ser atualizada a cada requisição.

O Static Site Generation gera o HTML apenas uma vez, no momento do build da aplicação. A performance é insuperável, pois não há latência de processamento, apenas a entrega de um arquivo estático. No entanto, não serve para dados altamente dinâmicos. O caso de uso ideal é um catálogo de produtos que muda com baixa frequência. As atualizações são feitas no repositório, disparando um novo build que substitui os arquivos estáticos.

O Client-Side Rendering é o comportamento padrão do React. O servidor envia apenas uma div raiz e o JavaScript assume o controle total para renderizar a página no navegador. É excelente para transições rápidas e sensação de aplicativo nativo, permitindo técnicas como lazy loading. O custo de servidor é quase zero, mas peca no SEO e pode prejudicar usuários com conexões lentas devido ao peso do JavaScript. É ideal para dashboards e painéis de controle.

O Incremental Static Regeneration é a grande inovação do Next.js. Ele mistura a velocidade do site estático com a atualização do site dinâmico. A página nasce estática, mas o desenvolvedor configura um tempo de revalidação. Durante esse tempo, todos os usuários recebem a versão em cache em velocidade máxima. Quando o tempo expira, o próximo acesso dispara um gatilho em segundo plano que regenera o HTML estático com dados novos. Isso resolve o problema crônico de precisar reconstruir o site inteiro a cada pequena alteração.

## Implementação Prática das Estratégias

Para implementar o Server-Side Rendering, utilizamos uma função reservada chamada getServerSideProps no mesmo arquivo do componente da página. Essa função é executada no servidor, faz um fetch em uma API, converte a resposta para JSON e injeta esses dados nas propriedades do componente React. O componente então utiliza a função map para iterar sobre os dados e gerar o HTML dinâmico.

Para o Static Site Generation, o processo é idêntico, mas utilizamos a função getStaticProps. O framework entende que essa função deve ser executada apenas no momento do build, gerando o HTML definitivo.

Para transformar uma página estática em Incremental Static Regeneration, basta adicionar a propriedade revalidate no retorno da função getStaticProps, informando o tempo em segundos. No ambiente de desenvolvimento local, essas estratégias podem parecer funcionar da mesma forma, reprocessando a cada clique, mas o comportamento real de cache e build é efetivado quando a aplicação é publicada em produção.

Por fim, é importante lembrar que ao gerar elementos HTML dinamicamente através de iterações, o React exige que cada elemento possua uma propriedade key única. Isso é fundamental para o processo de hidratação e para que a biblioteca consiga rastrear e atualizar os componentes corretamente na interface.