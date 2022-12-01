const inserirTres = document.getElementById('tres');
const inserirMaiores = document.getElementById('maiores');
const arr = document.getElementById('arr');
let numeros = [];
let tres = [];
let maiores = [];

for(let i = 0; i < 30; i++) {
    let sorteio = (Math.random() * 10).toFixed(0);
    numeros.push(sorteio);
};

let filtrarTres = numeros.filter(tres => tres == 3);
tres.push(filtrarTres);

let filtrarMaiores = numeros.filter(maior => maior > 5);
maiores.push(filtrarMaiores);

inserirTres.innerHTML = 'Quantidade de números 3: ' + tres[length].length;
inserirMaiores.innerHTML = 'Quantidade de números maiores que 5: ' + maiores[length].length;
arr.innerHTML = 'Números sorteados: ' + numeros;