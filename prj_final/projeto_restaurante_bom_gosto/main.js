//var usuarioLogado = sessionStorage.getItem('usuarioLogado');

if (localStorage.getItem('token') == null) {
    alert("Você não está autenticado!");
    window.location.href = "login.html"
}

function sair(){
    localStorage.removeItem('token');
    window.location.href = "login.html"
}