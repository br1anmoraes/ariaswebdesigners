function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "Arias" || username === "arias"  && password === "proyectoits") {
        window.location.href = '/html/tareas.html';
        var isLoggedIn = true;
    } else {
        document.getElementById('message').textContent = 'Nombre de usuario o contraseña incorrectos.';
    }

    event.preventDefault();
}

