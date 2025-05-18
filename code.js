document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío hasta validar
    const nombreInput = document.getElementById('nombre');
    const telefonoInput = document.getElementById('telefono');
    const correoInput = document.getElementById('correo');
    const contrasenaInput = document.getElementById('contrasena');
    const fechaInput = document.getElementById('fecha');
    const generoInput = document.getElementById('genero');
    const nombre = nombreInput.value.trim();
    const telefono = telefonoInput.value.trim();
    const correo = correoInput.value.trim();
    const contrasena = contrasenaInput.value.trim();
    const fecha = fechaInput.value;
    const genero = generoInput.value;
    const telefonoValidad = /^[0-9]{10}$/;
    let error = false;
    if (nombre === '' || nombre.length < 3) {
        nombreInput.classList.add('input-error');
        alert('El nombre es obligatorio y debe tener al menos 3 caracteres');
        error = true;
    } else {
        nombreInput.classList.remove('input-error');
    }
    if (!telefonoValidad.test(telefono)) {
        telefonoInput.classList.add('input-error');
        alert('Ingrese un número de teléfono válido (solo dígitos, 10 caracteres)');
        error = true;
    } else {
        telefonoInput.classList.remove('input-error');
    }
    if (!correo.includes('@') || !correo.includes('.')) {
        correoInput.classList.add('input-error');
        alert('Ingrese un correo electrónico válido');
        error = true;
    } else {
        correoInput.classList.remove('input-error');
    }
    if (contrasena.length < 6) {
        contrasenaInput.classList.add('input-error');
        alert('La contraseña debe tener al menos 6 caracteres');
        error = true;
    } else {
        contrasenaInput.classList.remove('input-error');
    }
    if (!fecha) {
        fechaInput.classList.add('input-error');
        alert('La fecha de nacimiento es obligatoria');
        error = true;
    } else {
        fechaInput.classList.remove('input-error');
    }
    if (genero === '') {
        generoInput.classList.add('input-error');
        alert('Seleccione un género');
        error = true;
    } else {
        generoInput.classList.remove('input-error');
    }
    if (error) {
        alert('Por favor, corrija los errores antes de enviar el formulario');
        return; // Detener el envío del formulario
    } else {
        alert('Formulario enviado correctamente');
        this.submit(); // Enviar el formulario después de validar
    }
});