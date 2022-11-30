const exibirSelecionado = document.getElementById('numeroEscolhido');
const exibirSucessor = document.getElementById('sucessor');
const exibirAntecessor = document.getElementById('antecessor');
const exibirDobro = document.getElementById('dobro');
const exibirMetade = document.getElementById('metade');

document.getElementById('confirmarNumero').addEventListener('click', e => {
    e.preventDefault();

    calcNumeros();
});

function calcNumeros() {
    let numeroSelecionado = parseFloat(document.getElementById('numeroDigitado').value);

    exibirSelecionado.innerHTML = 'Número Selecionado: ' + numeroSelecionado;

    let sucessor = numeroSelecionado + 1;
    exibirSucessor.innerHTML = 'Sucessor: ' + sucessor;

    let antecessor = numeroSelecionado - 1;
    exibirAntecessor.innerHTML = 'antecessor: ' + antecessor;

    let dobro = numeroSelecionado * 2;
    exibirDobro.innerHTML = 'dobro: ' + dobro;

    let metade = numeroSelecionado / 2;
    exibirMetade.innerHTML = 'metade: ' + metade;
};