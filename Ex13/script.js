const inserirIntervalo = document.getElementById('inserirIntervalo');

document.getElementById('confirmar').addEventListener('click', e => {
    e.preventDefault();

    intervalo();
});

function intervalo() {
    let numero = parseInt(document.getElementById('num').value);

    if(numero >= 100 && numero <= 200) {
        inserirIntervalo.innerHTML = 'O número está entre 100 e 200'
    } else {
        inserirIntervalo.innerHTML = 'O número não está entre 100 e 200'
    }
}

