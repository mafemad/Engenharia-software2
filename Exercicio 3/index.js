let lab = parseFloat(prompt("Insira sua nota pratica de laboratorio"));
let prova = parseFloat(prompt("Insira sua nota da prova do semestre"));
let trabalho = parseFloat(prompt("Insira a nota do seu trabalho teorico"));

let media = ((lab * 2) + (prova * 5) + (trabalho * 3)) / 10;

let classificacao;

if (media <=5){
    classificacao = "F";
}else if (media > 5 && media <= 6){
    classificacao = "E";
}else if (media > 6 && media <= 7){
    classificacao = "D";
}else if(media > 7 && media <= 8){
    classificacao = "C"
}else if(media > 8 && media <= 9){
    classificacao = "B"
}else if(media > 9 && media <= 10){
    classificacao = "A"
}

window.alert(`A média do aluno é ${media.toFixed(2)} e sua classifiação é ${classificacao}`)