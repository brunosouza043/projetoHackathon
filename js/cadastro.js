document.addEventListener("DOMContentLoaded", function(event) {
        inputEmail = document.getElementById("email");
        inputNome = document.getElementById("nome");
        inputTelefone = document.getElementById("telefone");
        inputSenha = document.getElementById("senha");
        btnCadastro = document.getElementById("btnCadastro");
        
        btnCadastro.addEventListener("click", function(e) {
            alert("cadastro concluído com sucesso");
            window.localStorage.setItem('nome', inputNome.value);
            window.localStorage.setItem('email', inputEmail.value);
            window.localStorage.setItem('senha', inputSenha.value);
            window.localStorage.setItem('telefone', inputTelefone.value);
            
        });
});

$('#telefone').mask('(00) 00000-0000');
