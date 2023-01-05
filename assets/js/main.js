const form = document.querySelector('.form')

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputTamanho = event.target.querySelector('.input-tamanho')
    const inputPeso = event.target.querySelector('.input-peso');
    const tamanho = Number(inputTamanho.value);
    const peso = Number(inputPeso.value);

    if (!tamanho) {
        setResult('Tamanho Inválido', false);
        return;
    }
    if (!peso) {
        setResult('Peso Inválido', false);
        return;
    }
    console.log (peso, tamanho);
    const imc = getImc(tamanho, peso);
    const classImc = getClassImc(imc)
    setResult(`Seu IMC é de: ${imc} (${classImc})`, true);

});

function getClassImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3']
    if (imc >= 40) return nivel[5];
    if (imc >= 35) return nivel[4];
    if (imc >= 30) return nivel[3];
    if (imc >= 25) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
};

function getImc (tamanho,peso) {
    const imc = peso/(tamanho**2);
    return imc.toFixed(1);
};

function criaParagrafo () {
    //Cria um elemento HTML
    const p = document.createElement('p')
    return p

};

function setResult (msg, isValid) {
    const resultado = document.querySelector('.resultado');
    //Define resultado como vazio
    resultado.innerHTML = ''
    //Criando paragrafo
    const p = criaParagrafo()
    if (isValid) {
        //Add uma classe
        p.classList.add('p_result');
    } else {
        //Add uma classe
        p.classList.add('p_error');
    }
    //Add texto
    p.innerText = msg
    //Inserir o elemento p em resultado
    resultado.appendChild(p)
};