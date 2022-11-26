const inserirBytes = document.getElementById('bytes');

document.getElementById('confirmarValor').addEventListener('click', e => {
    e.preventDefault();

    converter();
});

function converter() {
    let mega =  parseInt(document.getElementById('mega').value);
    let bytes = mega * 1000000;

    inserirBytes.innerHTML = bytes + ' Bytes'
}