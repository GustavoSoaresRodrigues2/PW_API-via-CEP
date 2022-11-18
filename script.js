// Selecionar Elementos
var input = document.querySelector("input")
var button = document.querySelector(".btn")

button.onclick = buscarCEP

function buscarCEP(){
    
    let cep = input.value
    verificarCEP(cep)
    
}

function verificarCEP(cep, listaTag){

    let url = `https://viacep.com.br/ws/${cep}/json/`
           
    fetch(url)
        .then(response => {
            return response.json()
        })

        .then(response => {
            let tags = ["tr", "td", "td", "td", "td", "td", "td", "td"]
            let listaTag = []

            listaTag = criarTags(tags, listaTag)
            preencherTDs(listaTag, response)
            inserirNaTela(listaTag, response)
        })

}

function criarTags(tags, listaTag) {
    tags.forEach(textoTag => {
        let tag = document.createElement(textoTag)
        listaTag.push(tag)
    });

    return listaTag
}

function preencherTDs(listaTag, response) {

    listaTag[1].textContent = response.cep
    listaTag[2].textContent = response.logradouro
    listaTag[3].textContent = response.complemento
    listaTag[4].textContent = response.bairro
    listaTag[5].textContent = response.localidade
    listaTag[6].textContent = response.uf
    listaTag[7].textContent = response.ddd
    
}

function inserirNaTela(listaTag) {
    let body = document.querySelector('.corpoTabela')

    body.appendChild(listaTag[0])

    for (let contador = 1; contador < listaTag.length; contador++){

        listaTag[0].appendChild(listaTag[contador])

    }
        
    
}
