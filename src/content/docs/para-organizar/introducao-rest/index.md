---
title: Introdução à API RESTful, HTTP e HTTPS
description: "Descubra os conceitos e fundamentos sobre REST e HTTP"
---
REST é uma arquitetura que consiste em um conjunto de restrições aplicadas a componentes, conectores e elementos de dados. Possui dois pilares principais: a forma como você constrói as funcionalidades e o protocolo HTTP. REST é intimamente ligado ao HTTP e atua como uma abstração da web, cobrindo a infraestrutura atual. Da mesma forma que acessamos uma página digitando um endereço no navegador e recebemos um HTML formatado com imagens, pessoas criativas pensaram que, ao bater em um servidor, ele poderia devolver um streaming de vídeo, áudio ou um JSON. JSON significa JavaScript Object Notation. Se essa string representa um objeto, podemos converter isso em Java, C Sharp ou qualquer outra linguagem, pegando os nomes e conteúdos dos campos. Essa ideia explodiu e virou uma arquitetura. Como tudo é string, podemos recuperar JSON, XML, TXT ou YAML. O que existe hoje é resultado de uma evolução constante. Houve um momento em que o XML era a solução de todos os problemas, mas hoje existem pessoas pensando em como tornar o JSON ainda mais eficiente ou criando novos formatos.

## Evolução da Arquitetura Cliente-Servidor
A arquitetura típica de cliente-servidor nasceu em meados da década de oitenta e teve seu apogeu na década de noventa. Depois, entrou em declínio com a invenção da web e o surgimento de linguagens como Python, PHP, Java e JavaScript. Na arquitetura antiga, típica de aplicações em Delphi ou Visual Basic, a aplicação conectava direto no banco de dados. Era um monólito com alta complexidade, acoplamento rígido, conexões ponto a ponto sem padronização e muitos problemas de segurança. A evolução ocorre quando as aplicações, em vez de conectarem diretamente no banco de dados, passam por uma API. Se essa API seguir o padrão corretamente, ela será uniforme. 

## Características da Arquitetura REST
A arquitetura REST possui características que precisam fazer parte do projeto de software. Primeiro, ela nasce como uma arquitetura cliente-servidor, mas a diferença está em quem é o cliente e quem é o servidor. Você não conecta direto no banco de dados, mas utiliza uma API como servidora, que implementa as conexões e regras de negócio. 

Segundo, ela é Stateless. Das três camadas superiores do modelo OSI, não temos a camada de sessão. Cada requisição tem uma resposta correspondente e o servidor não guarda relacionamento entre requisições diferentes. 

Terceiro, temos o Cacheable, que é a capacidade de fazer cache para ganhar desempenho. Um exemplo prático ocorre na empresa de medicina diagnóstica onde trabalho. Quando a atendente cria o cadastro do paciente, ela digita o CPF. Nossa aplicação bate na Receita Federal para validar se a pessoa está viva e se o CPF é válido. Um CPF suspenso por falta de declaração de imposto de renda não impede a pessoa de fazer um exame médico, embora pudesse ser recusado em um banco. Como a Receita cobra por cada consulta, e chegamos a ter quase mil consultas em uma manhã, nós implementamos um cache. Guardamos a memória dessa consulta por alguns dias, evitando bater na Receita toda hora para o mesmo paciente. 

Quarto, utilizamos o protocolo HTTP, que possui uma interface uniforme e padronizada. 

Quinto, o sistema é construído em camadas. Quando você acessa uma URL, não sabe se o servidor está em São Paulo ou Nova York, nem quantas camadas existem até o banco de dados. Tudo é abstrato para o cliente. 

Por fim, temos o código sob demanda, onde o que está por trás da interface pode ser desenvolvido aos poucos. REST não tem espaço para interpretação pessoal. Se você quer implementar REST, deve seguir as regras arquiteturais definidas, sem inventar modificações.

## Diferença entre REST e RESTful
É comum no ambiente de trabalho alguém corrigir o uso dos termos REST e RESTful, o que pode ser constrangedor. Para evitar isso, é importante saber a diferença. REST é o substantivo, o conjunto de princípios de arquitetura. RESTful é o adjetivo, a qualidade. Sistemas ou aplicativos com a capacidade de aplicar os princípios REST são chamados de RESTful. Você olha para o sistema e diz que ele tem a característica REST, ou seja, ele é RESTful.

## O Protocolo HTTP e suas Camadas
O modelo OSI tem sete camadas. O TCP fica na camada de transporte e o IP na camada de enlace, lá embaixo. O HTTP está na camada de aplicação, que é a que mais nos interessa. O HTTP, ou Hypertext Transfer Protocol, nasceu no ambiente acadêmico para troca de documentos de pesquisa entre cientistas. Com o tempo, passou a ser usado para notícias e redes sociais, tornando-se uma comodidade diária. 

O conceito do HTTP passa pelo modelo de Request e Response. A aplicação cliente, geralmente um navegador, faz um Request enviando uma string de requisição para um servidor HTTP. O servidor processa essa string, retira os comandos e gera uma outra string como resposta. O HTTP é nativamente Stateless, casando perfeitamente com o REST. 

