//Armazenando os locais onde os números calculados vao aparecer
//const representa uma constante, que serve para armazenar o elemente HTML
//o nome depois de cada const é o nome da constante, poderia ser qualquer outro nome, mas é recomendado dar nome intuitivos
//document é o elemento que busca informaçoes de documento HTML, por isso tem esse nome
//getElementById busca o elemento que possui o ID selecionado no documeento HTML
// usar ; depois de cada comando nao é neceessário, mas é considerado uma boa prática
const exibirSelecionado = document.getElementById('numeroEscolhido');
const exibirSucessor = document.getElementById('sucessor');
const exibirAntecessor = document.getElementById('antecessor');
const exibirDobro = document.getElementById('dobro');
const exibirMetade = document.getElementById('metade');

//o atributo addEventListner vai identificar um evento selecionado, esse evento na maior parte das vezes é o click, mas existem outros
//'click' é a indicaçao do evento que a funçao deve observar
// 'e' é o nome da funçao, poderia ser qualquer outro, o 'e' representa Event
// => se chama arrow function, que é apenas um jeito mais moderno de declarar uma funçao
// e => {} seria a mesma coisa que function(e) {}
/* e.preventDefault é uma funçao pré-existento no JS, que desconsidera o evento padrao, que sempre é recaregar a página, o 'e' aqui é por conta do nome da funçao, 
    se a funcao tivesse outro nome o 'e' seria substituido pelo outo nome */
//calcNumeros é a chamada para a funçao que começa abaixo, tambem é um nome criado e poderia ser qualquer outro
document.getElementById('confirmarNumero').addEventListener('click', e => {
    e.preventDefault();

    calcNumeros();
});

//function calcNumeros() está dando inicio a funçao que foi solicitada acima
// a funçao excuta tudo que estiver dentro das {}
//let é absicamente o memo que const, mas com um valor que pode mudar, os nomes funcionam da mesma forma
/*o document.getElementById('numeroDigitado') seleciona o elemento HTML todo, e nao o valor que foi inserido, o atributo .value faz 
    com que seja armazenado somente o valor na let*/
//os valores obtidos vem em forma de string(texto), mas para fazer as contas eles precisam estar em números, a conversao de string para number é feita pelo atributo parseInt
//parse = passar    Int = inteiro
//o innerHTML insere elementos deiretamenta na página HTML com a seguinte estrutura: elementoHTML.innerHTML = valor que será inserido
//multiplicaçao: *
//divisao: /
function calcNumeros() {
    //armazenar Número Digitado
    let numeroSelecionado = document.getElementById('numeroDigitado').value;
    let conversao = parseFloat(numeroSelecionado);

    //Exibir Número Selecionado
    exibirSelecionado.innerHTML = 'Numero Selecionado: ' + conversao;

    //Exibir e Calcular o Sucessor
    let sucessor = conversao + 1;
    exibirSucessor.innerHTML = 'Sucessor: ' + sucessor;

    //Exibir e Calcular o Antecessor
    let antecessor = conversao - 1;
    exibirAntecessor.innerHTML = 'antecessor: ' + antecessor;

    //Exibir e Calcular o Dobro
    let dobro = conversao * 2;
    exibirDobro.innerHTML = 'dobro: ' + dobro;

    //Exibir e Calcular o Dobro
    let metade = conversao / 2;
    exibirMetade.innerHTML = 'metade: ' + metade;
};