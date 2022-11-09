document.querySelector("#entrar").onclick = function() {
    const matricula = document.querySelector("#matricula").value;
    const senha = document.querySelector("#senha").value;
    if (matricula == "0000" && senha == "admin") {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    } else {window.alert('LogIn Inválido!')}
}
