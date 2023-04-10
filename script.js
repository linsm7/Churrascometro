// A quantidade de carne é de 400 gramas por adulto, caso o evento tenha
// duração de mais de 6 horas, a quantidade passa a ser de 650 gramas.

// O alcool é consumido somente por adultos, onde um adulto consome 1200ml, caso
// o evento tenha mais de 6 horas, o adulto consome 2000ml.

// O consumo do refrigerante é de 1000ml por pessoa, caso o evento tenha mais de 
// 6 horas o consumo passa a ser 1500ml.




let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne =  carnePorPessoas(duracao) * adultos + (carnePorPessoas(duracao)/2 * criancas);
    let qtdTotalAlcool =  AlcoolPorPessoa(duracao) * adultos;
    let qtdTotalBebida =  BebidaPorPessoa(duracao) * adultos + (BebidaPorPessoa(duracao)/2 * criancas);
    // console.log(qtdTotalCarne);
    // console.log(qtdTotalAlcool);
    // console.log(qtdTotalBebida);
    resultado.innerHTML = `<p>${qtdTotalCarne/1000} kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalAlcool/350)} Latas de Pinga</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebida/2000)} Garrafas de Bebidas</p>`
}

function carnePorPessoas(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}
function AlcoolPorPessoa(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}
function BebidaPorPessoa(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}

