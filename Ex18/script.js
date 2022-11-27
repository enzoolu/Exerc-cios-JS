const inserirResultado = document.getElementById('inserirResultado');

document.getElementById('confirmar').addEventListener('click', e => {
    e.preventDefault();

    resultado();
});

function resultado() {
    let pergunta1 = document.getElementById('pergunta1').value;
    let pergunta2 = document.getElementById('pergunta2').value;
    let pergunta3 = document.getElementById('pergunta3').value;
    let pergunta4 = document.getElementById('pergunta4').value;
    let pergunta5 = document.getElementById('pergunta5').value;
    let respostaSim = 0;

    if(pergunta1 === 'S') {respostaSim = respostaSim + 1};
    if(pergunta2 === 'S') {respostaSim = respostaSim + 1};
    if(pergunta3 === 'S') {respostaSim = respostaSim + 1};
    if(pergunta4 === 'S') {respostaSim = respostaSim + 1};
    if(pergunta5 === 'S') {respostaSim = respostaSim + 1};

    if(respostaSim <= 2 && respostaSim !== 0) {
        inserirResultado.innerHTML = 'Suspeito';
    } else if(respostaSim >= 3 && respostaSim <= 4) {
        inserirResultado.innerHTML = 'Cúmplice'
    } else if(respostaSim == 5) {
        inserirResultado.innerHTML = 'Assassino'
    } else {
        inserirResultado.innerHTML = 'inocente'
    };
};

