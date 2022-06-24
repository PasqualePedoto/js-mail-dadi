// # Creiamo una lista di email valide

const emailList = ['pasquale@gmail.com', 'tunnuzzoo@gmail.com', 'marco@gmail.com', 'fabio@gmail.com', 'francesca@gmail.com', 'fabrizio@gmail.com', 'enrico@gmail.com'];

// # Bersagliamo il button e il form dell'email

const button = document.getElementById('confirm-button');
const emailForm = document.getElementById('exampleFormControlInput1');

let exist = null;

button.addEventListener('click', function () {
    // * Definiamo il controllo che verifica la presenza dell'email
    // * fornita in input all'interno della lista di email valide

    for (let i = 0; i < emailList.length; i++) {
        exist = emailList[i] === emailForm.value ? 1 : 0;
    }

    // L'alert va messo fuori altrimenti crea problemi al ciclo for
    if (exist) alert('Benvenuto!');
    else alert('Spiacenti, email non valida.');
})