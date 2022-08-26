
function limpiar() {
    document.formulario.cedula.value = "";
    document.formulario.nombre.value = "";
    document.formulario.nacimiento.value = "";
    document.formulario.direccion.value = "";
    document.formulario.telefono.value = "";
    document.formulario.fechaInicio.value = "";
    document.formulario.correo.value = "";
    document.formulario.password.value = "";
    document.formulario.horas.value = "";
    document.formulario.precio.value = "";
}

function generarPlanilla() {
    if (document.formulario.precio.value == "" || document.formulario.horas.value == "") {
        alert('Campos de Horas o Precio sin completar!');
    } else {
        var precioHora = document.formulario.precio.value;
        var horas = document.formulario.horas.value;
        var pago;

        if (document.formulario.tipoPago.value == 'ordinario') {
            pago = precioHora * horas;
        } else {
            pago = parseInt(precioHora) * parseInt(horas) * 1.5;
        }
        document.formulario.pago.value = pago;

        Swal.fire({
            title: 'Registro y cálculo realizados',
            text: 'Su salario es de ₡' + pago,
            icon: 'success',
            toast: true,
            confirmButtonColor: "#198754"
        });

        limpiar();

    }
}

