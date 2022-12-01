let inserirPares = document.getElementById('pares');
let inserirImpares = document.getElementById('impares');
let inserirMenores = document.getElementById('menores');
let inserirMaiores = document.getElementById('maiores');
let inserirEntre = document.getElementById('entre');

let numeros = [];
let pares = [];
let impares = [];
let menores = [];
let maiores = [];
let entre = [];

for(let i = 0; i < 200; i++) {
    let gerarNumeros = Math.random() * 1001;
    numeros.push(gerarNumeros.toFixed(0));
}

let filtrarPares = numeros.filter(pares => pares % 2 == 0);
pares.push(filtrarPares);

let filtrarImpares = numeros.filter(impares => impares % 2 !== 0);
impares.push(filtrarImpares);

let filtrarMenores = numeros.filter(menores => menores < 500);
menores.push(filtrarMenores);

let filtrarMaiores = numeros.filter(maiores => maiores > 500);
maiores.push(filtrarMaiores);

let filtarEntre = numeros.filter(entre => entre >= 300 && entre <= 700);
entre.push(filtarEntre);

inserirPares.innerHTML = pares[length].length + ' são pares';
inserirImpares.innerHTML = impares[length].length + ' são impares';
inserirMenores.innerHTML = menores[length].length + ' são menores que 500';
inserirMaiores.innerHTML = maiores[length].length + ' são maiores que 500';
inserirEntre.innerHTML = entre[length].length + ' estão entre 300 e 700';