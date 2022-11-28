const inserirMedia = document.getElementById('inserirMedia');
const inserirMaior = document.getElementById('inserirMaior');
const inserirMenor = document.getElementById('inserirMenor');
const inserirMulheres = document.getElementById('inserirMulheres');
const inserirHomens = document.getElementById('inserirHomens');
const inserirIdade = document.getElementById('inserirIdade');

let salarios = [];
let somaSalarios = 0;
let mediaSalarial = 0;
let mediaIdade = 0;
let somaIdade = 0;
let genero = [];
let idade = [];

//sortear salários
for(let i = 0; i < 300; i++) {
    let salarioSorteado = Math.random() * 20000;
    let salarioMinimo = 1200;

    if(salarioSorteado <= 20000 && salarioSorteado >= salarioMinimo) {
        salarios.push(parseFloat(salarioSorteado.toFixed(2)));
    } else {
        i = i - 1;
    }
};

//calcular média salárial
for(let i = 0; i < salarios.length; i++) {
    somaSalarios += salarios[i];

    mediaSalarial = somaSalarios / 300;
};

//maior salário
inserirMaior.innerHTML = 'Maior salário: R$' + Math.max.apply(null, salarios);

//menos salário
inserirMenor.innerHTML = 'Menor salário: R$' + Math.min.apply(null, salarios);

//sortear homens e mulheres
for(let i = 0; i < 300; i++) {
    let sortearGenero = Math.random();

    genero.push(sortearGenero.toFixed(0));
};
let homens = genero.filter(homens => homens == '1');

let mulheres = genero.filter(mulheres => mulheres == '0');

//sortear idade
for(let i = 0; i < 300; i++) {
    let idadeSorteada = Math.random() * 100;

    if(idadeSorteada <= 100) {
        idade.push(parseInt(idadeSorteada.toFixed(0)));
    } else {
        i = i - 1;
    }
};

//calcular média de idade
for(let i = 0; i < idade.length; i++) {
    somaIdade += idade[i];

    mediaIdade = somaIdade / 300;
};

//inserir dados
inserirMedia.innerHTML = 'A média salárial é de R$' + mediaSalarial.toFixed(2);
inserirMulheres.innerHTML = mulheres.length + ' são mulheres';
inserirHomens.innerHTML = homens.length + ' são homens';
inserirIdade.innerHTML = 'A média de idade é de ' + mediaIdade.toFixed(1) + ' anos';