#Exercício

Os participantes deverão desenvolver uma aplicação web capaz de fazer pesquisas sobre filmes catalogados no site 'The Movie Database'.

###Prazo

- O código deverá ser entregue até o fim do stopwatch do dia 18/Nov/2016.

###Pontuaçãoe e Critério de avaliação

#####Requisitos funcionais (máx. 100 pontos)
- Aplicação funcionando 100% de acordo as funcionalidades solicitadas

#####Requisitos técnicos (máx. 100 pontos)
- Uso adequado e otimizado do ECMAScript 2015/ES6.
- Uso adequado e otimizado das bibliotecas JavaScript (jquery, momentjs, lodash, handlebars).
- Clean Code.

###Funcionalidades

As seguintes funcionalidades deverão estar presentes na aplicação:

1. Uma interface web com um campo texto para digitar o título do filme e um botão para acionar a pesquisa.
1. O usuário poderá digitar parte do **título original** de um filme ou parte dos **títulos traduzidos** para outros idiomas.
1. O resultado da pesquisa, que deverá ser limitado em 20 filmes, apresentará as seguintes informações: 
    - título original do filme
	- gênero  do filme (em português)
	- ano de lançamento do filme
	- sinopse do filme (em português)
	- imagem do cartaz do filme
1. O botão de pesquisa poderá ser acionado ao pressionar a tecla 'ENTER' no campo de busca. 
1. Quando o filme não tiver uma imagem de cartaz, deverá mostrar uma outra imagem do mesmo tamanho (154 x 231) no lugar.  

###Requisitos técnicos
1. Utilizar a versão 3 do ['The Movie Database (TMDb) API'](https://www.themoviedb.org/documentation/api).
1. Utilizar a API key (v3 auth) que será enviada por e-mail aos participantes.
1. Não é permitido usar qualquer wrapper sobre a API do TMDb.
1. A aplicação deverá ser escrita na linguagem Java.
1. Não é permitido adicionar qualquer biblioteca externa no projeto.
1. As consultas para o TMDb devem ser feitas usando ajax.

###Dicas
1. Para pesquisar os filmes, use o endpoint `GET https://developers.themoviedb.org/3/search/search-movies`.
1. Para obter os gêneros, use o endpoint `GET /genre/movie/list`.
1. Para obter as imagens dos cartazes, utilize a URI base `http://image.tmdb.org/t/p/w154`. 
1. No site da documentação oficial, utilize a aba 'try it out' para testar as chamadas da API. 
1. Para iterar sobre um array dentro do template handlebars, utilize o [each block helper](http://handlebarsjs.com/builtin_helpers.html).

###Atenção 
- A lista de funcionalidades e a lista dos requisitos técnicos podem ser alteradas a qualquer momento.

###Screenshots
![alt tag](https://raw.githubusercontent.com/sidlar/stopwatch-challenge-1/master/docs/screenshots/1.png)
![alt tag](https://raw.githubusercontent.com/sidlar/stopwatch-challenge-1/master/docs/screenshots/2.png)