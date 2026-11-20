---
title: Introdução ao Modelo de Domínio
description: Entenda como representar conceitos, entidades e relacionamentos de um domínio de negócio por meio de modelos conceituais.
sidebar:
  order: 50
  label: Introdução ao Modelo de Domínio
---
## O Conceito de Domínio

O ponto-chave aqui é a palavra domínio, que também pode ser entendido como contexto. É o ramo de negócio da empresa para o qual você está procurando desenvolver um software para resolver problemas. Quando falamos de um escritório de advocacia, estamos falando de um domínio. O uma startup de recursos humanos, é um domínio diferente. Empresas ligadas a hospitais representam um terceiro domínio.

A própria faculdade pode possuir dentro dele dois domínios diferentes: o domínio de ensino superior e o domínio de ensino técnico de extensão. Eles podem até ser tratados como um domínio só, mas possuem regras de negócio e características diferentes. Fazer um curso de graduação é uma coisa, e fazer um curso de extensão de Java é outra totalmente diferente pela própria natureza e propósito de cada curso. Portanto, quando falamos de modelo de domínio, estamos explorando características de dados daquele contexto de negócio que nos propusemos a trabalhar e automatizar.

## O que é o Modelo de Domínio

O modelo de domínio é importantíssimo e representa o primeiro passo para podermos fazer um bom trabalho de Engenharia de Software. Ele é uma representação visual de classes conceituais ou objetos de situação real em um domínio. Esses modelos também são chamados de modelos conceituais, modelos de objetos de domínio e modelos de objetos de análise.

Estamos falando de conceitos e ideias. A modelagem serve para tornar claro o objetivo do projeto, organizar, planejar, direcionar e entender o que está sendo desenhado. O modelo de domínio significa uma representação de classes conceituais e de situações reais, não de objetos de software. É preciso ter muita atenção a esse ponto. O modelo de domínio exclui banco de dados, telas e serviços, como os microserviços. Ele é composto apenas por classes conceituais.

## A Técnica de Ivar Jacobson e a UML

Para facilitar o entendimento e trazer técnica para o nosso trabalho, recorro a Ivar Jacobson, um dos criadores da UML. Ele teve a ideia de que as classes de um software podem ser divididas em três categorias: classes de fronteira, classes de entidade e classes de controle.

As classes de fronteira são aquelas que interagem com o usuário, estando na fronteira do software, como botões, checkboxes e telas. As classes de entidade são as estruturas de dados que representam o domínio, como cliente, pedido, item de pedido, produto, aluno, professor, turma e disciplina. Já as classes de controle representam processos e elementos dinâmicos, como datas e tempos, operações de banco de dados, gerenciamento de impressão, leitura e gravação de arquivos, ou seja, serviços em geral.

## Foco nas Classes de Entidade


Para fazer um modelo de domínio, devemos esquecer as classes de fronteira e de controle. O foco total deve estar nas classes de entidade, retirando qualquer objeto de software. As classes de fronteira e de controle entram no escopo e no detalhe do software em si. Com as classes de entidade, mantemo-nos afastados do software e da plataforma.

Não precisa saber se a plataforma é Java, C# ou Python. As entidades são genéricas e funcionam em qualquer plataforma. As classes de controle são atreladas à plataforma de desenvolvimento. Existe a classe de data do Java, a do C# e a do Python. Por outro lado, o conceito de um pedido será basicamente a mesma classe em Java, .NET, JavaScript ou Ruby. Eles serão codificados de maneira diferente por serem linguagens distintas, mas o conceito é o mesmo.

As classes de entidade conhecem mais do que fazem, possuindo estrutura de dados e praticamente nenhum serviço. As classes de controle fazem mais do que sabem, possuindo muitos serviços e praticamente nenhum dado.

## Identificação de Classes e Abstração

As classes de um sistema podem ser identificadas a partir de um diagrama de caso de uso e suas descrições, listando todas as entidades encontradas e verificando se não existem relações de sinônimos entre elas. Essa é uma abordagem inicial mais simples, mas que pode ser bastante limitada. Para o sue projeto de software, apenas isso não servirá, pois em geral, ele possui um modelo de entidades um pouco mais complicado para que a prática da modelagem seja exercitada.

