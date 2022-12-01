const inserirAntes = document.getElementById('antes');
const inserirDepois = document.getElementById('depois');
let antes = [];
let depois = [];

//foram sorteados números até 20
for(let i = 0; i < 42; i++) {
    let sorteio = (Math.random() * 20).toFixed(0);
    antes.push(sorteio);
};

let maior = Math.max.apply(null, antes);

for(let i = 0; i < antes.length; i++) {
    let multiplicar = antes[i] * maior;
    depois.push(multiplicar);
}

inserirAntes.innerHTML = 'antes: ' + antes;
inserirDepois.innerHTML = 'depois: ' + depois;