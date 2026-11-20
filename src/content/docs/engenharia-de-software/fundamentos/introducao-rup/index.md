---
title: Introdução ao RUP
description: Conheça o Rational Unified Process, suas fases, disciplinas e características como processo de desenvolvimento de software.
sidebar:
  order: 40
  label: Introdução ao RUP
---
## Origem e Diferença entre RUP e UP

O Rational Unified Process, ou RUP, foi criado junto com a UML pelos mesmos três criadores da linguagem de modelagem - Grady Booch, James Rumbaugh e Ivar Jacobson. Eles não se deram por satisfeitos em criar apenas uma notação e desenvolveram um processo para ser utilizado em conjunto com ela. O nome deriva da empresa que eles fundaram, a Rational Software. Essa empresa cresceu, fez muito sucesso com a adoção do RUP e da UML pelo mercado, e acabou sendo comprada pela IBM, que incorporou todos os ativos intelectuais ao seu ecossistema. Hoje, a IBM possui um conjunto de ferramentas de modelagem que inclui o Rational Rose.

O Unified Process (UP) é o framework de processo genérico e teórico. O RUP é uma implementação comercial e detalhada do UP, criada pela Rational (hoje IBM), que prescreve o uso de suas ferramentas específicas. O UP pode ser praticado de forma independente, permitindo a adoção de suas práticas com ferramentas alternativas gratuitas ou open source, sem a necessidade de adquirir o pacote comercial do RUP. 

Ambos os processos são iguais em sua essência, divergindo apenas na exigência das ferramentas comerciais.

## Fases e Iterações do Processo Unificado

O processo unificado apresenta quatro fases principais: iniciação ou concepção, elaboração, construção e transição. Cada uma dessas fases é dividida em iterações. A quantidade de iterações não é fixa e varia conforme o tamanho e a necessidade do projeto. Um projeto grande pode ter várias iterações na elaboração e dezenas na construção.

Ao longo dessas fases e iterações, o esforço dedicado a cada disciplina varia. Na modelagem de negócio, há uma grande quantidade de horas na fase de iniciação, que começa a cair nas iterações seguintes e praticamente zera na construção. O levantamento de requisitos exige um esforço grande na elaboração, mantendo apenas algumas horas de revisão na construção até ser finalizado. A implementação, que equivale à construção, começa de forma tímida na iniciação, ganha prototipagem e alguns casos de uso na elaboração, e atinge seu pico de horas na fase de construção. Além disso, a cada iteração ocorrem ondas de teste, cujo pico coincide com o meio de cada iteração.

## Comparação com o Modelo em Cascata e o Mercado de Trabalho


Uma diferença fundamental entre o processo em cascata e o processo unificado é a forma de entrega. Enquanto no cascata o software só fica pronto no final do projeto, o RUP é iterativo e incremental. Isso significa que, ao longo das iterações (especialmente nas fases de Construção e Transição), o RUP gera versões executáveis do software, permitindo entregas parciais e uso do sistema muito antes do encerramento total do projeto.

Por outro lado, há uma característica de antagonismo que quebra essa semelhança. O processo em cascata funciona como uma caixa preta: faz-se o levantamento de requisitos e a equipe de desenvolvimento não dá mais satisfação até entregar o software pronto no final. No RUP, o levantamento de requisitos é contínuo e, a cada iteração, é feita uma revisão do que foi construído. O cliente participa, corrige desvios de rota e está presente no processo de desenvolvimento.

O engenheiro de software precisa estar preparado para atuar com diferentes tipos de projetos e processos. Mesmo que o mercado atual utilize muito os métodos ágeis, a carreira dá voltas. É possível que o profissional acabe trabalhando em uma licitação de um órgão como o Serpro, que exija o uso do processo em cascata. Conhecer esses diferentes modelos garante que o profissional não enfrente dificuldades e saiba exatamente do que se trata.

## A Fase de Concepção e o Plano de Comunicação

Na fase de concepção, devido à forte participação do usuário final no projeto, é necessário criar um bom plano de comunicação. Esse plano consiste em combinados sobre como dar notícias e satisfações ao usuário em um formato padrão, acessível e fácil de digerir. Esse é um ponto chave do RUP com o qual o desenvolvimento em cascata não se preocupa.

É um erro pegar um diagrama técnico da UML, como um diagrama de classes ou de casos de uso, e mostrar para um usuário leigo, como um advogado ou um médico, pedindo que ele assine aprovando. A analogia é simples: a maioria das pessoas leigas não consegue olhar para uma chapa de raio-x e entender se o paciente está doente ou não. Da mesma forma, um leigo não entenderá um diagrama técnico.

O plano de comunicação transforma informações técnicas em apresentações fáceis de entender. Uma das melhores técnicas para isso é o uso de protótipos de tela. As telas criam uma fronteira clara que o usuário final compreende facilmente, pois o objetivo dele é usar exatamente aquelas telas. Quanto mais cedo as telas forem mostradas e explicadas, mais rápido o usuário final é trazido para dentro do projeto.

