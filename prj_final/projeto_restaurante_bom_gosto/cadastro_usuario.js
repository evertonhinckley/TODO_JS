     
        function cadastrar(){
            
        let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]')

        const inputUsuario = document.querySelector('input[name="nome_cad"]')
        const inputEmail = document.querySelector('input[name="email_cad"]')
        const inputSenha = document.querySelector('input[name="senha_cad"]')
        
        if(inputUsuario.value != '' || inputEmail.value != '' || inputSenha.value != '') {

          usuarios.push({
            userCad: inputUsuario.value ,
            emailCad: inputEmail.value,
            senhaCad: inputSenha.value
          })

          localStorage.setItem('usuarios', JSON.stringify(usuarios))
          alert('Cadastrado com sucesso!')
          window.location.href = "login.html"
        }
    }
    
