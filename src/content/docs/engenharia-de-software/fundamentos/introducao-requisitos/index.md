---
title: Introdução à Engenharia de Requisitos
description: Aprenda os fundamentos da Engenharia de Requisitos, incluindo requisitos funcionais, não funcionais, documentação e priorização.
sidebar:
  order: 20
  label: Introdução à Engenharia de Requisitos
---
Vamos falar dos requisitos, abordando primeiro a teoria e depois a prática. A teoria é um ponto importante. O que são os requisitos? Neste momento, já começamos a pensar na modelagem do sistema. Os requisitos expressam as características e restrições do produto de software do ponto de vista da satisfação das necessidades do usuário.

O usuário tem um problema para resolver ou algo que pode melhorar na vida dele. O que você vai fazer é escrever um software para melhorar a vida do usuário, da empresa ou daquele cliente.

## A Relação entre Requisitos e Tecnologia

Os requisitos não têm nada a ver com tecnologia diretamente. Isso é discutível. Esse conceito vem de um livro de engenharia de software, mas deixei algumas coisas que são abertas à discussão. Por exemplo, os requisitos independem da tecnologia? Pode ser que sim, pode ser que não. Existem requisitos médicos que envolvem o avanço da farmacologia, da fisioterapia ou da robótica. Não é tão simples assim. Pode ser que um determinado requisito force o uso de determinada tecnologia.

De uma forma geral, estamos falando de software. Se começarmos a pensar em hardware, pode ser que os requisitos não sejam tão independentes de tecnologia assim.

## A Complexidade do Levantamento de Requisitos

O levantamento de requisitos é a parte mais crítica e propensa a erros no desenvolvimento de software. Por que isso acontece? Primeiro, porque são ideias, e ideias vêm da cabeça das pessoas. O ser humano um dia está feliz, outro dia está triste, deprimido ou exultante. Naquele dia específico em que você entrevistou a pessoa, pode ser que não tenha saído coisa boa.

Por isso, é necessário revisar, validar e confrontar. O confronto às vezes exige perguntar para uma pessoa e depois para outra. Não é o que ela acha, é como o negócio realmente é. Por exemplo, como funciona um hotel? O funcionário da portaria diz que funciona de um jeito. Você pergunta para a camareira e ela vai dar outro ponto de vista que complementa o que o porteiro falou. Você pergunta para o cozinheiro e assim por diante. Dessa forma, você vai construindo um panorama, uma visão geral do que é o software.

## O Projeto de Bloco e a Prática de Requisitos



A primeira pegadinha que precisa ser conversada com vocês é a seguinte: eu vou passar um documento de visão e alguns requisitos. O termo é exatamente este, alguns requisitos. Isso significa que nem tudo está claramente definido ou apresentado.

O que eu espero de vocês? Espero que leiam, interpretem, reflitam, montem uma lista de requisitos como exercício prático e perguntem. Haverá coisas que, para construir, vocês terão que perguntar. Propositalmente, alguns detalhes foram omitidos para permitir que vocês pratiquem a busca pela total clareza dos requisitos.

E se alguém passar o projeto de bloco inteiro sem perguntar nada? Pode acontecer, já aconteceu com muitos alunos. Eu vou avaliar o programa e o assessment. O programa pode estar legal e cumprindo as rubricas, mas não funciona direito porque nem todos os requisitos foram cumpridos. Isso não é um problema. O objetivo final do projeto de bloco não é ter um sistema completo funcionando. Fiquem tranquilos em relação a isso. O objetivo é ter um protótipo do que seria um sistema mais completo.

Por que isso é assim? Porque não dá tempo. Propositalmente, o sistema é maior do que o tempo que vocês têm disponível. Vocês terão que fazer escolhas e decidir o que vão implementar.

## Requisitos Funcionais e Não Funcionais

Nós dividimos os requisitos em funcionais e não funcionais. É fácil separar os grupos.

Os requisitos funcionais são aqueles relacionados ao comportamento do sistema, aquilo que o usuário espera que o sistema faça. São as tarefas que o sistema deverá ter para atender às necessidades dos usuários, as funcionalidades presentes no sistema. Uma dica para definir o requisito funcional é utilizar a frase o sistema deve ou o sistema deverá e complementar. Por exemplo, o sistema deve realizar o cadastramento de funcionários, o sistema deve excluir funcionários, o sistema deve criar ficha de aluno. Essa é uma maneira de registrar e estabelecer os requisitos funcionais.

