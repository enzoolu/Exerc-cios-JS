const inserirArea = document.getElementById('area');

document.getElementById('confirmarMedidas').addEventListener('click', e => {
    e.preventDefault();

    calcularArea();
});

function calcularArea() {
    let base = document.getElementById('base').value;
    let altura = document.getElementById('altura').value;

    let area = (base * altura) / 2;

    inserirArea.innerHTML = 'Área do Triângulo = ' + area;
};