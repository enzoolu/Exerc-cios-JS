//calcular FORÇA
let forca = (Math.random() * 50).toFixed(0);
console.log('Força: ' + forca);

//calcular AGILIDADE
let agilidade = (Math.random() * 50).toFixed(0);
console.log('Agilidade: ' + agilidade);

//calcular DANO
let dano = (Math.random() * 50).toFixed(0);
console.log('Dano: ' + dano);

//calcular XP
let xp = (forca * agilidade) / dano

//classificaçao
if(xp <= 9) {
    console.log('Classificação: Péssimo');
} else if(xp <= 18) {
    console.log('Classificação: Ruim');
} else if(xp <= 27) {
    console.log('Classificação: Normal');
} else if(xp <= 36) {
    console.log('Classificação: Bom');
} else if(xp > 36) {
    console.log('Classificação: Ótimo');
};