document.getElementById('confirmar').addEventListener('click', e => {
    e.preventDefault();

    sequencia();
});

function sequencia() {
    let num1 = 0;
    let num2 = 0;

    for(let i = 0; i < 10; i++) {
        num1 = num1 + 1;
        num2 = num2 + 2;

        const element = document.createElement("h2"); 
        const inserir = document.createTextNode(num1 + '/' + num2);

        element.appendChild(inserir);
        const body = document.body;
        body.appendChild(element);
    };
};