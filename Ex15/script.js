const inserirCredito = document.getElementById('inserirCredito');

document.getElementById('confirmar').addEventListener('click', e => {
    e.preventDefault();

    saldo();
});

function saldo() {
    let saldo = document.getElementById('saldo').value;
    let credito = 0;

    if(saldo <= 2000) {
        inserirCredito.innerHTML = 'Você não possuí crédito';
    } else if(saldo > 2000 && saldo < 10000) { 
        credito = saldo * 0.2;
    } else if(saldo > 10000 && saldo < 20000) { 
        credito = saldo * 0.3;
    } else { 
        credito = saldo * 0.4;
    }

    inserirCredito.innerHTML = 'Seu crédito é de R$ ' + credito.toFixed(2);
};

