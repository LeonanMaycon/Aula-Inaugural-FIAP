document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('.content');
    content.style.opacity = '0';
    content.style.transition = 'opacity 1s ease-in';
    setTimeout(() => {
        content.style.opacity = '1';
    }, 100);
});

document.getElementById('groupForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const names = [];
    for (let i = 1; i <= 5; i++) {
        const nameValue = document.getElementById(`name${i}`).value.trim();
        if (nameValue) {
            names.push(nameValue);
        }
    }

    const message = document.getElementById('history').value.trim();

    const data = {
        names: names,
        message: message
    };

    try {
        const response = await fetch('https://fsdt-contact.onrender.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Informações enviadas com sucesso!');
            document.getElementById('groupForm').reset();
        } else {
            throw new Error('Erro ao enviar os dados');
        }
    } catch (error) {
        alert('Ocorreu um erro ao enviar as informações. Por favor, tente novamente.');
        console.error('Erro:', error);
    }
}); 