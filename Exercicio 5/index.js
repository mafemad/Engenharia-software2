let codigo = parseInt(prompt("Digite o código do funcionário:"));
let horasTrabalhadas = parseInt(prompt("Digite o número de horas trabalhadas no mês:"));
let turno = prompt("Digite o turno de trabalho (M - matutino, V - vespertino, N - noturno):").toUpperCase();
let categoria = prompt("Digite a categoria (F - funcionário, G - gerente):").toUpperCase();

let salarioMinimo = parseFloat(prompt("Digite o valor do salário mínimo:"));

function calcularSalario(salario){
    let valorHora;
    if(categoria == "G" && turno == "N" || turno == "M"){
        valorHora = (salario * 4) /100 ;
        return valorHora;
    }
    else if (categoria == "F" && turno == "N"){
        valorHora = (salario * 2) / 100;
        return valorHora;
    }
    else if(categoria == "F" && turno != "N"){
        valorHora = salario / 100;
        return valorHora;
    }
}

function valeAlimentação(salarioInicial){
    if(salarioInicial <= 800){
        valeAlimentação = salarioInicial* 25/100;
        return valeAlimentação;
    }
    else if (salarioInicial > 800 && salarioInicial <= 1200){
        valeAlimentação = salarioInicial * 20/100;
        return valeAlimentação;
    }
    else if (salarioInicial > 1200){
        valeAlimentação = salarioInicial * 15/100;
        return valeAlimentação;
    }
}


let valorH = calcularSalario(salarioMinimo)
let salarioInicial = valorH * horasTrabalhadas;


salarioFinal = salarioInicial + valeAlimentação(salarioInicial);

console.log("Código:", codigo);
console.log("Horas trabalhadas:", horasTrabalhadas);
console.log("Valor da hora trabalhada:", valorH);
console.log("Salário inicial:", salarioInicial);
console.log("Auxílio-alimentação:", valeAlimentação);
console.log("Salário final:", salarioFinal);

