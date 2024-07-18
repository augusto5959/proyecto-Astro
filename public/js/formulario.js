const validarFormulario = () => {
    const nombres = document.getElementById('nombres').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    
    let errores = [];

    if (!nombres) {
        errores.push('El campo de nombres es obligatorio.');
    }

    if (!apellidos) {
        errores.push('El campo de apellidos es obligatorio.');
    }

    if (!correo) {
        errores.push('El campo de correo electrónico es obligatorio.');
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correo)) {
            errores.push('Por favor, ingrese un correo electrónico válido.');
        }
    }

    if (!telefono) {
        errores.push('El campo de teléfono es obligatorio.');
    } else {
        const telefonoRegex = /^09\d{8}$/;
        if (!telefonoRegex.test(telefono)) {
            errores.push('Por favor, ingrese un número de teléfono válido (10 dígitos y debe comenzar con 09).');
        }
    }

    if (errores.length > 0) {
        alert(errores.join('\n'));
        return false;
    }

    document.getElementById('nombres').value = '';
    document.getElementById('apellidos').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('telefono').value = '';

    return true;
};
