const cardNovaLista = document.getElementById('cardNovaLista');
const btnNovaLista = document.getElementById('btnNovaLista');
const btnCancelar = document.getElementById('btnCancelar');

btnNovaLista.addEventListener('click', function(){
    cardNovaLista.style.display = 'block';
})

btnCancelar.addEventListener('click', function(){
    cardNovaLista.style.display = 'none';
})