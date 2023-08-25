const inserirValorConta = document.getElementById('valorConta');
const inserirValorServico = document.getElementById('valorServico');
const inserirValorFinal = document.getElementById('valorFinal');

document.getElementById('confirmarValor').addEventListener('click', e => {
    e.preventDefault();

    calcularConta();
});

function calcularConta() {
    let valor = parseFloat(document.getElementById('valor').value);
    let valorServico = valor * 0.10;
    let valorFinal = valorConta + valorServico;
    
    inserirValorConta.innerHTML = 'Valor da Conta: R$' + valorConta.toFixed(2);
    inserirValorServico.innerHTML = 'Taxa de Serviço: R$' + valorServico.toFixed(2);
    inserirValorFinal.innerHTML = 'Valor Final: R$' + valorFinal.toFixed(2);
};