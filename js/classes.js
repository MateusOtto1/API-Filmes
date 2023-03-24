class Ator{
    constructor(id, nome){
        this.nome = nome;
        this.id = id;
    }
}

class Diretor{
    constructor(id, nome){
        this.nome = nome;
        this.id = id;
    }
}

class Filme{
    constructor(id, titulo, ano, genero, duracao, cartaz, sinopse, direcao, elenco, classificacao, avaliacao){
        this.id = id;
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.cartaz = cartaz;
        this.sinopse = sinopse;
        this.direcao = direcao;
        this.elenco = elenco;
        this.classificacao =classificacao;
        this.avaliacao = avaliacao;
        this.btnDetalhes = null;
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
    divDetalhes.setAttribute("style","display:flex; justify-content:space-around;");
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
    divDetalhes.appendChild(divGenero);
    divDetalhes.appendChild(divAnoProducao);
    divDetalhes.appendChild(divClassificacao);
    card.appendChild(imgCartaz);
    card.appendChild(cardBody);
    cardBody.appendChild(hCardTitle);
    cardBody.appendChild(divDetalhes);

    this.setBtnDetalhes();
    cardBody.appendChild(this.getBtnDetalhes());

    return card;
}

setBtnDetalhes = () => {
    this.btnDetalhes = document.createElement('button');
    this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
    this.btnDetalhes.setAttribute("id", this.id);
    this.btnDetalhes.setAttribute("class", "btnDetalhesFilme");
}

getBtnDetalhes = () => {
    return this.btnDetalhes;
}

getDetalhesFilme = () =>{
    
    let mostrardetalhes = document.createElement("div");
    mostrardetalhes.setAttribute("class", "descricaofilme");

    let todosdetalhes = document.createElement("div");
    todosdetalhes.setAttribute("class","descricoes");

    let card = document.createElement("div");
    card.setAttribute("id", "card-body");

    let divimg = document.createElement("div");
    divimg.setAttribute("class", "divimg");

    let mostrarimg = document.createElement("img");
    mostrarimg.setAttribute("class","imgdescricao");
    mostrarimg.setAttribute("src",this.cartaz);

    let mostrartitulo = document.createElement("h3");
    mostrartitulo.setAttribute("class","card-text");
    mostrartitulo.appendChild(document.createTextNode("Título: "+this.titulo));

    let mostrargenero = document.createElement("h5");
    mostrargenero.setAttribute("class","card-text");
    mostrargenero.appendChild(document.createTextNode("Gênero: "+this.genero));

    let mostrarduracao = document.createElement("h5");
    mostrarduracao.setAttribute("class","card-text");
    mostrarduracao.appendChild(document.createTextNode("Duração: "+this.duracao));

    let mostrarsinopse = document.createElement("h5");
    mostrarsinopse.setAttribute("class","card-text");
    mostrarsinopse.appendChild(document.createTextNode("Sinopse: "+this.sinopse));

    let mostrardirecao = document.createElement("h5");
    mostrardirecao.setAttribute("class","card-text");
    mostrardirecao.appendChild(document.createTextNode("Direção: "+this.direcao));

    let mostrarelenco = document.createElement("h5");
    mostrarelenco.setAttribute("class","card-text");
    mostrarelenco.appendChild(document.createTextNode("Elenco: "+this.elenco));

    let mostrarclassificacao = document.createElement("h5");
    mostrarclassificacao.setAttribute("class","card-text");
    mostrarclassificacao.appendChild(document.createTextNode("Classificação: "+this.classificacao));

    let mostraravaliacao = document.createElement("h5");
    mostraravaliacao.setAttribute("class","card-text");
    mostraravaliacao.appendChild(document.createTextNode("Avaliação: "+this.avaliacao));

    todosdetalhes.appendChild(mostrartitulo);
    todosdetalhes.appendChild(mostrargenero);
    todosdetalhes.appendChild(mostrarduracao);
    todosdetalhes.appendChild(mostrarsinopse);
    todosdetalhes.appendChild(mostrardirecao);
    todosdetalhes.appendChild(mostrarelenco);
    todosdetalhes.appendChild(mostrarclassificacao);
    divimg.appendChild(mostrarimg);
    todosdetalhes.appendChild(mostraravaliacao);
    todosdetalhes.appendChild(card);
    mostrardetalhes.appendChild(divimg);
    mostrardetalhes.appendChild(todosdetalhes);
    
    let btnSalvar = document.createElement('button');
    btnSalvar.appendChild(document.createTextNode('Salvar'));
    btnSalvar.setAttribute('id', 'btnSalvar');
    mostrardetalhes.appendChild(btnSalvar);

    let btnFechar = document.createElement('button');
    btnFechar.appendChild(document.createTextNode('Fechar'));
    btnFechar.setAttribute('id', 'btnFechar');
    mostrardetalhes.appendChild(btnFechar);

    return mostrardetalhes;
}

}