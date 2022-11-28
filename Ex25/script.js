document.getElementById('confirmar').addEventListener('click', e => {
    e.preventDefault();

    numPares();
});

function numPares() {
    let pares = [];
    let num = parseInt(document.getElementById('num').value);
    let numPar = 0;

    for(let i = 0; i < num; i++) {
        numPar = numPar + 2;
        pares.push(numPar)

        const element = document.createElement("h2");
        const inserir = document.createTextNode(numPar);

        element.appendChild(inserir);
        const body = document.body;
        body.appendChild(element);
    };
};