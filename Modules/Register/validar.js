vacio = 0;

function contrasenaIgual(c1, c2) {
    let spanError = c2.nextElementSibling.nextElementSibling;
    if (isEmpty(c2) || isEmpty(c1)) {
        return;
    }
    if (c1.value == c2.value) {
        spanError.innerHTML = "";
        return true
    } else {
        spanError.innerHTML = 'Las contraseñas deben de ser iguales';
        return false;
    }
}

function enviarRegistro(e) {
    vacio = 0;
    e.preventDefault();

    isEmpty(document.querySelector('#username'));
    isEmpty(document.querySelector('#email-reg'));
    isEmpty(document.querySelector('#password-reg'));
    isEmpty(document.querySelector('#password-reg2'));

    if (!contrasenaIgual(
        document.querySelector('#password-reg'),
        document.querySelector('#password-reg2'))
    ) {
        return;
    }

    if (vacio == 0) {
        /* let email = ;
        let username = ;
        let pw = ; */

        $.ajax({
            url: 'http://localhost/PokemonGame/Modules/Register/register.php',
            method: 'post',
            data: {
                username: $('#username')[0].value,
                emailReg: $('#email-reg')[0].value,
                passwordReg: $('#password-reg')[0].value,
            },
            success: (data) => {
                data = JSON.parse(data);
                if (data.success) {
                    window.location.href = 'http://localhost/PokemonGame/Modules/Register/registro.html';
                } else {
                    alert(data[1]);
                }
            },
            error: (error) => {
                console.error('Error:', error);
                alert('Error al crear la cuenta, vuelva a intentarlo');
            }
        });
    }

}