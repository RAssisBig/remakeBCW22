import userLogin from "./moduloDados.js";
const alertLogin = new bootstrap.Modal('#alertLogin');
const entrarUsuario = document.getElementById("btnEntrar");

entrarUsuario.addEventListener("click", _event => {
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;
    let validaLogin = userLogin.find(userLogin => userLogin.userName === login);
    if(login === validaLogin.userName && senha === validaLogin.senha){
        window.location.pathname = "/app.html";
    }else{
    alertLogin.show();
    }
});