Para resolver situações como um carrinho de compras, onde o sistema precisa lembrar quem é o usuário e o que ele escolheu, utiliza-se a implementação da camada de sessão através de cookies. O nome cookie vem da analogia de uma pessoa que come um biscoito e deixa farelos, um rastro. O cookie é um rastro da requisição deixado no computador do cliente. Na próxima requisição, esse dado é enviado junto, permitindo ao servidor identificar o usuário. No entanto, os cookies e a sessão são implementados separadamente, fora do HTTP. O HTTP é um protocolo transacional, baseado em comandos e respostas individuais.

## Estrutura de Requisição e Resposta HTTP
O objetivo não é criar navegadores em Java, mas compreender o raciocínio por trás do protocolo HTTP para beneficiar nossas aplicações. A requisição é uma string de caracteres. Na primeira linha, temos o comando, a URL e a versão do protocolo HTTP. Abaixo, temos os cabeçalhos, formados por uma palavra, dois pontos e uma string. Eles transmitem dados sobre o cliente, como o idioma ou o navegador utilizado. Depois, há uma linha em branco obrigatória, chamada de quebra estrutural, seguida pelo corpo da mensagem. 

A resposta possui uma estrutura muito semelhante. A versão do protocolo fica no início, seguida por um código de status e uma palavra relacionada. O servidor também envia cabeçalhos, a linha de quebra estrutural e o corpo da resposta, que pode ser um HTML, JSON ou XML. O termo utilizado para a parte útil transmitida é payload, que significa carga. Em uma analogia com um caminhão, o payload é a carga que vai na caçamba, ignorando a cabine do motorista e a estrutura do veículo.

## Métodos HTTP e Idempotência
Quando o REST foi criado, fez-se uma analogia entre os comandos de banco de dados e os métodos nativos do HTTP: POST, GET, PUT, PATCH e DELETE. O GET é usado para consultas. O POST é usado para inserir registros, mas também pode ser usado para consultas muito complexas com muitos filtros, evitando erros em um GET complicado. O PUT deve ser reservado para a substituição completa de um registro, enquanto o PATCH é usado para a atualização de campos específicos, como trocar apenas o telefone ou e-mail do usuário. O DELETE é autoexplicativo. 

Um conceito fundamental é a idempotência, que vem da matemática. Uma função idempotente sempre retorna o mesmo resultado para os mesmos parâmetros. No HTTP, uma operação é idempotente se, ao ser executada várias vezes, produz o mesmo estado no servidor que produziria se fosse executada apenas uma vez. O POST não é idempotente, pois cada execução cria um registro diferente com uma chave primária única. De forma geral, busca-se a idempotência na construção de uma API REST.

## Códigos de Status e Content-Type
O HTTP dispõe de códigos de status divididos em cinco grupos. O grupo dos 200 indica sucesso. Ao fazer um POST para inserir um registro, o ideal é retornar o código 201, indicando que o registro foi criado. O grupo dos 300 tem pouca aplicação para nós. Os grupos dos 400 e 500 indicam erros do cliente e do servidor, respectivamente. Se um cliente envia um CPF inválido, retornamos um 400 Bad Request. O código 401 indica que o usuário não está autorizado e precisa de autenticação, geralmente acionando a tela de login. Se o usuário tentar acessar uma área proibida mesmo após o login, recebe um 403 Forbidden. 

O cabeçalho Content-Type sinaliza o tipo de dado trafegado. Em APIs e Java, o padrão atual é o JSON. O JSON é uma evolução natural do XML, sendo mais legível, prático e eficiente. A diferença de eficiência ocorre porque o XML utiliza tags de abertura e fechamento. Um payload em JSON é muito menor do que o mesmo conteúdo em XML. Em comunicação de dados, buscamos eficiência, e o excesso de caracteres do XML causa obsolescência nesse cenário.

## Camada de Apresentação e HTTPS
Abaixo da camada de aplicação, temos a camada de apresentação, que possui três responsabilidades principais. A primeira é a codificação de caracteres, definindo se o padrão é UTF-8, Latin1 ou EBCDIC. A segunda é a compactação de dados. Se o servidor e o cliente utilizarem o protocolo Gzip, a comunicação é compactada antes da transmissão, otimizando a banda. A terceira responsabilidade é a criptografia, que nos leva ao protocolo HTTPS. 

A criptografia utiliza chaves assimétricas, com uma chave pública para criptografar e uma chave privada para descriptografar. O servidor web instala um certificado digital na máquina, permitindo o tráfego seguro de dados. Devido às vulnerabilidades atuais, não se pode abrir mão da criptografia. Esses conceitos também se aplicam ao armazenamento em bancos de dados modernos, como o Firestore, que armazena documentos diretamente no formato JSON.

## Abordagem Prática com Java
Para colocar tudo isso em prática, existem duas abordagens. A primeira é direta e objetiva, utilizando o comando cURL através da interface de linha de comando, ou CLI. Ele funciona como uma forma simples e imediata de fazer requisições e receber respostas. 

A segunda abordagem, que mais nos interessa, é a programática, utilizando a classe HttpURLConnection no Java. O processo consiste em definir a URL, instanciar um objeto da classe URL, abrir a conexão, enviar o comando GET e configurar cabeçalhos e timeout. Para ler a resposta, verificamos o código de status. Se for 200, criamos um BufferedReader. O BufferedReader atua como um filtro encaixado no InputStream, permitindo o uso do método readLine para ler o retorno linha por linha. 

Outra ferramenta interessante para simplificar a extração de dados de uma URL é o Jsoup. O aprendizado começa com a parte conceitual do REST, passa pelo entendimento físico do HTTP e termina com o uso do Java para escrever o código e acessar as APIs.