Os requisitos não funcionais são fáceis de identificar porque representam qualidades e adjetivos. O sistema é rápido, fácil de usar, seguro, bonito. São características qualitativas. São coisas que o sistema tem, mas que outros sistemas também podem ter. É interessante pensar em alguns requisitos não funcionais para este projeto de bloco. Por exemplo, eu já coloquei os requisitos não funcionais de que o sistema tem que ter um módulo web e microsserviços. Um outro sistema qualquer, que não tenha nada a ver com este, também pode ter um módulo web e microsserviços. É uma característica de qualidade.

Alguns exemplos de requisitos não funcionais incluem a regra de que a base de dados deve ser protegida para acesso apenas por usuários autorizados, ou que o tempo de resposta não deve ultrapassar trinta segundos. É importante poder medir isso. Outros exemplos seriam que o software deve rodar no sistema Linux ou que o tempo de desenvolvimento não deve ultrapassar seis meses. Nós temos um requisito não funcional semelhante a este último no nosso projeto, mas eu não vou impor prazos irreais porque não quero o sistema inteiro funcionando, apenas um pedaço dele. Teremos tempo suficiente para fazer uma boa parte do sistema.

## Características de um Bom Requisito

Existem sete características que definem um bom requisito. É importante olhar para a lista de requisitos que vocês vão fazer e poder classificá-los.

O requisito tem que ser completo. Você lê e entende. Não precisa de figuras para explicar, não existem explicações adicionais, nuances ou detalhes extras. Ele está completo, fácil de ler e entender.

O requisito deve ser correto. Só o usuário pode dizer se o requisito está correto. Existe a figura do analista sabe-tudo, que é um problema. Ele acha que sabe mais do que a pessoa que está contratando o software. As pessoas estão colocando seus requisitos e o analista tenta adivinhar o que o cliente está pensando, inventando coisas da própria cabeça. O requisito só está correto do ponto de vista do usuário final. Portanto, precisa ser validado. Depois de fazer a lista, é necessário fazer uma reunião com o cliente, expor os pontos, relembrar as perguntas feitas e as respostas dadas, mostrando as ligações entre as ideias. Não é o analista ou o programador que vai dizer se está correto ou não.

Outro item importantíssimo é a viabilidade. Às vezes, o usuário coloca necessidades que são muito caras e o orçamento não permite a construção, ou não existe tecnologia suficiente para aquilo. Um exemplo simples: desde que aprendi a programar para Android, tenho o sonho de apontar a câmera do celular para um prato de comida e o software dizer quantas calorias ele tem. É uma ideia legal, mas ainda não há tecnologia disponível para fazer isso hoje. Pode ser que no futuro desenvolvamos aprendizado de máquina ou tecnologia de leitura óptica para isso, mas até agora não existe. Precisamos perguntar se o requisito tem viabilidade técnica ou financeira e levar essa questão para o usuário final.

O requisito deve ser necessário. Às vezes, o usuário se apega a uma ideia e quer algo que não é necessário para o sistema funcionar. É preciso fazer essa classificação para separar o que é essencial do que é apenas desejável.

O requisito precisa ser priorizado. É necessário definir o que será feito primeiro e estabelecer a ordem das coisas.

O requisito não pode ser conflitante com outro requisito e não pode ser ambíguo. Por exemplo, dizer que o sistema tem que ser rápido demais não funciona, pois como você mede isso? É preciso ter uma referência. Dizer que uma tela tem que ser inicializada em cinco segundos é um requisito não ambíguo. Ele tem um valor absoluto.

Na mesma linha de não ser ambíguo, o requisito tem que ser verificável. Ao executar testes, precisamos poder dizer se a entrega do requisito foi cumprida ou não.

## O Processo de Registro e Organização

Antigamente, usávamos fichas físicas. Eu sou da época em que íamos à papelaria, comprávamos um maço de fichas de cartão, espalhávamos em cima da mesa, anotávamos os requisitos e os organizávamos. No final, tínhamos o sistema todo na forma de fichas. Hoje em dia não se faz mais isso. Hoje você abre um ticket, usa cartões do Trello ou cria uma planilha. Não vamos fazer nada manual, quanto mais eletrônico, melhor.

Em uma reunião de levantamento de requisitos, é necessário obter o máximo de informações possíveis e registrar tudo. As reuniões costumam ser gravadas. Você gera o arquivo de áudio da reunião e guarda em um sistema de arquivos na nuvem. Esse áudio é transcrito na forma de uma lista de requisitos, e você os organiza conforme as reuniões feitas com os clientes.

O requisito possui três itens principais. Ele tem um identificador para podermos recuperá-lo posteriormente, uma descrição detalhada do que ele faz, e uma prioridade.

## Priorização de Requisitos

A prioridade se divide em três níveis.

