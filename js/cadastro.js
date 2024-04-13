document.addEventListener("DOMContentLoaded", function (event) {
    inputEmail = document.getElementById("email");
    inputNome = document.getElementById("nome");
    inputTelefone = document.getElementById("telefone");
    inputSenha = document.getElementById("senha");
    confirmaSenha = document.getElementById("confirmaSenha");
    btnCadastro = document.getElementById("btnCadastro");

    btnCadastro.addEventListener("click", function (e) {
        if (inputEmail.value.length === 0 || inputNome.value.length === 0 || inputTelefone.value.length === 0 || inputSenha.value.length === 0 || confirmaSenha.value.length === 0) {
            alert("Preencha todos os campos!");
        } else if (confimaSenha.value != inputSenha.value) {
            alert("Senhas não coincidem!");
        } else {
            window.localStorage.setItem('nome', inputNome.value);
            window.localStorage.setItem('email', inputEmail.value);
            window.localStorage.setItem('senha', inputSenha.value);
            window.localStorage.setItem('telefone', inputTelefone.value);
            alert("Cadastro concluído com sucesso!");
            window.location.href = "./../pages/login.html";
        }
    });
});

$('#telefone').mask('(00) 00000-0000');
