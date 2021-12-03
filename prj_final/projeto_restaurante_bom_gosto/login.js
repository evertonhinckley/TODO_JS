function logar(){
    var usuario = document.getElementById("txt_usuario")
    var senha = document.getElementById("txt_senha")

    let usuarios = []

    let userValid = {
        usuario: '',
        email: '', 
        senha: ''
    }

    usuarios =JSON.parse(localStorage.getItem('usuarios'))

    usuarios.map(item => {
        
        if(usuario.value == item.userCad && senha.value == item.senhaCad){
            
            userValid ={
                usuario: item.userCad,
                email: item.emailCad, 
                senha: item.senhaCad
            }

            window.location.href = "index.html"
            let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
            localStorage.setItem('token', token)
        }

    })
  }