É fundamental focar no conceito do mundo real e evitar a visualização de classes de software. Por exemplo, deve-se evitar modelar um banco de dados de vendas ou uma classe de data e hora que possua um método de impressão. Ao adicionar um método de impressão, a classe deixa de ser um conceito do mundo real e passa a ser um objeto de software. Artefatos de software não fazem parte do modelo de domínio.

A principal ferramenta a ser aplicada nesta etapa do projeto é a abstração. Suponha que estejamos pensando em desenvolver um sistema para uma seguradora: no mundo real, temos notícias, fatos, dados de saúde, dados residenciais, dados sobre veículos e dados financeiros. Se o dono de uma residência quer fazer um seguro de vida, de residência e de veículo, a marca do pneu do veículo dele não interessa para o sistema. A quantidade de janelas da casa ou se ele tomou a vacina da gripe recentemente também não interessam.

A abstração atua como um plano que corta o mundo real, extraindo somente a parte que interessa para aquele domínio de problema e descartando o que não é relevante. Praticar a abstração não é simples, pois exige cuidado para não cortar informações além do que se deve.

## Técnicas para Encontrar Classes de Entidade

O processo envolve encontrar as classes de entidade, desenhá-las no diagrama de classes e adicionar as associações e atributos. O desenho e a adição de atributos são questões de treinamento. O verdadeiro desafio é o primeiro passo: encontrar as classes de entidade. Existem três técnicas para isso.

- A primeira técnica é reutilizar ou modificar modelos que já existem. Em muitos casos, você já tem o sistema rodando em um determinado banco de dados e quer apenas migrar a tecnologia, usando o banco legado como base. No caso de uma startup começando do zero, não temos um modelo pronto para trabalhar em cima.

- A segunda técnica, considerada a mais eficiente e produtiva, é o uso de uma lista de categorias.

- A terceira técnica é identificar frases nos casos de uso que contêm substantivos relevantes. Consiste em ler as descrições e sublinhar os substantivos, como vaga, critério e usuário. O problema dessa técnica é que ela é superficial e muitas vezes não permite enxergar todas as classes do sistema.

## A Lista de Categorias

A técnica da lista de categorias permite entrar em um nível de detalhe maior. Ao olhar para o sistema, identificamos transações de negócio, como venda, pagamentos, reserva aérea, matrícula, publicar vaga e responder vaga. Em um segundo nível de detalhe, essas transações possuem itens de linha de transação. Por exemplo, o critério é um item da vaga, assim como o assento e a refeição são itens de um voo.

A lista também abrange o local onde a transação é registrada, como uma nota fiscal, um ticket de embarque ou uma pauta de chamada. Outra categoria envolve os papéis de pessoas e organizações relacionadas à transação, que são os atores dos casos de uso, como o caixa, o cliente e o passageiro. É preciso avaliar quais atores do sistema precisam ter seus dados registrados no banco de dados. Atores como o tempo, que disparam casos de uso, não precisam ser armazenados em tabelas.

A lista de categorias inclui ainda locais da transação, eventos notáveis, objetos físicos, catálogos, registros de finanças e contratos. Com o tempo e a prática, essa técnica torna-se natural e bastante profissional.

## Aplicação no Projeto de Startup de Recursos Humanos

Aplicando a técnica aos casos de uso da startup de recursos humanos, podemos analisar alguns exemplos. Se o usuário cria uma conta, temos os substantivos usuário e conta, que talvez sejam sinônimos. Quando a empresa publica uma vaga, temos o usuário empresa que fez o login, a vaga e os critérios da vaga. Desse caso de uso, extraímos o nível de detalhe do item da vaga, que são os critérios. Ao consultar o ranking de candidatos, surgem as classes empresa, vaga e usuário.

O desenvolvimento de software possui flexibilidade e cada pessoa pode ter uma ideia diferente de como cumprir os requisitos. Alguns podem entender que existem as classes empresa e candidato separadamente. Outros podem definir que existe a classe usuário com herança para empresa e candidato. Há também a possibilidade de modelar a classe perfil, separando o perfil de empresa e o perfil de candidato. A beleza da Engenharia de Software é que existem vários caminhos que levam à solução do mesmo problema.

