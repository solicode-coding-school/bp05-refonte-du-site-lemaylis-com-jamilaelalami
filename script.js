// Fonction pour traiter la réservation
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    // Récupérer les valeurs du formulaire
    const name = document.getElementById('name').value;
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    const room = document.getElementById('room').value;

    // Afficher un message de confirmation
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.classList.remove('hidden');
    confirmationMessage.innerHTML = `<p>Merci ${name}, votre réservation pour une chambre ${room} du ${checkIn} au ${checkOut} a été confirmée !</p>`;

    // Réinitialiser le formulaire
    document.getElementById('booking-form').reset();
});