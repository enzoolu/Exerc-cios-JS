const inserirVerificacaoMaior = document.getElementById('inserirVerificacaoMaior');
const inserirVerificacaoIgualdade = document.getElementById('inserirVerificacaoIgualdade');

document.getElementById('confirmarNumeros').addEventListener('click', e => {
    e.preventDefault();

    veriricacao();
});

function veriricacao() {
    let n1 = parseInt(document.getElementById('num1').value);
    let n2 = parseInt(document.getElementById('num2').value);

    if (n1 === n2) {
        inserirVerificacaoIgualdade.innerHTML = 'O primeiro número é igual ao segundo';            
    } else {
        if(n1 > n2) {
            inserirVerificacaoMaior.innerHTML = 'O primeiro número é maior do que o segundo';
        } else {
            inserirVerificacaoMaior.innerHTML = 'O primeiro número é menor do que o segundo';
        }
        inserirVerificacaoIgualdade.innerHTML = 'O primeiro número é diferente do segundo';
    }
};