const inserirNome = document.getElementById('inserirNome');
const inserirVendas = document.getElementById('inserirVendas');
const inserirComissao = document.getElementById('inserirComissao');
const inserirSalario = document.getElementById('inserirSalario');

document.getElementById('confirmarDados').addEventListener('click', e => {
    e.preventDefault();

    calcularSalario();
});

function calcularSalario() {
    let nome = document.getElementById('nome').value;
    let calcas = document.getElementById('calcasVendidas').value;

    let valorComissao = calcas * 25;
    let salarioFinal = valorComissao + 1000;

    inserirNome.innerHTML = 'Nome do Vendedor: ' + nome;
    inserirVendas.innerHTML = 'Número de Calças Vendidas: ' + calcas;
    inserirComissao.innerHTML = 'Ganhos em Comissão: ' + valorComissao;
    inserirSalario.innerHTML = 'Sálario Final: ' + salarioFinal;
};