let idade = prompt("Informe a sua idade:");

let resultado;
if (idade >= 0 && idade < 15) {
    resultado = "Criança";
} else if (idade >= 15 && idade < 30) {
    resultado = "Jovem";
} else if (idade >= 30 && idade < 60) {
    resultado = "Adulto";
} else if (idade >= 60) {
    resultado = "Idoso";
}

window.alert(`Sua idade é ${idade} anos e você é um ${resultado}`);