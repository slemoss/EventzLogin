let acesso = document.getElementById('botaoAcesso').onclick = logar

function logar(){
    let login = document.getElementById('login').value
    let senha = document.getElementById('password').value

    if(login == "admin" && senha == "admin123"){
        location.href = "home.html";
    }else{
        alert('Usuário ou senha incorretos.')
    }

    return false
}