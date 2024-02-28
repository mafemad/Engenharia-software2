function dataPorExtenso() {
    
    let data = prompt("Digite uma data no formato dd/mm/aaaa:");

    let partes = data.split('/');
    let dia = partes[0];
    let mes = partes[1];
    let ano = partes[2];

    let meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
             'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    dia = parseInt(dia);
    ano = parseInt(ano);

    mes = meses[parseInt(mes) - 1]; 

   
    let dataPorExtenso = dia + ' de ' + mes + ' de ' + ano;
    
    return dataPorExtenso;
}


alert(dataPorExtenso());
