let quilometros = parseFloat(prompt("Quantidade de quilometros a serem percorridos"));
let pecas = parseFloat(prompt("Quantidade de peças a serem transportadas"));
let regiao = parseInt(prompt("Selecione a região (1-sul) (2-sudeste) (3-centro-oeste)"))
let rastreamento = prompt("Deseja Rastreamento? S/N")

let frete_sul = 1.00;
let frete_sudeste = 1.20;
let frete_centro = 1.30;

let desc_sul = 0.9;
let desc_sudeste = 1.056;
let desc_centro = 1.131;

let preco_quilometro;
let preco_pecas;
let precoFinal;

if(regiao == 1 ){
    if(pecas > 1000){
        let desconto = pecas - 1000;
        preco_pecas = (desconto * desc_sul) + (1000 * frete_sul);
        preco_quilometro = (quilometros * 6);
        precoFinal = preco_pecas + preco_quilometro;
    }
    preco_quilometro = (quilometros * 6);
    preco_pecas = (pecas * frete_sul);
    precoFinal = preco_pecas + preco_quilometro;
}
else if(regiao == 2 ){
    if(pecas > 1000){
        let desconto = pecas - 1000;
        preco_pecas = (desconto * desc_sudeste) + (1000 * frete_sudeste);
        preco_quilometro = (quilometros * 6);
        precoFinal = preco_pecas + preco_quilometro;
    }
    preco_quilometro = (quilometros * 6);
    preco_pecas = (pecas * frete_sudeste);
    precoFinal = preco_pecas + preco_quilometro;
}
else if(regiao == 3 ){
    if(pecas > 1000){
        let desconto = pecas - 1000;
        preco_pecas = (desconto * desc_centro) + (1000 * frete_centro);
        preco_quilometro = (quilometros * 6);
        precoFinal = preco_pecas + preco_quilometro;
    }
    preco_quilometro = (quilometros * 6);
    preco_pecas = (pecas * frete_centro);
    precoFinal = preco_pecas + preco_quilometro;
}

let taxa_rastreamento = 0;
if(rastreamento === "S"){
    precoFinal += 200;
    taxa_rastreamento = 200;
}


console.log(`Taxa de rastreamento:${taxa_rastreamento} \n
            Valor do frete das peças: ${preco_pecas} \n
            Valor do frete por quilometro ${preco_quilometro} \n
            Valor total a ser pago: ${precoFinal}`);



//Contas feitas adotando o preço do combustivel a 6 reais o litro