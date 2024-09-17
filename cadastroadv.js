// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('lawyerForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const oab = document.getElementById('oab').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            formMessage.textContent = 'As senhas não coincidem.';
            return;
        }

        if (name && email && oab && password && confirmPassword) {
            formMessage.textContent = 'Registro realizado com sucesso!';
            form.reset();
        } else {
            formMessage.textContent = 'Por favor, preencha todos os campos.';
        }
    });
});
