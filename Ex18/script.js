const inserirResultado = document.getElementById('inserirResultado');

document.getElementById('confirmar').addEventListener('click', e => {
    e.preventDefault();

    resultado();
});

function resultado() {
    let respSim = []
    for (let i = 1; i < 6; i++) {
        let pergunta = document.getElementById('pergunta' + [i]).value;
        if (pergunta === 'S') {
            respSim.push(pergunta);
        }
    }

    if(respSim.length <= 2 && respSim.length !== 0) {
        inserirResultado.innerHTML = 'Suspeito';
    } else if(respSim.length >= 3 && respSim.length <= 4) {
        inserirResultado.innerHTML = 'Cúmplice';
    } else if(respSim.length == 5) {
        inserirResultado.innerHTML = 'Assassino';
    } else {
        inserirResultado.innerHTML = 'inocente';
    }
};

