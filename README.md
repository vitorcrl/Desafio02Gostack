# ⭐Desafio02 Gostack
Este repositório contem o desafio 2 de ReactJS, do Bootcamp da RocketSeat. Contém algumas notas sobre as linguagens utilizadas no desafio.
# ⭐O que é React?

- Bibliioteca para construção de interfaces.
- Construção de single-pages-aplications.
- Tudo fica dentro do JavaScript.
- React ReactJs React native.

##⭐ Vantagens

- Organizacao de codigo.
- Componentizacao: pode separar partes da pagina que tem uma logica isolada.
- Divisão de responsabilidade:

Back-end:Regra de negocio, realizar operacoes

Front-end:Somente representação da interface.

- Caracteristica de API REST, multiplos clientes(somente um backend para inumeros clientes como web, mobile etc.).
- Programação declarativa.

##⭐ JSX

- Junção de JavaScrip com XML(sintaxe do HTML), assim escrever HTML dentro do documento em JS.

### JSX: HTML dentro do JavaScript

### Programação imperativo vs declarativo:

- imperativo, dar os passos do processo solicitado
- declarativo, fornecer uma descrição do solicitado

##⭐ Babel/Webpack

- Babel:Converter(transpilar) o codigo do React para que o Bowser entenda.
- WebPack:Para cada tipo de arquivo(.js, .css, .png) converter o codigo de uma maneira diferente.
- Loaders: Babel-Loader, css-loader, image-loader.(converter em algo que o bowser entenda)

- Webpack: cria uma bundle com todos os codigos do js em HTML, alem de converter os css dentro do js em CSS direto.

### Fragment:<> </> pode criar um container para envolver 2 ou mais componentes sem modificar a DOM

#⭐ Conceitos do React:(para dominar)

- Propriedade: passar a informação de um componente pai para um filho.

Pegar uma informacao que contenha em todas as paginas, passar ela antes para as outras, assim todas vão ter o Componente.

- Estado e Imutabilidade:

Use state retorna um array com duas posições

1. Variavel com seu valor inicial

2. funcao para atualizar esse valor.

- Imutabilidade:Nao e possivel alterar o formato de sua variavel, ou seja n'ao pode incluir ou alterar informacoes. Para fazer isso e necessario recriar a informacao com suas alteracoes feitas.Percorrendo o array de projetos e copiando os dados, conceito de imutabilidade.
A rota Cons, serve para retornar algum item, se nao retornar nao precisa.

##⭐ React Props

Essa função é um componente React válido porque aceita um único argumento de objeto “props” (que significa propriedades) com dados e retorna um elemento React. Nós chamamos esses componentes de “componentes de função” porque são literalmente funções JavaScript.

Use efffect disparar funcoes sempre que uma informacao for alterada.

sempre comecar um estado com o mesmo tipo que a informacao armazenada no estado anterior
