document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos
    var nome = document.getElementById('senha').value;
    var email = document.getElementById('email').value;

    // Verifica se o campo nome está vazio
    if (nome.trim() === '') {
        alert('Por favor, preencha o campo senha.');
        return false;
    }

    // Verifica se o email é válido (expressão regular básica para exemplo)
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Por favor, insira um endereço de email válido.');
        return false;
    }

    alert('Formulário válido! Enviando...');
    window.location.href = 'perfil.html';
});