O nível essencial é o requisito sem o qual o sistema não entra em funcionamento. Ele tem que ser implementado, senão o sistema perde sua função principal. Um caixa eletrônico sem a função de saque não é útil. O que caracteriza o caixa eletrônico é a consulta de saldo e o saque. Portanto, esses dois requisitos são essenciais.

O nível importante refere-se a requisitos que permitem ao sistema entrar em funcionamento, mas não de forma totalmente satisfatória se faltarem. O caixa eletrônico tem a função de depósito. O depósito é importante, mas não essencial. Um caixa eletrônico sem depósito cumpre seu papel básico, mas se você precisar fazer um depósito e tiver que ir ao banco, a experiência é ruim.

O nível desejável engloba os requisitos que não comprometem a funcionalidade básica do sistema. O software funciona de forma satisfatória sem eles, então podemos deixá-los para versões posteriores.

Essa parte de priorização é importantíssima para descobrirmos o que será possível implementar durante o projeto de bloco. Eu não vou influenciar vocês diretamente dizendo o que é essencial, importante ou desejável. Cada um fará o trabalho do seu jeito. Entretanto, o projeto que vou propor terá dois casos de uso que formam o coração do sistema. Esses dois casos de uso são absolutamente essenciais, e os requisitos que os alimentam também são. Sem eles, o sistema não é considerado entregue.

## Exemplos Práticos: Sistema de Imobiliária



Eu gosto de ilustrar a teoria com a prática, trazendo bons exemplos para que vocês fiquem seguros do que estão fazendo. Vamos ver o registro de um sistema de imobiliária.

Nele, temos requisitos não funcionais. Um exemplo: o sistema deverá ter uma interface amigável ao usuário iniciante, sem tornar-se cansativa aos usuários mais experientes. Por que esse requisito não funcional é importante? Porque uma imobiliária tem uma alta rotatividade de corretores. A imobiliária quer contratar um corretor e que ele aprenda rapidamente a usar o sistema. A prioridade desse requisito é importante.

O que determina a ordem dos requisitos é a ordem em que o assunto apareceu na reunião. O ideal é que seja cronológica. Conforme a pessoa fala, você registra. Isso permite voltar atrás e mostrar as ligações entre as ideias que o cliente apresentou. A identificação serve basicamente para garantir a rastreabilidade e a identificação única do requisito, permitindo que ele seja referenciado de forma clara em testes, modelagens e futuras alterações do sistema.

Outro exemplo de requisito não funcional: o sistema deverá funcionar em qualquer sistema operacional que use um navegador web. Isso é essencial, o sistema tem que ser web.

## O Padrão Manter em Requisitos Funcionais


Agora vamos aos requisitos funcionais. Em um sistema, pode aparecer o requisito funcional com o nome manter corretor. Vamos fazer um combinado: toda vez que você vir a palavra manter, vai lembrar de cadastro. O que é um cadastro? Inclusão, exclusão, alteração e consulta. No idioma de análise de sistemas, resumimos essas quatro ações através da palavra manter. Esse é um truque que muitos analistas utilizam e que vocês encontrarão no mercado de trabalho.

No exemplo de manter corretor, o usuário entrará com os dados do corretor para cadastrá-lo no sistema, podendo também alterar, excluir e consultar seus dados. Como é um sistema de imobiliária, manter o corretor é essencial. Depois temos manter cliente, manter a ficha de atendimento ao cliente, manter construtora e manter empreendimento.

## Requisitos no Contexto do RUP (Rational Unified Process)

Uma questão importante é se precisamos de todos os requisitos definidos para iniciar o RUP. O RUP é dividido em quatro fases: concepção, elaboração, construção e transição.

Neste trimestre, faremos as fases de concepção e elaboração. Na fase de concepção, começamos a ter uma visão geral do sistema e a fazer o levantamento de requisitos. Não teremos todos os requisitos logo na fase de concepção. Teremos uma lista com certa substância, mas que não estará completa. A lista de requisitos só fica completa no final da fase de elaboração, quando se tem uma visão de modelagem bem completa do sistema. A lista começa com alguns requisitos e vai crescendo de forma incremental conforme nos aprofundamos no estudo.

A fase de concepção é muito curta. Faremos uma fase de concepção de duas semanas, no máximo. Não dá tempo de pegar todos os requisitos, mas é possível ter uma visão geral. Para ilustrar, neste projeto, há alunos que conseguem identificar de dez a quinze requisitos funcionais na fase de concepção. No final da fase de elaboração, esses quinze viram vinte. O processo vai afinando, aprimorando e incrementando os requisitos ao longo do tempo.