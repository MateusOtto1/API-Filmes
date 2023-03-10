let inputBusca = document.querySelector("#input-buscar-filme");
let btnBusca = document.querySelector("#btn-buscar-filme");

btnBusca.onclick = ()=>{
    if(inputBusca.value.length > 0){
        let filmes = new Array();
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=fcd1bc7f&s="+inputbusca.value, {mode:"cors"})
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
        })
    }
    return false;
}

getCard = async () =>{

    let card = document.createElement("div");
    card.setAttribute("class","card");
    let imgCartaz = document.createElement("img");
    imgCartaz.setAttribute("class", "card-img-top");
    imgCartaz.setAttribute("src",this.cartaz);
    let cardBody = document.createElement("div");
    cardBody.setAttribute("class","card-body");
    let hCardTitle = document.createElement("h5");
    hCardTitle.setAttribute("class","card-title");
    let divDetalhes = document.createElement("div");
    divDetalhes.setAttribute9("style","display:flex; justify-content:space-around;");
    let divGenero = document.createElement("div");
    divGenero.setAttribute("style","flex-grow:1;");
    let divAnoProducao = document.createElement("div");
    divAnoProducao.setAttribute("style","flex-grow:1;");
    let divClassificacao = document.createElement("div");
    divClassificacao.setAttribute("style","flex-grow:1;");
    hCardTitle.appendChild(document.createTextNode(this.titulo));
    divGenero.appendChild(document.createTextNode(this.genero));
    divAnoProducao.appendChild(document.createTextNode(this.ano));
    divClassificacao.appendChild(document.createTextNode(this.classificacao));
}

let listarFilmes = async (filmes) => {
    let listaFilmes = await document.querySelector("");
}