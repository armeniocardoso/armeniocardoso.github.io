---
title: Propriedades e métodos
description: Conheça a anatomia das classes em Java, do encapsulamento à extensibilidade.
---

**Dominando a Anatomia das Classes em Java: Do Encapsulamento à Extensibilidade**

Seja muito bem-vindo a mais um artigo do nosso blog! Se você já estuda programação orientada a objetos há algum tempo, sabe que fazer um código compilar é apenas o primeiro passo. A verdadeira engenharia de software acontece quando escrevemos códigos que são seguros, de fácil manutenção e que passam com louvor em qualquer *Code Review* (revisão de código) profissional.

Hoje, vamos mergulhar na anatomia das classes em Java. Vamos desmistificar desde a organização básica até conceitos avançados como sobrecarga, uso do *static* e o ciclo de vida dos objetos. Prepare seu café e vamos à aula!

### A Estrutura Básica: O que a Classe Sabe vs. O que ela Faz

Relembrando a estrutura fundamental, utilizamos as chaves **{ }** para representar o escopo de uma classe. Uma convenção fortíssima na linguagem Java — e que você deve seguir se quiser que seu código seja aprovado no mercado — é a ordem das declarações: **propriedades na parte superior e métodos na parte inferior**. Inverter isso até compila, mas foge completamente das boas práticas.

Para dominar a orientação a objetos, você precisa separar dois conceitos vitais:
*   **Propriedades (ou Atributos):** É o que a classe *sabe*. Elas guardam o estado, a informação e as características do objeto. Exemplo: *saldo*, *numeroDaConta*.
*   **Métodos:** É o que a classe *faz*. Eles representam as ações, o comportamento. Exemplo: *depositar()*, *getSaldo()*.

Tudo isso deve ser guiado pelo **Princípio da Responsabilidade Única**. Quando você cria uma classe, ela deve nascer com um único propósito claro. A partir desse objetivo central, você define o que ela precisa "saber" e "fazer" para cumpri-lo.

### O Escudo do Encapsulamento: Por que esconder seus dados?

Uma das regras de ouro da orientação a objetos é: **mantenha suas propriedades privadas (private) e seus métodos de acesso públicos (public)**. Mas por que isso é tão importante?

Imagine uma classe chamada **Data** com propriedades públicas. Qualquer programador poderia instanciar essa classe e atribuir o valor 56 para o dia e 49 para o mês. Isso não existe! Se deixarmos os dados públicos, teremos que espalhar validações (vários *ifs*) por todo o código do sistema que utiliza essa classe.

Ao tornar a propriedade privada e forçar o acesso por meio de um método público (como um *mudaDia*), nós centralizamos a validação. O método atua como um "caminho seguro" que filtra os dados antes de alterar o estado do objeto. 

Gosto de usar uma analogia do mundo real: uma propriedade física (uma casa ou fazenda) tem porta, cadeado e cerca. Não é um espaço público onde qualquer um entra e sai. Na programação, uma propriedade também deve ser protegida. Em diagramas de classe UML, representamos essa proteção com um sinal de menos (-) para *private* e um sinal de mais (+) para *public*. Não faz sentido falar em orientação a objetos sem proteger a integridade dos seus dados!

### Relacionamentos: Multiplicidade vs. Cardinalidade

Quando modelamos sistemas reais, as classes se comunicam. Imagine as classes **Pessoa** e **Telefone**. Uma pessoa pode ter zero ou "N" telefones. Para representar isso na classe Pessoa, usamos uma lista ou array.

Um detalhe técnico crucial para você que está se tornando um especialista: em bancos de dados relacionais (SQL), chamamos isso de *cardinalidade*, pois lidamos com produto cartesiano de registros. Na orientação a objetos, o termo correto é **multiplicidade**. Os conceitos são irmãos, mas o contexto muda. Usar o vocabulário correto demonstra maturidade técnica.

Muitas vezes, esses relacionamentos são unidirecionais para simplificar a codificação. A Pessoa (entidade forte) conhece seus telefones, mas o Telefone (entidade fraca) não precisa, necessariamente, saber quem é o seu dono.

### Instância vs. Classe: O Poder do Modificador 'Static'

