const container = document.getElementById('container')
const btn_adcionar = document.getElementById('btn_adcionar')
const btn_salvar = document.getElementById('btn_salvar')
const divListas = document.getElementById('listas')


let listas = []

btn_adcionar.addEventListener('click', function() {
  container.style.display = 'block'
})

btn_salvar.addEventListener('click', function(event) {
  event.preventDefault()
  const inputAmbiente = document.querySelector('input[name="ambiente"]')
  const inputNumeroMesa = document.querySelector('input[name="numeroMesa"]')
  const inputQtdLugares = document.querySelector('input[name="qtdLugares"]')
  
  if(inputAmbiente.value != '' || inputNumeroMesa.value != '' || inputQtdLugares.value != '') {
    const novaLista = {
      id: listas.length + 1,
      titulo: inputAmbiente.value,
      NumeroMesa: inputNumeroMesa.value,
      qtdLugares: inputQtdLugares.value
    }

    inputAmbiente.value = ''
    inputNumeroMesa.value = ''
    inputQtdLugares.value = ''
    listas.push(novaLista)
    window.localStorage.listas = JSON.stringify(listas)
    renderList()
  }
})

btn_cancelar.addEventListener('click', function(event) {
  container.style.display = 'none'
})

// função para adicionar os itens na tela
function renderList () {
  // lendo as listas salvas no localStorage
  listas = JSON.parse(window.localStorage.listas)
  //limpando a div que recebe os cards das listas
  divListas.innerHTML = ""
  // para cada lista no array de listas, cria um novo card na tela
  listas.map(lista => {
    //criando um titulo pro card
    let tagAmbiente = document.createElement('span')
    let tagNrMesa = document.createElement('span')
    let tagQtdMesa = document.createElement('span')

    // add o título da lista salva no título do card
    tagAmbiente.innerHTML = lista.titulo
    tagAmbiente.style.marginRight = "500px"
    tagAmbiente.style.marginLeft = "50px"
    

    tagNrMesa.innerHTML =lista.NumeroMesa
    tagNrMesa.style.marginRight = "530px"
    tagNrMesa.style.marginLeft = "-225px"
   

    tagQtdMesa.innerHTML =lista.qtdLugares
    tagQtdMesa.style.marginRight = "263px"
    tagQtdMesa.style.marginLeft = "-265px"
   
   

    // cria btn
    let btnAlterar = document.createElement('BUTTON')
    let btnApagar = document.createElement('BUTTON')
    //adiciona texto ao btn
    btnAlterar.innerHTML = "Alterar"
    btnAlterar.style.right = "70px"
    btnAlterar.style.position= "absolute"


    btnApagar.innerHTML = "Apagar"
    btnApagar.style.right = "10px"
    btnApagar.style.position= "absolute"

    btnApagar.addEventListener('click', function(event){
      localStorage.removeItem('tagAmbiente')
      document.location.reload(true)
    })

    //cria uma div para ser o card da lista
    let divTag = document.createElement('DIV')
    // add a classe card-lista a div para o css
    divTag.setAttribute('class','card-lista')
    //add o h2 a div
    divTag.appendChild(tagAmbiente)
    divTag.appendChild(tagNrMesa)
    divTag.appendChild(tagQtdMesa)

    // add o btnAddItem a div
    divTag.appendChild(btnAlterar)
    divTag.appendChild(btnApagar)
    // add a div.card-lista a div que contem todas as listas na tela
    divListas.appendChild(divTag)
  })
}

// verifica se existe algo no localStorage para iniciar
if (window.localStorage.listas?.length > 0) {
  renderList()
}
