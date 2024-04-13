document.addEventListener("DOMContentLoaded", function (event) {
    var inputEmail = document.getElementById("email");
    var inputSenha = document.getElementById("senha");

    var senha_ = window.localStorage.getItem('senha');
    var email_ = window.localStorage.getItem('email');

    var button = document.getElementById("btnLogin");


    button.addEventListener("click", function(e) {
        if (inputEmail.value == window.localStorage.getItem('email') && inputSenha.value == window.localStorage.getItem('senha')) {
            alert("Login concluído");
            window.location.href = "./../index.html";
        } else {
            alert("Confira os dados.")
        }
    });
});


