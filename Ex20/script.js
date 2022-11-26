const inserirTaxaServico = document.getElementById('inserirTaxaServico');
const inserirDiarias = document.getElementById('inserirDiarias');
const inserirValorTotal = document.getElementById('inserirValorTotal');

document.getElementById('confirmar').addEventListener('click', e => {
    e.preventDefault();

    calcDiarias();
});

function calcDiarias() {
    let diarias = parseInt(document.getElementById('diaria').value);
    console.log(diarias);
    let valorTaxa = 0;

    if(diarias > 15) {
        valorTaxa = diarias * 35.5;
    } if(diarias == 15) {
        valorTaxa = diarias * 46;
    } if(diarias < 15) {
        valorTaxa = diarias * 58;
    };

    let valorFinal = diarias * 360 + valorTaxa;

    inserirTaxaServico.innerHTML = 'Taxa de Serviço: R$ ' + valorTaxa;
    inserirDiarias.innerHTML = 'Diárias: ' + diarias;
    inserirValorTotal.innerHTML = 'Valor Total: R$' + valorFinal;
}