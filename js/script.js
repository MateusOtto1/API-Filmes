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
    inputBusca.value = '';
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
        
        document.querySelector("#btnFechar").onclick = ()=>{
            document.querySelector("#lista-filmes").style.display = "";
            document.querySelector("#mostrar-filme").innerHTML="";
            document.querySelector("#mostrar-filme").style.display = "none";
        }

        document.querySelector("#btnSalvar").onclick = () =>{
            salvarFilme();
        }
        document.querySelector("#btnDesfavoritar").onclick = () =>{
            // Obter a lista de filmes favoritos do localStorage
            let filmesFavoritos = JSON.parse(localStorage.getItem('filmesFavoritos'));  
            // Remover o filme da lista de filmes favoritos com base em seu ID   
            filmesFavoritos = filmesFavoritos.filter(pegaId => pegaId.id!==filme.id);
            // Atualizar a lista de filmes favoritos no localStorage
            localStorage.setItem('filmesFavoritos',JSON.stringify(filmesFavoritos));
            // Atualizar a lista de filmes favoritos na interface do usuário
            listarFavoritos();
        }
        document.querySelector("#btnEditar").onclick = () =>{
            
            document.querySelector("#mostrar-filme").innerHTML="";
            document.querySelector("#mostrar-filme").appendChild(filme.getEditarFilme());

            document.querySelector("#btnSalvar").onclick = () =>{

                let inputTitulo = document.querySelector("#inputTitulo");
                let inputSinopse = document.querySelector("#inputSinopse");
                let tituloAtual = inputTitulo.value;
                let sinopseAtual = inputSinopse.value;

                filme.titulo = tituloAtual;
                filme.sinopse = sinopseAtual;
        
                localStorage.setItem('filmeEditado', JSON.stringify(filme));
                listarFavoritos();
                }

                document.querySelector("#btnFechar").onclick = ()=>{
                document.querySelector("#lista-filmes").style.display = "";
                document.querySelector("#mostrar-filme").innerHTML="";
                document.querySelector("#mostrar-filme").style.display = "none";
            }
        }

        document.querySelector("#lista-filmes").style.display = "none";
        document.querySelector("#mostrar-filme").style.display = "flex";

        salvarFilme = () =>{
            let filmes = new Array()
            let filmesString = localStorage.getItem('filmesFavoritos');
            if(filmesString){
                 filmes = JSON.parse(filmesString);
            }
            
            if (filmes.some(filmeId => filmeId.id === filme.id)) {
                alert("O filme já está favoritado!");
                return;
            }

            filmes.push(filme);
            filmes = JSON.stringify(filmes);
            localStorage.setItem('filmesFavoritos', filmes);
        }   

    });
       
}

let navFavoritos = document.querySelector("#nav-favoritos");
navFavoritos.onclick = () =>{
    listarFavoritos();
}

listarFavoritos = () => {
    let filmesFavoritos = localStorage.getItem('filmesFavoritos');
    filmesFavoritos = JSON.parse(filmesFavoritos);
    let filmes = new Array();
    filmesFavoritos.forEach((item) => {
        let filme = new Filme(
            item.id,
            item.titulo,
            item.ano,
            item.genero,
            item.duracao,
            item.cartaz,
            item.direcao,
            item.elenco,
            item.classificacao,
            item.avaliacao
        );
            filmes.push(filme);
            
    });

    listarFilmes(filmes); 
}
