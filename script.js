// Selecionar Elementos
var input = document.querySelector("input")
var button = document.querySelector(".btn")

button.onclick = buscarCEP

function buscarCEP(){
    let cep = input.value
    input.value = ""
    verificarCEP(cep)

    let tags = ["tr", "td", "td", "td", "td", "td", "td"]
    listaTag = []
    listaTag = criarTags(tags, listaTag)
}

function verificarCEP(cep, listaTag){
    let url = `https://viacep.com.br/ws/${cep}/json/`
           
    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(response => {

            listaTag[1].textContent = response.cep
            listaTag[2].textContent = response.logradouro
            listaTag[3].textContent = response.complemento
            listaTag[4].textContent = response.bairro
            listaTag[5].textContent = response.localidade
            listaTag[6].textContent = response.uf
            listaTag[7].textContent = response.ddd
            
            console.log(response)
        })
}

function criarTags(tags, listaTag) {
    tags.forEach(textoTag => {
        let tag = document.createElement(textoTag)
        listaTag.push(tag)
    });

    return listaTag
}
