function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var username = username.toLowerCase();
    if (username === "arias" && password === "proyectoits") {
        window.location.href = '/html/tareas.html';
    } else {
        document.getElementById('message').textContent = 'Nombre de usuario o contraseña incorrectos.';
    }

    event.preventDefault();
}



