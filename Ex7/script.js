const inserirVerificacaoMaior = document.getElementById('inserirVerificacaoMaior');
const inserirVerificacaoIgualdade = document.getElementById('inserirVerificacaoIgualdade');

document.getElementById('confirmarNumeros').addEventListener('click', e => {
    e.preventDefault();

    veriricacao();
});

function veriricacao() {
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;
    
    let num1 = parseInt(n1);
    let num2 = parseInt(n2);

    if(num1 > num2) {
        inserirVerificacaoMaior.innerHTML = 'O primeiro número é maior do que o segundo';
    } if(num1 < num2) {
        inserirVerificacaoMaior.innerHTML = 'O primeiro número é menor do que o segundo';
    } if(num1 == num2) {
        inserirVerificacaoIgualdade.innerHTML = 'O primeiro número é igual ao segundo';
        inserirVerificacaoMaior.innerHTML = '';
        inserirVerificacaoMaior.innerHTML = '';
    } if(num1 !== num2) {
        inserirVerificacaoIgualdade.innerHTML = 'O primeiro número é diferente do segundo';
    };
};