let inputBusca = document.querySelector("#input-buscar-filme");
let btnBusca = document.querySelector("#btn-buscar-filme");


btnBusca.onclick = ()=>{
    if(inputBusca.value.length > 0){
        let filmes = new Array();
        fetch("https://www.omdbapi.com/?i=tt3896198&apikey=fcd1bc7f&s="+inputBusca.value, {mode:"cors"})
        .then((resp)=> resp.json())
        .then((resp)=> {
           resp.Search.forEach((item)=> {
            console.log(item);
            let filme = new Filme(
                item.imdbID,
                item.Title,
                item.Year,
                null,
                null,
                item.Poster,
                null,
                null,
                null,
                null,
                null
            );
                filmes.push(filme);

           });
           listarFilmes(filmes);
        })
    }
    return false;
}

let listarFilmes = async (filmes) => {
    let listaFilmes = await document.querySelector("#lista-filmes");
    listaFilmes.style.display ="";
    listaFilmes.innerHTML = "";
    document.querySelector("#mostrar-filme").innerHTML = "";
    document.querySelector("#mostrar-filme").style.display = "none";
    if(filmes.length > 0){
        filmes.forEach(async(filme) => {
            console.log(filme);
            listaFilmes.appendChild(await filme.getCard());
            filme.getBtnDetalhes().onclick=()=>{
                detalhesFilme(filme.id);
            }
        });
    }
}

let detalhesFilme = async (id) =>{
    fetch("https://www.omdbapi.com/?apikey=fcd1bc7f&i=" +id)
    .then((resp) => resp.json())
    .then((resp) => {
        let filme = new Filme(
            resp.imdbID,
            resp.Title,
            resp.Year,
            resp.Genre.split(","),
            resp.Runtime,
            resp.Poster,
            resp.Plot,
            resp.Director,
            resp.Actors.split(","),
            resp.Awards,
            resp.imdbRating
        )
        document.querySelector("#mostrar-filme").appendChild(filme.getDetalhesFilme());
        document.querySelector("#lista-filmes").style.display = "none";
        document.querySelector("#mostrar-filme").style.display = "flex";
    });
}