Aprofundando nas propriedades e métodos, precisamos entender a diferença entre o que pertence ao objeto (instância) e o que pertence à classe como um todo.

*   **Dinâmicos (De Instância):** Todo objeto instanciado tem sua própria cópia. Em uma classe *Empregado*, cada um terá seu próprio nome, idade e matrícula.
*   **Estáticos (De Classe):** Usam a palavra-chave *static*. Eles existem em um único espaço de memória e são compartilhados por todas as instâncias. Se você tem uma classe de *Vendedores*, o percentual de comissão pode ser estático para garantir isonomia: se mudar para um, muda para todos.

Isso também se aplica aos métodos. Podemos criar uma classe utilitária chamada **Validador** contendo métodos como *validarCPF* ou *validarEmail* usando expressões regulares. Se declararmos esses métodos como *public static*, não precisaremos instanciar a classe para usá-los. Eles funcionam como uma biblioteca de serviços (exatamente como a classe *Math* nativa do Java).

### O DNA dos Métodos e a Arte da Sobrecarga

A **assinatura** de um método é formada pelo seu nome, somado aos tipos e quantidade de parâmetros que ele recebe. O tipo de retorno *não* faz parte da assinatura.

Quando temos métodos com o mesmo nome, mas assinaturas diferentes na mesma classe, chamamos isso de **Sobrecarga**. E por que isso é vital? Pela **extensibilidade**.

Imagine um sistema bancário onde o construtor da conta exige número, titular e saldo inicial. Anos depois, o banco lança a "conta salário", que sempre nasce com saldo zero. Em vez de alterar o construtor original e correr o risco de quebrar o sistema inteiro, nós criamos um construtor sobrecarregado que recebe apenas número e titular. 

Lembre-se desta regra de ouro da engenharia de software: **depois que um código foi escrito, testado e está em produção, evite alterá-lo**. A sobrecarga permite que o software cresça e adote novos requisitos sem quebrar o que já funciona.

### A Ignição: Construtores e o Operador 'new'

A criação de um objeto acontece em três passos mágicos:
1. Declaramos a variável de referência.
2. O operador **new** aloca espaço físico na memória.
3. O **método construtor** é chamado para inicializar o objeto.

Os construtores têm regras inquebráveis: possuem exatamente o mesmo nome da classe (começando com letra maiúscula), não possuem tipo de retorno (nem mesmo *void*) e servem exclusivamente para inicializar o objeto. Se você não criar um, o Java fornece um construtor *default* (vazio) invisível. Mas atenção: ao criar o seu próprio construtor com parâmetros, o *default* deixa de existir!

### A Identidade do Objeto: O uso do 'this'

Para fechar nossa arquitetura, precisamos falar do **this**. Ele é a referência para a própria instância da classe.

Seu uso mais comum é para resolver o *Shadowing* (sombreamento). Isso ocorre quando o parâmetro do construtor tem o mesmo nome da propriedade da classe. Usamos **this.numero = numero;** para dizer ao Java: "pegue o valor da variável local e guarde na propriedade *deste* objeto".

O *this* também brilha na sobrecarga de construtores. Podemos usar **this()** na primeira linha de um construtor para chamar outro construtor da mesma classe, evitando a perigosa duplicação de código.

---

### Resumo dos Aprendizados

Para fixar o que vimos hoje, guarde estes quatro pilares da anatomia de uma classe:

1. **O Escudo:** Atributos privados garantem o encapsulamento e protegem a integridade do estado do objeto.
2. **A Ignição:** Construtores (muitas vezes sobrecarregados) são responsáveis por dar vida e inicializar os objetos de forma lógica.
3. **A Identidade:** O uso do *this* protege o estado da instância, resolve ambiguidades e evita duplicação de código.
4. **O DNA:** As assinaturas dos métodos definem o comportamento, a interface pública e garantem a extensibilidade do sistema.

### Agora é com você!

A orientação a objetos é um universo fascinante, mas exige mudança de mentalidade. Qual desses conceitos você achava mais confuso antes de ler este artigo? Você já teve problemas em produção por não utilizar o encapsulamento ou a sobrecarga da forma correta? 

**Deixe sua resposta nos comentários abaixo, quero muito saber como tem sido a sua experiência com Java!**