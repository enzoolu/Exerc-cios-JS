const inserirIMC = document.getElementById('inserirIMC');

document.getElementById('confirmar').addEventListener('click', e => {
    e.preventDefault();

    imc();
});

function imc() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    let imc = peso / (altura * altura);

    if(imc <= 18.5) {
        inserirIMC.innerHTML = 'Abaixo do peso';
    } else if(imc > 18.5 && imc <= 25) {
        inserirIMC.innerHTML = 'Peso Normal';
    } else if(imc > 25 && imc <= 30) {
        inserirIMC.innerHTML = 'Sobrepeso';
    } else if(imc > 30 && imc <= 35) {
        inserirIMC.innerHTML = 'Obeso Leve';
    } else if(imc > 35 && imc <= 40) {
        inserirIMC.innerHTML = 'Obeso Moderado';
    } else {
        inserirIMC.innerHTML = 'Obeso Mórbido';
    }
}