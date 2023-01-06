function selecionarPrato(pratoClicado){

const pratoAnterior = document.querySelector(".pratos .selecionado");
if(pratoAnterior !== null){
    pratoAnterior.classList.remove("selecionado");
}

pratoClicado.classList.add("selecionado");
}

function selecionarBebida(bebidaClicada){

const bebidaAnterior=document.querySelector(".bebidas .selecionado");
if(bebidaAnterior !== null){
    bebidaAnterior.classList.remove("selecionado");
}   
   
    bebidaClicada.classList.add("selecionado");
}

function selecionarSobremesa(sobremesaSelecionada){

    const sobremesaAnterior= document.querySelector(".sobremesas .selecionado");
    if(sobremesaAnterior !== null){
        sobremesaAnterior.classList.remove("selecionado");
    }


    sobremesaSelecionada.classList.add("selecionado");
}
