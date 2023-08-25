const inserirPeso = document.getElementById('inserirPeso');

document.getElementById('confirmar').addEventListener('click', e => {
    e.preventDefault();

    peso();
});

function peso() {
    let peso = document.getElementById('peso').value;
    let planeta = document.getElementById('planeta').value;

    if(planeta === 'planeta') {
        inserirPeso.innerHTML = 'Selecione um Planeta';
    } else if(planeta === 'mercurio') { 
        let pesoPlaneta1 = (peso / 100) * 0.37;
        inserirPeso.innerHTML = pesoPlaneta1.toFixed(3) + 'Kg';
    } else if(planeta === 'venus') { 
        let pesoPlaneta2 = (peso / 100) * 0.88;
        inserirPeso.innerHTML = pesoPlaneta2.toFixed(3) + 'Kg';
    } else if(planeta === 'marte') { 
        let pesoPlaneta3 = (peso / 100) * 0.38;
        inserirPeso.innerHTML = pesoPlaneta3.toFixed(3) + 'Kg';
    } else if(planeta === 'jupiter') { 
        let pesoPlaneta4 = (peso / 100) * 2.64;
        inserirPeso.innerHTML = pesoPlaneta4.toFixed(3) + 'Kg';
    } else if(planeta === 'saturno') { 
        let pesoPlaneta5 = (peso / 100) * 1.15;
        inserirPeso.innerHTML = pesoPlaneta5.toFixed(3) + 'Kg';
    } else { 
        let pesoPlaneta6 = (peso / 100) * 1.17;
        inserirPeso.innerHTML = pesoPlaneta6.toFixed(3) + 'Kg';
    }
};

