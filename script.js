
let precoPrato;
let pratoSelecionado;

function selecionarPrato(pratoClicado){

const pratoAnterior = document.querySelector(".pratos .selecionado");
if(pratoAnterior !== null){
    pratoAnterior.classList.remove("selecionado");
}

pratoClicado.classList.add("selecionado");

let Pt=pratoClicado.querySelector("h3");
//console.log(Pt)
pratoSelecionado= Pt.innerHTML;
//console.log(pratoSelecionado)
precoPrato=pratoClicado.querySelector(".preco").innerHTML;
//console.log(precoPrato)
ativarBotao();
}

let precoBebida;
let bebidaSelecionada;
function selecionarBebida(bebidaClicada){

const bebidaAnterior=document.querySelector(".bebidas .selecionado");
if(bebidaAnterior !== null){
    bebidaAnterior.classList.remove("selecionado");
}   
   
    bebidaClicada.classList.add("selecionado");

    bebidaSelecionada=bebidaClicada.querySelector("h3").innerHTML;
    //console.log(bebidaSelecionada)
    precoBebida=bebidaClicada.querySelector(".preco").innerHTML;
    //console.log(precoBebida)
    ativarBotao();
}

let precoSobremesa;
let sobremesaSelecionada;
function selecionarSobremesa(sobremesaClicada){

    const sobremesaAnterior= document.querySelector(".sobremesas .selecionado");
    if(sobremesaAnterior !== null){
        sobremesaAnterior.classList.remove("selecionado");
    }


    sobremesaClicada.classList.add("selecionado");

    sobremesaSelecionada=sobremesaClicada.querySelector("h3").innerHTML;
    precoSobremesa=sobremesaClicada.querySelector(".preco").innerHTML;
    //console.log(precoSobremesa)
    //console.log(sobremesaSelecionada)
    ativarBotao();
}

function ativarBotao(){
    if(pratoSelecionado !== undefined && bebidaSelecionada !== undefined && sobremesaSelecionada !== undefined){
        document.querySelector(".finalizarPedido1").classList.remove("cor-cinza");
        document.querySelector(".finalizarPedido1").classList.add("botaoFinalizado");
        document.querySelector(".finalizarPedido1").innerHTML="Fechar pedido";
        document.querySelector("a").classList.remove("desativado");
        //console.log(document.querySelector(".finalizarPedido1").innerHTML)
    }
}
