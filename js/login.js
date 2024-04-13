document.addEventListener("DOMContentLoaded", function (event) {
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    var senha_ = "admin123";
    var email_ = "email@exemplo.com";

    var button = document.getElementById("btnLogin");
    button.addEventListener("click", function(e) {
        if (email.value.equals(email_) && senha.value.equals(senha_)) {
            alert("Login concluído");
        } else {
            alert("Confira os dados.")
        }
    });
});


