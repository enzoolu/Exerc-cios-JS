const inserirEntre = document.getElementById('entre');
const inserirPares = document.getElementById('pares');
const inserirMenor = document.getElementById('menores');
const inserirImpar = document.getElementById('impares');
const inserirArr = document.getElementById('arr');
let numeros = [];
let arrEntre = [];
let arrPares = [];
let arrMenores = [];
let arrImpares = [];

for(let i = 0; i < 50; i++) {
    let sorteio = (Math.random() * 10).toFixed(0);
    numeros.push(sorteio);
};

let entre = numeros.filter(entre => entre >= 3 && entre <= 7);
arrEntre.push(entre);

let pares = numeros.filter(pares => pares % 2 == 0);
arrPares.push(pares);

let menores = numeros.filter(menores => menores < 3);
arrMenores.push(menores);

let impares = numeros.filter(impares => impares % 2 !== 0);
arrImpares.push(impares);

inserirEntre.innerHTML = arrEntre[length].length + ' estão entre 3 e 7';
inserirPares.innerHTML = arrPares[length].length + ' são pares';
inserirMenor.innerHTML = arrMenores[length].length + ' são menores que 3';
inserirImpar.innerHTML = arrImpares[length].length + ' são impares';
inserirArr.innerHTML = 'números sorteados: ' + numeros;