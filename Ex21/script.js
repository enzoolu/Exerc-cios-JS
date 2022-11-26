document.getElementById('confirmarFahrenheit').addEventListener('click', e => {
    e.preventDefault();

    converterTemperatura();
});

function converterTemperatura() {
    const conversao = document.getElementById('celcius');

    let fahrenheit = document.getElementById('fahrenheit').value;
    let celcius = 5 * (fahrenheit - 32) / 9

    conversao.innerHTML = 'temperarura em celcius: ' + celcius + '°C';
};