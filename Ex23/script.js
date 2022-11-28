const inserirNum = document.getElementById('inserirNum');

document.getElementById('confirmar').addEventListener('click', e => {
    e.preventDefault();

    quadrado();
});

function quadrado() {
    let numeros = [];
    let num = parseInt(document.getElementById('num').value);
    let numQuadrado = num;
    let numFor = num;

    if(num <= 0) {
        inserirNum.innerHTML = 'Insira um número maior que 0'
    };

    for(let i = 0; i <= numFor; i++) {
        let numMenor = num - 1;
        numeros.push(numMenor);
        num = numMenor;
    };
    numeros.pop();
    numeros.pop();

    for(let i = 0; i < numeros.length; i++) {
        let quadrado = numeros[i] * numeros[i];

        const element = document.createElement("h2");
        const inserir = document.createTextNode(numQuadrado - 1 + '² = ' + quadrado);
        numQuadrado = numQuadrado - 1;

        element.appendChild(inserir);
        const body = document.body;
        body.appendChild(element);
    };
};