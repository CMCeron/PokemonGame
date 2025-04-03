let vacio=0;

function isEmpty(input){

    let spanError = input.nextElementSibling.nextElementSibling;
    
    if(!input.value){
        spanError.innerHTML = 'Debes rellenar este campo';

        vacio++;

        return true;
    }else{
        spanError.innerHTML = "";
        spanError=undefined;
        return false;
    }
}

function buscarUsuario(e){
    e.preventDefault();

    isEmpty(document.querySelector('#email'));
    isEmpty(document.querySelector('#pw'));

    if(vacio==0){
        let email = $('#email')[0].value;
        let pw = $('#pw')[0].value;

        $.ajax({
            url: 'http://localhost/PokemonGame/Modules/Login/login.php',
            method: 'post',
            data: { email: email, password: pw },
            success: (data) => {
                if(data == 'success'){
                    window.location.href = 'http://localhost/PokemonGame/Public/';
                }else{
                    alert(data);
                }
            },
            error: (error) => {
                console.error('Error:', error);
            }
        });
    }

    vacio=0;

}