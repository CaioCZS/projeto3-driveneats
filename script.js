
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
let valorTotal=0;
let valorFinal;
function ativarBotao(){
    if(pratoSelecionado !== undefined && bebidaSelecionada !== undefined && sobremesaSelecionada !== undefined){
        document.querySelector(".finalizarPedido1").classList.remove("cor-cinza");
        document.querySelector(".finalizarPedido1").classList.add("botaoFinalizado");
        document.querySelector(".finalizarPedido1").innerHTML="Fechar pedido";
        document.querySelector(".finalizarPedido1").removeAttribute("disabled");
        //console.log(document.querySelector(".finalizarPedido1").innerHTML)
    
    }
}

function enviarMensagem(){
let nvPrecoB = Number(precoBebida.replace(",","."));
let nvPrecoP = Number(precoPrato.replace(",","."));
let nvPrecoS = Number(precoSobremesa.replace(",","."));
valorTotal=(nvPrecoP + nvPrecoB + nvPrecoS);
valorFinal=valorTotal.toFixed(2);
let valorFinal2=valorFinal.replace(".",",");
//console.log(valorTotal);
//console.log(valorFinal);
    
    if(pratoSelecionado !== undefined && bebidaSelecionada !== undefined && sobremesaSelecionada !== undefined){
        const celular="5511993392719";
        let textoDaMensagem=`Olá gostaria de fazer o pedido: \n - Prato: ${pratoSelecionado} \n - Bebida: ${bebidaSelecionada} \n - Sobremesa: ${sobremesaSelecionada} \n Total: R$ ${valorFinal2} \n\n Nome: ${nomePessoa} \n Endereço: ${enderecoPessoa}`;
        textoDaMensagem=window.encodeURIComponent(textoDaMensagem);
        console.log(textoDaMensagem);
        window.open("https://api.whatsapp.com/send?phone=" + celular + "&text=" +textoDaMensagem,"_blank");
    }
}
let nomePessoa;
let enderecoPessoa;
function exibirConfirmacao(){
let nvPrecoB = Number(precoBebida.replace(",","."));
let nvPrecoP = Number(precoPrato.replace(",","."));
let nvPrecoS = Number(precoSobremesa.replace(",","."));
valorTotal=(nvPrecoP + nvPrecoB + nvPrecoS);
valorFinal=valorTotal.toFixed(2);
let valorFinal2=valorFinal.replace(".",",");
document.querySelector(".fundoBranco").classList.remove("escondido");
document.querySelector(".CPnomePrato").innerHTML=pratoSelecionado;
document.querySelector(".CPprecoPrato").innerHTML=precoPrato;
document.querySelector(".CPnomeBebida").innerHTML=bebidaSelecionada;
document.querySelector(".CPprecoBebida").innerHTML=precoBebida;
document.querySelector(".CPnomeSobremesa").innerHTML=sobremesaSelecionada;
document.querySelector(".CPprecoSobremesa").innerHTML=precoSobremesa;
document.querySelector(".somaTotal").innerHTML=`R$ ${valorFinal2}`;
nomePessoa=prompt("Qual o seu nome?")
enderecoPessoa=prompt("Qual o seu endereço?")
}

function cancelarPedido(){
    document.querySelector(".fundoBranco").classList.add("escondido");
}