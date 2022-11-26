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

    //deve existir uma forma melhor de fazer isso
    if(numeros[0] > media) {maiores.push(numeros[0]);} 
    if(numeros[1] > media) {maiores.push(numeros[1]);} 
    if(numeros[2] > media) {maiores.push(numeros[2]);}
    if(numeros[3] > media) {maiores.push(numeros[3]);}
    if(numeros[4] > media) {maiores.push(numeros[5]);}

    let qntsMaiores = maiores.length;

    inserirMaior10.innerHTML = qntsMaiores + ' números são maiores que a média'
};