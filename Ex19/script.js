const inserirNota1 = document.getElementById('inserirNota1');
const inserirNota2 = document.getElementById('inserirNota2');
const inserirNota3 = document.getElementById('inserirNota3');
const inserirNota4 = document.getElementById('inserirNota4');
const inserirMedia = document.getElementById('inserirMedia');
const inserirConceito = document.getElementById('inserirConceito');
const inserirResultado = document.getElementById('inserirResultado');

document.getElementById('confirmarNotas').addEventListener('click', e => {
    e.preventDefault();

    media();
});

function media() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);
    let nota4 = parseFloat(document.getElementById('nota4').value);

    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    inserirNota1.innerHTML = 'Nota1: ' + nota1;
    inserirNota2.innerHTML = 'Nota2: ' + nota2;
    inserirNota3.innerHTML = 'Nota3: ' + nota3;
    inserirNota4.innerHTML = 'Nota4: ' + nota4;
    inserirMedia.innerHTML = 'Média: ' + media.toFixed(1);

    if(media >= 9) {
        inserirResultado.innerHTML = 'Resultado: Aprovado';
        inserirConceito.innerHTML = 'Conceito: A';
    } if(media >= 7.5 && media < 9) {
        inserirResultado.innerHTML = 'Resultado: Aprovado';
        inserirConceito.innerHTML = 'Conceito: B';
    } if(media >= 6 && media < 7.5) {
        inserirResultado.innerHTML = 'Resultado: Aprovado';
        inserirConceito.innerHTML = 'Conceito: C';
    } if(media >= 4 && media < 6) {
        inserirResultado.innerHTML = 'Resultado: Reprovado';
        inserirConceito.innerHTML = 'Conceito: D';
    } if(media >= 0 && media < 4) {
        inserirResultado.innerHTML = 'Resultado: Reprovado';
        inserirConceito.innerHTML = 'Conceito: E';
    }
};