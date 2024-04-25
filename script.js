//Gabriel souza santos

document.getElementById('reservationForm').addEventListener('submit', function(event) {
    
    event.preventDefault(); // Impede o envio padrão do formulário

    // pegar os valores do forms
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let checkin = document.getElementById('checkin').value;
    let checkout = document.getElementById('checkout').value;
    let hospede = document.getElementById('guests').value;

    // Calcular o número de dias de estadia
    let checkinDate = new Date(checkin);
    let checkoutDate = new Date(checkout);
    let timeDiff = checkoutDate.getTime() - checkinDate.getTime();
    let estadia = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Calcula a diferença em dias

 // Verificar se o número de dias é menor que 1
    if (estadia < 1) {
        // Exibir mensagem de aviso ao usuário
        alert('Por favor, selecione datas válidas. A data de check-out deve ser posterior à data de check-in.');
        return; // Interrompe o processamento adicional se houver erro
    }

    // mensagem com detalhes da reserva
    let reservationDetails = `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Data de Check-in:</strong> ${checkin}</p>
        <p><strong>Data de Check-out:</strong> ${checkout}</p>
        <p><strong>Número de Hóspedes:</strong> ${hospede}</p>
        <p><strong>Número de Dias:</strong> ${estadia}</p>

    `;

    // adicionar os dados da reserva a tela
    document.getElementById('reservationDetails').innerHTML = reservationDetails;

    //resetar os campos
    let form = document.getElementById('reservationForm');
    form.reset();

});
