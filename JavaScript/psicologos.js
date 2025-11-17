document.addEventListener('DOMContentLoaded', () => {
    // Lista de nomes dos psicólogos (mesma lista do horarios.js)
    const nomesPsicologos = [
        'Dr. Carlos Eduardo Silva',
        'Dra. Ana Paula Santos',
        'Dr. Roberto Mendes',
        'Dra. Juliana Ferreira',
        'Dr. Fernando Oliveira',
        'Dra. Mariana Costa',
        'Dr. Lucas Almeida',
        'Dra. Beatriz Rodrigues'
    ];

    // Selecionar o container onde os psicólogos serão exibidos
    const container = document.getElementById('lista-psicologos');

    if (container) {
        // Limpar conteúdo existente
        container.innerHTML = '';

        // Criar um elemento h4 com link para cada psicólogo
        nomesPsicologos.forEach(nome => {
            const h4 = document.createElement('h4');
            const link = document.createElement('a');
            link.href = 'Horarios_e_datas.html';
            link.textContent = nome;
            
            // Adicionar evento de clique para salvar o nome no localStorage
            link.addEventListener('click', (e) => {
                localStorage.setItem('psicologoSelecionado', nome);
            });
            
            h4.appendChild(link);
            container.appendChild(h4);
        });
    }
});

