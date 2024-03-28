document.getElementById('formularioRegistro').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio do formulário
  
    // Obtém os valores dos campos
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
  
    // Verifica se o campo nome está vazio
    if(nome.trim() === '') {
      alert('Por favor, preencha o campo nome.');
      return;
    }
  
    // Verifica se o email é válido
    if(!/^\S+@\S+\.\S+$/.test(email)) {
      alert('Por favor, insira um endereço de email válido.');
      return;
    }
  
    // Verifica se a senha possui pelo menos 6 caracteres
    if(senha.length < 6) {
      alert('A senha deve ter pelo menos 6 caracteres.');
      return;
    }
  
    alert('Formulário válido! Enviando...');
    window.location.href = 'perfil.html';
  });