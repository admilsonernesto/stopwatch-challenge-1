let genres=[];

class Filme{
    constructor(titulo, titulo_original, sinopse, ano_lancamento, imagem, generos){
        this.titulo = titulo;
        this.titulo_original = titulo_original;
        this.sinopse = sinopse;
        this.ano_lancamento = ano_lancamento;
        this.imagem = imagem;
        this.generos = generos;
    }
}

class MovieDb{
    static getMovies(callbackMovie){
        $.get( "https://api.themoviedb.org/3/search/movie", {query: $(".campo-busca").val(), language: "pt-BR", api_key: "a500a4291e09f6a2ba7c43214281c000"})
        .done(function(themoviedb) {
            callbackMovie(themoviedb.results);
        })
        .fail(function() {
            errorMessage("Ocorreu um erro de comunicação com o servidor ao consultar os filmes" );
        })
    }

    static getGenres(){
        if(genres.length > 0) return genres;

        $.get( "https://api.themoviedb.org/3/genre/movie/list", {language: "pt-BR", api_key: "a500a4291e09f6a2ba7c43214281c000"})
            .done(function(themoviedb){
                genres = themoviedb.genres;
            })
            .fail(function() {
                errorMessage("Ocorreu um erro de comunicação com o servidor ao consultar os generos");
            })
    }

    static getImage(movie){
        if (movie.poster_path==null){
            return "/imagens/semImagem.png";
        }else{
            return "http://image.tmdb.org/t/p/w154" + movie.poster_path;
        }
    }
}

function buscaFilmes() {
    limpaUltimaConsulta();
    if(preenchimentoOk()){
        MovieDb.getMovies(carregaFilmes);
    }
}

function preenchimentoOk() {
    if ($(".campo-busca").val() == "") {
        warningMessage("Atenção! Você deve informar no mínimo 3 caracteres.");
        return false;
    }
    return true;
}

function limpaUltimaConsulta(){
    $("#message").removeClass().text("");
    $("tbody").empty();
}

function carregaFilmes(movies) {
    if (movies.length == 0){
        warningMessage("Atenção! Não existem filmes com o filtro informado.");
        return
    }

    if (genres.length == 0){
        $.when(MovieDb.getGenres()).then(adicionaFilmes(movies));
        return
    }
    adicionaFilmes(movies);
}

function adicionaFilmes(movies){
    let source   = $("#template").html();
    let template = Handlebars.compile(source);
    let filmes = criaFilmes(movies);
    let html    = template(filmes);
    $("tbody").append(html);
}

function criaFilmes(movies){
    let filmes = [];
    _.each(movies, movie=> {
        let generos = extraiNomesDosGeneros(movie.genre_ids);
        let ano_lancamento = moment(movie.release_date).year();
        let imagem = MovieDb.getImage(movie);
        let filme = new Filme(movie.title, movie.title_original, movie.overview, ano_lancamento, imagem, generos);
        filmes.push(filme);
    });
    return filmes;
}

function extraiNomesDosGeneros(genre_ids){
    let generos=[];
    _.each(genres, genre=>{if ( _.includes(genre_ids,genre.id)) generos.push(genre.name)});
    return generos;
}

function warningMessage(msg){
    $("#message").removeClass().addClass("alert alert-warning").text(msg);
}

function errorMessage(msg){
    $("#message").removeClass().addClass("alert alert-danger").text(msg);
}

