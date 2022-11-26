const inserirValorConta = document.getElementById('valorConta');
const inserirValorServico = document.getElementById('valorServico');
const inserirValorFinal = document.getElementById('valorFinal');

document.getElementById('confirmarValor').addEventListener('click', e => {
    e.preventDefault();

    calcularConta();
});

function calcularConta() {
    let valor = document.getElementById('valor').value;
    let valorConta = parseInt(valor);
    let valorServico = valorConta * 0.10;
    let valorFinal = valorConta + valorServico;
    
    inserirValorConta.innerHTML = 'Valor da Conta: R$' + valorConta;
    inserirValorServico.innerHTML = 'Taxa de Serviço: R$' + valorServico;
    inserirValorFinal.innerHTML = 'Valor Final: R$' + valorFinal;
};