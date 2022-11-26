const inserirPreco = document.getElementById('inserirPreco');
const inserirDesconto13 = document.getElementById('inserirDesconto13');
const inserirAcrescimo17 = document.getElementById('inserirAcrescimo17');
const inserir20Parcelas = document.getElementById('inserir20Parcelas');
const inserirIPVA = document.getElementById('inserirIPVA');
const inserirEntrada = document.getElementById('inserirEntrada');

document.getElementById('confirmarPreco').addEventListener('click', e => {
    e.preventDefault();

    precos();
});

function precos() {
    let preco = parseInt(document.getElementById('preco').value);

    let desconto13 = preco * 0.013;
    let precoDesconto13 = preco - desconto13;

    let acrescimo17 = preco * 0.017;
    let precoAcrescimo17 = preco + acrescimo17;

    let parcelas20 = preco / 20;

    let desconto5 = preco * 0.05;
    let precoIPVA = preco - desconto5 - 2923; 

    let entrada = preco * 0.2;
    let parcelado = preco - entrada;
    let parcelas12 = parcelado / 12;

    inserirPreco.innerHTML = 'Preço: R$' + preco;
    inserirDesconto13.innerHTML = 'Preço com 13% de desconto: R$' + precoDesconto13.toFixed(2);
    inserirAcrescimo17.innerHTML = 'Preço com 17% de acrescímo: R$' + precoAcrescimo17.toFixed(2);
    inserir20Parcelas.innerHTML = '20 parcelas de: R$' + parcelas20.toFixed(2);
    inserirIPVA.innerHTML = 'Preço com 5% de desconto e IPVA pago: R$' + precoIPVA.toFixed(2);
    inserirEntrada.innerHTML = 'Entrada de R$' + parcelado.toFixed(2) + ' + 12 parcelas de R$' + parcelas12.toFixed(2);
}; 