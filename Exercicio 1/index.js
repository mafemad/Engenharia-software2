let nome = window.prompt("Insira seu nome");
let altura = parseFloat(window.prompt("Insira sua altura em centimetros"));
let peso = parseFloat(window.prompt("Insira seu peso"));

altura = altura / 100;

m = (peso) / (altura*altura);

let resultado;
if (m < 16) {
    resultado = "Baixo peso muito grave";
} else if (16 < m && m < 16.9) {
    resultado = "Baixo peso grave";
} else if (17 < m && m < 18.49) {
    resultado = "Baixo peso";
} else if (18.5 < m && m < 24.99) {
    resultado = "Peso normal";
} else if (25 < m && m < 29.9) {
    resultado = "Sobrepeso";
} else if (30 < m && m < 34.9) {
    resultado = "Obesidade grau I";
} else if (35 < m && m < 39.9) {
    resultado = "Obesidade grau II";
} else if (m > 40) {
    resultado = "Obesidade grau III";
}

window.alert(`${nome} possui imc igual a ${m.toFixed(2)}, sendo classificado como ${resultado}`);