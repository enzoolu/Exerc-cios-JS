const result = document.getElementById('resultado');

document.getElementById('confirmarNumeros').addEventListener('click', e => {
    e.preventDefault();

    verificacao();
});

function verificacao() {
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;
    let n3 = document.getElementById('num3').value;

    let num1 = parseInt(n1);
    let num2 = parseInt(n2);
    let num3 = parseInt(n3);

    if(num1 > num2 + num3) {
        result.innerHTML = 'O primeiro número é maior que a soma dos outros dois'
    } else if(num1 < num2 + num3) {
        result.innerHTML = 'O primeiro número é menor que a soma dos outros dois'
    } if(num1 == num2 + num3) {
        result.innerHTML = 'O primeiro número é igual a soma dos outros dois'
    };
};