const result = document.getElementById('resultado');

document.getElementById('confirmarNumeros').addEventListener('click', e => {
    e.preventDefault();

    verificacao();
});

function verificacao() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let num3 = parseInt(document.getElementById('num3').value);

    if(num1 == num2 + num3) {
        result.innerHTML = 'O primeiro número é igual a soma dos outros dois'
    } else {
        if(num1 > num2 + num3) {
            result.innerHTML = 'O primeiro número é maior que a soma dos outros dois'
        } else {
            result.innerHTML = 'O primeiro número é menor que a soma dos outros dois'
        }
    }
};