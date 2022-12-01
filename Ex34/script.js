const inserirMaior = document.getElementById('maior');
const inserirMenor = document.getElementById('menor');
const arr = document.getElementById('arr');
let numeros = [];

for(let i = 0; i < 30; i++) {
    let sorteio = (Math.random() * 100).toFixed(0);
    numeros.push(sorteio);
};

let maior = Math.max.apply(null, numeros);

let menor = Math.min.apply(null, numeros);

inserirMaior.innerHTML = 'O maior número é: ' + maior;
inserirMenor.innerHTML = 'O menor número é: ' + menor;
arr.innerHTML = 'Números sorteados: ' + numeros;