Outra atividade importante na concepção é o planejamento, que envolve equilibrar três variáveis antagônicas: custo, tempo e qualidade. É muito difícil obter alta qualidade com baixo custo ou em um tempo muito curto. O planejamento busca encontrar um tempo, uma qualidade e um custo compatíveis para o projeto. Além disso, os requisitos fundamentais começam a ser descritos utilizando diagramas de casos de uso, que apresentam as funcionalidades de forma macro, sem detalhamento, ajudando a identificar o escopo do projeto. O escopo é o que foi combinado para ser entregue, funcionando como um contrato que serve de base para o planejamento. Também é elaborado um rascunho da arquitetura do sistema, definindo as tecnologias que serão utilizadas.

## A Fase de Elaboração e a Importância da Modelagem

O planejamento escorrega para a fase de elaboração, onde ocorre a modelagem pesada do sistema. A modelagem é uma fase de estudo, pesquisa e aprofundamento do conhecimento. Muitas vezes, a equipe de desenvolvimento não conhece o negócio tão bem quanto os usuários finais.

Um exemplo prático é o desenvolvimento de um sistema para uma fábrica de embalagens plásticas, como a Tupperware. O problema a ser resolvido era organizar produtos de tamanhos diferentes dentro de caixas de papelão da maneira mais otimizada possível. Como as caixas eram compradas de fornecedores diferentes e possuíam tamanhos variados, o cálculo não era uma divisão linear simples. O software precisava calcular automaticamente a distribuição dos produtos pelo volume completo da caixa, dependendo do fornecedor. Nesse caso, a modelagem foi baseada em matemática básica.

Outro exemplo seria desenvolver um software para acompanhamento de processos judiciais em um escritório de advocacia. Como a equipe de desenvolvimento geralmente não entende de direito, é necessário estudar o assunto, entender o que os advogados precisam e utilizar a UML para desenhar o sistema voltado para essa solução.

Na elaboração, os casos de uso preliminares são refinados e expandidos. A representação arquitetural também é detalhada. Os casos de uso são o ponto focal do processo unificado, pois orientam todo o projeto. A partir deles, é possível planejar a construção de dois ou três casos de uso em uma iteração, mais alguns na próxima, e assim por diante. Em volta dos casos de uso, existem as visões lógica, de componentes, física e de processo, que formam os pilares da construção do sistema.

## A Fase de Construção e a Estratégia de Testes

A etapa de construção é um processo incremental de escrever o programa e testá-lo. Não se trata apenas de programar, mas também de realizar verificações. A base do modelo arquitetural e os componentes são desenvolvidos ou adquiridos, como no caso de precisar comprar uma biblioteca especializada para leitura de código de barras.

Nesta fase, os testes unitários devem ser planejados e executados. É fundamental dominar o conceito de testes para não cometer erros de processo. Um exemplo de erro comum no mercado é configurar a esteira de implantação, utilizando ferramentas como o Jenkins, para rodar todos os testes unitários do sistema no exato momento de colocar o código em produção. Se os testes levam quase uma hora para rodar, a implantação demora todo esse tempo. Pior ainda, se um erro for encontrado durante esse processo, a implantação é abortada e o código volta para o desenvolvedor, desperdiçando tempo.

Essa prática de tentar fazer todos os testes na hora de colocar em produção é um antipadrão conhecido como Big Bang. O modelo correto é ter um ramo da aplicação, como um ambiente de pré-produção, onde os testes pesados e regressivos rodam diariamente, geralmente de madrugada. No dia seguinte, a equipe avalia o relatório gerado. Se houver bugs, eles são corrigidos. Quando chega o momento de implantar em produção, basta apertar um botão e o processo leva poucos minutos, pois o software já foi exaustivamente testado e possui qualidade comprovada.

Existem diferentes tipos de testes. O teste de caixa branca permite enxergar o código, funcionando como uma depuração passo a passo. Já o teste de caixa preta não considera o código ou a arquitetura, focando apenas na interface com o usuário e nas funcionalidades.

## A Fase de Transição e a Implantação

A fase de transição é o momento de colocar a aplicação em ambiente de produção e realizar os testes finais. É comum utilizar os termos versão alfa e versão beta, que ocorrem do início para o meio desta fase. O incremento de software é entregue aos usuários finais para que testem e enviem relatórios de feedback sobre defeitos.

Essa transição é crucial para evitar a famosa frase da área de desenvolvimento que diz que na minha máquina funciona. O software precisa ser testado e validado nas máquinas definitivas.

Para dar suporte aos usuários, estrutura-se uma base de conhecimento, como perguntas frequentes ou um serviço de atendimento. Sistemas grandes precisam de assistência contínua para tirar dúvidas e fazer pequenos ajustes. Na fase de produção, o uso do software é monitorado pela equipe de operações. A transição representa o encerramento do projeto, o momento em que o sistema é entregue definitivamente.

O RUP prescreve a criação de muitos artefatos, como documento de visão, modelo inicial de caso de uso, glossário, caso de negócio e avaliação de risco. A quantidade de itens pode assustar, mas na prática acadêmica e profissional, selecionam-se os elementos mais representativos e importantes para o contexto, permitindo uma transição suave para outros processos de engenharia de software. Não faz sentido construir todos os artefatos se eles não agregarem valor ao conhecimento ou ao projeto.