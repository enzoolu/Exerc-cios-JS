const inserirNome = document.getElementById('inserirNome');
const inserirSalarioBruto = document.getElementById('inserirSalarioBruto');
const inserirDescontoIR = document.getElementById('inserirDescontoIR');
const inserirDescontoINSS = document.getElementById('inserirDescontoINSS');
const inserirSalarioFinal = document.getElementById('inserirSalarioFinal');

document.getElementById('confirmarDados').addEventListener('click', e => {
    e.preventDefault();

    calcSalario();
});

function calcSalario() {
    let horasTrabalhadas = parseInt(document.getElementById('horasTrabalhadas').value);
    let dependentes = parseInt(document.getElementById('dependentes').value);
    let nome = document.getElementById('nome').value;

    let salarioBruto = horasTrabalhadas * 98 + dependentes * 80;
    let descontoIR = salarioBruto * 0.05;
    let descontoINSS = salarioBruto * 0.085;
    let salarioFinal = salarioBruto - descontoIR - descontoINSS;

    inserirNome.innerHTML = 'Nome: ' + nome;
    inserirSalarioBruto.innerHTML = 'Salário Bruto: R$' + salarioBruto.toFixed(2);
    inserirDescontoIR.innerHTML = 'Desconto IR: R$' + descontoIR.toFixed(2);
    inserirDescontoINSS.innerHTML = 'Desconto INSS: R$' + descontoINSS.toFixed(2);
    inserirSalarioFinal.innerHTML = 'Salário Final: R$' + salarioFinal.toFixed(2);
};