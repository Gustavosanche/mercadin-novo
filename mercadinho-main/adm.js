document.addEventListener('DOMContentLoaded', function() {
    const adminLoginForm = document.getElementById('adminLoginForm');
    
    adminLoginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Previne o envio padrão do formulário
        
        // Obtém os valores dos campos
        const username = document.getElementById('adminUsername').value;
        const password = document.getElementById('adminPassword').value;
        
        // Aqui você pode definir as credenciais de administrador
        const adminCredentials = {
            username: 'admin',
            password: 'admin123'
        };
        
        // Verifica as credenciais
        if (username === adminCredentials.username && password === adminCredentials.password) {
            // Login bem-sucedido
            alert('Login de administrador bem-sucedido!');
            
            // Armazena informação de que o admin está logado
            localStorage.setItem('adminLoggedIn', 'true');
            
            // Redireciona para a página de cadastro
            window.location.href = 'cadastro.html';
        } else {
            // Login falhou
            alert('Credenciais inválidas. Por favor, tente novamente.');
            
            // Limpa os campos
            document.getElementById('adminUsername').value = '';
            document.getElementById('adminPassword').value = '';
        }
    });

    // Função para fazer logout
    function adminLogout() {
        localStorage.removeItem('adminLoggedIn');
        window.location.href = 'login.html';
    }

    // Função para verificar se o admin está logado
    function checkAdminAuth() {
        const isAdminLoggedIn = localStorage.getItem('adminLoggedIn');
        if (!isAdminLoggedIn && window.location.pathname.includes('cadastro.html')) {
            window.location.href = 'admin.html';
        }
    }

    // Verifica autenticação quando a página carrega
    checkAdminAuth();
});