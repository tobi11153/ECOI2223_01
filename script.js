document.getElementById('submitBtn').addEventListener('click', function(event) {
    // Obtenha os valores dos campos do formulário
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let checkin = document.getElementById('checkin').value;
    let checkout = document.getElementById('checkout').value;
    let guests = document.getElementById('guests').value;

    // Construa a mensagem com os detalhes da reserva
    let reservationDetails = `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Data de Check-in:</strong> ${checkin}</p>
        <p><strong>Data de Check-out:</strong> ${checkout}</p>
        <p><strong>Número de Hóspedes:</strong> ${guests}</p>
    `;

    // Atualize a área de detalhes da reserva com as informações
    document.getElementById('reservationDetails').innerHTML = reservationDetails;
   
});
