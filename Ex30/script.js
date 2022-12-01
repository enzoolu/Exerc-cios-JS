const inserirNumeroSorteado = document.getElementById('exibirNumeroSoretado');
const inserirArr = document.getElementById('inserirArr');
let numerosImpares = [];
let sortearNumero = parseInt((Math.random() * 100).toFixed(0));
let primeiroImpar = 0;

if(sortearNumero % 2 !== 0) {
    numerosImpares.push(sortearNumero);

    for(let i = 0; i < 9; i++) {
        let proxImpar = sortearNumero - 2;
        sortearNumero = proxImpar;
    
        numerosImpares.push(proxImpar);
    };
};

inserirNumeroSorteado.innerHTML = 'O número sorteado foi ' + sortearNumero;
inserirArr.innerHTML = numerosImpares.reverse();