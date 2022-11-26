const inserirNome = document.getElementById('inserirNome');
const inserirIdade = document.getElementById('inserirIdade');
const inserirCargo = document.getElementById('inserirCargo');
const inserirSalarioBruto = document.getElementById('inserirSalarioBruto');
const inserirValorBonus = document.getElementById('inserirValorBonus');
const inserirValorDesconto = document.getElementById('inserirValorDesconto');
const inserirSalarioFinal = document.getElementById('inserirSalarioFinal');

document.getElementById('confirmarDados').addEventListener('click', e => {
    e.preventDefault();

    inserirDados();
});

function inserirDados() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    let cargo = document.getElementById('cargo').value;
    let salarioBruto = document.getElementById('salario').value;

    let salarioBrutoInt = parseInt(salarioBruto);

    let reajuste = salarioBrutoInt * 0.38;
    let salarioBrutoReajuste = salarioBrutoInt + reajuste;
    let valorBonus = salarioBrutoReajuste * 0.20;
    let valorDesconto = salarioBrutoReajuste * 0.15;

    let salarioFinal = salarioBrutoReajuste + valorBonus - valorDesconto;
    
    inserirNome.innerHTML = 'Nome: ' + nome;
    inserirIdade.innerHTML = 'Idade: ' + idade;
    inserirCargo.innerHTML = 'Cargo: ' + cargo;
    inserirSalarioBruto.innerHTML = 'Salário Bruto: R$' + salarioBrutoReajuste.toFixed(2);
    inserirValorBonus.innerHTML = 'Bonûs: R$' + valorBonus.toFixed(2);
    inserirValorDesconto.innerHTML = 'Valor Descontado: R$' + valorDesconto.toFixed(2);
    inserirSalarioFinal.innerHTML = 'Salário Final: R$' + salarioFinal.toFixed(2);
};
