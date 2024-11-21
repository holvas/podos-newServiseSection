document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            alert('Wiadomość została wysłana!');
        } else {
            alert('Błąd podczas wysyłania wiadomości.');
        }
    })
    .catch(error => {
        console.error('Błąd:', error);
    });
});
