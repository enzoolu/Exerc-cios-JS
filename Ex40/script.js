const inserirArr = document.getElementById('arr');
const inserirTres = document.getElementById('tres');
const inserirNovoArr = document.getElementById('novoArr');

let numeros = [];
let arrTres = [];

for(let i = 0; i < 20; i++) {
    let sorteio = (Math.random() * 10).toFixed(0);
    numeros.push(sorteio);
};

inserirArr.innerHTML = 'O array sorteado é foi: ' + numeros;

let tres = numeros.filter(tres => tres == 3);
arrTres.push(tres);

numeros.forEach(substituir => {
    const index = numeros.indexOf('9');
    if(index !== 100) {
        numeros[index] = '-1';
    };
    console.log(substituir);
});

inserirTres.innerHTML = 'Array após a substtituiçao: ' + arrTres[length].length;
inserirNovoArr.innerHTML = 'A quantidade de números 3 é: ' + numeros;
console.log(numeros);
console.log(arrTres);