document.getElementById('confirmar').addEventListener('click', e => {
    e.preventDefault();

    sequencia();
});

function sequencia() {
    let num1 = 0;
    let num2 = 1;
    let resultado = 0;

    for(let i = 1; i < 16; i++) {
        resultado = num1;

        const element = document.createElement("h2"); 
        const inserir = document.createTextNode('Termo ' + i + ': ' + resultado);

        resultado = num2;
        resultado = num1 + num2;
        num1 = num2;
        num2 = resultado;

        element.appendChild(inserir);
        const body = document.body;
        body.appendChild(element);
    };
};