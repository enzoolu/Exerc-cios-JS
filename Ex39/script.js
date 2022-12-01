const exibir = document.getElementById('exibir');
let numeros = [];

for(let i = 0; i < 50; i++) {
    let sorteio = (Math.random() * 10).toFixed(0);
    numeros.push(sorteio);
};
console.log(numeros);

document.getElementById('confirmar').addEventListener('click', e => {
    e.preventDefault();

    codNumerico()
});

function codNumerico() {
    let numeroEscolhido = parseInt(document.getElementById('valor').value);

    if(numeroEscolhido == 0) {
        exibir.innerHTML = 'O script foi encerrado, insira outro valor'
    } else if(numeroEscolhido == 1) {
        exibir.innerHTML = numeros;
    } else if(numeroEscolhido == 2) {
        exibir.innerHTML = numeros.reverse();
    } else {
        exibir.innerHTML = 'Insira um valor entre 0 e 2'
    };
};