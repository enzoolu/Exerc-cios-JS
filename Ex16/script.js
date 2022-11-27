const inserirIMC = document.getElementById('inserirIMC');

document.getElementById('confirmar').addEventListener('click', e => {
    e.preventDefault();

    imc();
});

function imc() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    let imc = peso / (altura * altura);

    if(imc <= 18.5) {inserirIMC.innerHTML = 'Abaixo do peso'};
    if(imc > 18.5 && imc <= 25) {inserirIMC.innerHTML = 'Peso Normal'};
    if(imc > 25 && imc <= 30) {inserirIMC.innerHTML = 'Sobrepeso'};
    if(imc > 30 && imc <= 35) {inserirIMC.innerHTML = 'Obeso Leve'};
    if(imc > 35 && imc <= 40) {inserirIMC.innerHTML = 'Obeso Moderado'};
    if(imc > 40) {inserirIMC.innerHTML = 'Obeso Mórbido'};
};

