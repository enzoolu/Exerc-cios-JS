document.getElementById('confirmarCelcius').addEventListener('click', e => {
    e.preventDefault();

    converterTemperatura();
});

function converterTemperatura() {
    const conversao = document.getElementById('fahrenheit');

    let celcius = document.getElementById('celcius').value;
    let fahrenheit = 9 / 5 * celcius + 32;

    conversao.innerHTML = 'temperarura em fahrenheit: ' + fahrenheit + '°F';
};