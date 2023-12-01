document.addEventListener('DOMContentLoaded', function () {
    // Formulario
    var form = document.querySelector('form');

    // Agrega un escucha de evento de envío al formulario
    form.addEventListener('submit', function (event) {
        // Evita la presentación predeterminada del formulario
        event.preventDefault();

        // Obtiene los valores de los campos del formulario
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        // Muestra una alerta con los datos del formulario
        alert('Nombre: ' + name + '\nCorreo electrónico: ' + email + '\nMensaje: ' + message);

    });
});
