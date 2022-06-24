const control = document.querySelectorAll("[data-control]")
const static = document.querySelectorAll("[data-static]")

const parts = {
    "arms": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "shielding": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nuclei":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "legs":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "rockets":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

control.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.ask)
    })
})

function manipulaDados(operacao, control) {
    const ask = control.querySelector("[data-counter]")

    if(operacao === "-") {
        ask.value = parseInt(ask.value) - 1
    } else {
        ask.value = parseInt(ask.value) + 1
    }
}

function atualizaEstatistica(peca) {
    static.forEach( (elemento ) => {
        elemento.textContent = parseInt(elemento.textContent) + parts[peca][elemento.dataset.static]
    })
}