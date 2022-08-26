const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');
const cor = document.querySelectorAll('[data-cor]');

//console.log(color);
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) =>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
    })
})

function manipulaDados(operacao, controle){
    const peca = controle.querySelector('[data-contador]'); //toda vez que clica no controle, tu busca o controle contador dentro dele

    if(operacao === '-'){
        peca.value = parseInt(peca.value) - 1;
    }
    else{
        peca.value = parseInt(peca.value) + 1;
    }
}
function atualizaEstatisticas(peca){
    console.log(pecas[peca]);
    estatisticas.forEach( (elemento) => {
        console.log(elemento.dataset.estatistica);
        console.log(elemento.textContent);
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    })
}
cor.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) =>{
        changeColorRobotron(evento.target.dataset.cor);
    })
})
function changeColorRobotron(cor){
    const image = document.querySelector('#robotron').src = `img/robotron-${cor}.png`;
    //console.log(image);
}
