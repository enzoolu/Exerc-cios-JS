let inserirMaior10 = document.getElementById('inserirMaior10');

document.getElementById('confirmarNumeros').addEventListener('click', e => {
    e.preventDefault();

    verificacao();
});

function verificacao() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let num3 = parseInt(document.getElementById('num3').value);
    let num4 = parseInt(document.getElementById('num4').value);
    let num5 = parseInt(document.getElementById('num5').value);

    let media = (num1 + num2 + num3 + num4 + num5) / 5

    let numeros = [];
    let maiores = [];

    numeros.push(num1, num2, num3, num4, num5);

    for (let i = 0; i <= numeros.length; i++) {
        if(numeros[i] > media) {maiores.push(numeros[i]);} 
    }

    let qntsMaiores = maiores.length;

    inserirMaior10.innerHTML = qntsMaiores + ' números são maiores que a média'
};