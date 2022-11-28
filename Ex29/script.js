document.getElementById('confirmar').addEventListener('click', e => {
    e.preventDefault();

    sequencia();
});

function sequencia() {
    let num1 = 0;
    let num2 = 1;
    let resultado = 0;

    for(let i = 0; i < 15; i++) {
        resultado = num1 + num2;
        num1 = num2;
        num2 = resultado;


        const element = document.createElement("h2"); 
        const inserir = document.createTextNode(resultado);

        element.appendChild(inserir);
        const body = document.body;
        body.appendChild(element);
    };
};