vacio = 0;

function contrasenaIgual(c1, c2) {
    if(isEmpty(c2)||isEmpty(c1)){
        return;
    }
    if (c1.value == c2.value) {
        spanError.innerHTML = "";
        return true
    }else{
        let spanError = c2.nextElementSibling.nextElementSibling;
        spanError.innerHTML = 'Las contraseñas deben de ser iguales';
        return false;
    }
}

function enviarRegistro(e) {
    e.preventDefault();

    isEmpty(document.querySelector('#username'));
    isEmpty(document.querySelector('#email-reg'));
    isEmpty(document.querySelector('#password-reg'));
    isEmpty(document.querySelector('#password-reg2'));

    if (!contrasenaIgual(
        document.querySelector('#password-reg'),
        document.querySelector('#password-reg2'))
    ){
        return;
    }

    if (vacio == 0) {
        let email = $('#email')[0].value;
        let pw = $('#pw')[0].value;

        $.ajax({
            url: 'http://localhost/PokemonGame/Modules/Register/register.php',
            method: 'post',
            data: { email: email, password: pw },
            success: (data) => {
                if (data == 'success') {
                    window.location.href = 'http://localhost/PokemonGame/Modules/Register/registro.html';
                } else {
                    alert(data);
                }
            },
            error: (error) => {
                console.error('Error:', error);
                alert('Error al crear la cuenta, vuelva a intentarlo');
            }
        });
    }

    vacio = 0;

}