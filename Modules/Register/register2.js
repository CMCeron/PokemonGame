let imgPlayer = document.getElementById('playerImg');
let imgPlayerBg = document.querySelector('.fondo.player');
let imgPokemonBg = document.querySelector('.fondo.pokemon');
let card = document.querySelector('.card');
let message = document.querySelector('.message');

function selectSexo(selectedButton) {
    document.querySelectorAll('.sexo button').forEach(button => {
        button.classList.remove('active');
    });
    selectedButton.classList.add('active');
    if (selectedButton.innerHTML == 'Chica') {
        imgPlayer.src = "../../Assets/Player/G_Standing.png";
        imgPlayerBg.src = "../../Assets/Player/G_Standing.png";
    } else {
        imgPlayer.src = "../../Assets/Player/B_Standing.png";
        imgPlayerBg.src = "../../Assets/Player/B_Standing.png";
    }
}

function selectPokemon(selectedOption) {
    document.querySelectorAll('.pokemonOpt').forEach(option => {
        option.classList.remove('active');
    });
    selectedOption.classList.add('active');
    imgPokemonBg.src = selectedOption.querySelector('img').src;
}

// Submit Event
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let id
    switch (document.querySelector('.pokemonOpt.active p').innerHTML) {
        case 'Bulbasur':
            id = 1;
            break;
        case 'Charmander':
            id = 2;
            break;
        case 'Squirtle':
            id = 3;
            break;
    }

    let selectedSexo = document.querySelector('.sexo .active').innerHTML;
    let selectedPokemon = new Pokemon(
        id,
        'aliado',
        false,
        100
    )

    selectedSexo == 'Chico' ? selectedSexo = 'B' : selectedSexo = 'G';


    $.ajax({
        url: 'http://localhost/PokemonGame/Modules/Register/register2.php',
        method: 'post',
        data: {
            sexo: selectedSexo,
            pokemon: JSON.stringify(selectedPokemon)
        },
        success: (data) => {
            if (data.success) {
                // Que la card desaparezca
                card.style.opacity = 0;
                card.style.transition = 'opacity 1s ease';

                // Imprimir mensaje por pantalla
                setTimeout(() => {
                    card.style.display = 'none';
                    message.style.display = 'block';
                }, 1000);

                // Redireccionar hacia el juego
                if(selectPokemon.nombre){
                    setTimeout(() => {
                        window.location.href = './../../Public/';
                    }, 3000);
                }

                

            } else {
                alert('Error: ' + data.message);
            }
        },
        error: (error) => {
            console.error('Error:', error);
            alert('An error occurred while submitting the form.');
        }
    });
});


// Cojer nombre de usuario
$.ajax({
    url: 'http://localhost/PokemonGame/Modules/Register/username.php',
    method: 'get',
    success: (data) => {
        document.querySelector('span.username').innerHTML = data;
    },
    error: (error) => {
        console.error('Error:', error);
        alert('Error al crear la cuenta, vuelva a intentarlo');
    }
});