// Função para mudar a aba ativa e exibir o conteúdo correto
function openTab(tabIndex) {
    // Remover a classe 'active' de todas as abas e conteúdos
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    // Adicionar a classe 'active' na aba e conteúdo selecionados
    document.getElementById('tab' + tabIndex).classList.add('active');
    document.getElementById('content' + tabIndex).classList.add('active');
}

// Abre a primeira aba por padrão
openTab(1);
