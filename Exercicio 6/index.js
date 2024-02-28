let numero1 = parseFloat(prompt("insira o primeiro numero"));
let operacao = prompt("qual operação sera realizada? soma/subtração").toLowerCase().trim().normalize("NFD");
let numero2 = parseFloat(prompt("insira o segundo numero"));

function calcular(n1, n2, op){
    if(op === "soma"){
        return n1 + n2;
    }
    else if (op === "subtracao"){
        return n1 - n2;
    }
    else{
        return "Selecione uma operação válida";
    }

}

window.alert(`resultado da operação: ${calcular(numero1, numero2, operacao)}`);