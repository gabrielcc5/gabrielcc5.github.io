document.addEventListener('DOMContentLoaded', () => {
    // Arrays com opções aleatórias
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

    const descricoes = [
        'Psicólogo clínico especializado em terapia cognitivo-comportamental com mais de 10 anos de experiência. Atende adultos e adolescentes.',
        'Psicóloga especialista em ansiedade e depressão. Formada pela USP com pós-graduação em terapia de casais.',
        'Psicólogo com foco em desenvolvimento pessoal e autoestima. Utiliza técnicas de mindfulness e terapia humanista.',
        'Psicóloga clínica especializada em transtornos alimentares e imagem corporal. Atende presencialmente e online.',
        'Psicólogo especialista em terapia familiar e relacionamentos. Mais de 15 anos de experiência clínica.',
        'Psicóloga com especialização em psicologia positiva e bem-estar. Atende jovens adultos e profissionais.',
        'Psicólogo clínico com foco em traumas e TEPT. Formado em EMDR e outras técnicas especializadas.',
        'Psicóloga especialista em gestão de estresse e burnout. Ideal para profissionais em alta demanda.'
    ];

    const diasSemana = [
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado'
    ];

    const horarios = [
        '08:00',
        '09:00',
        '10:00',
        '11:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00'
    ];

    // Função para gerar data aleatória nos próximos 30 dias
    function gerarDataAleatoria() {
        const hoje = new Date();
        const diasAdicionar = Math.floor(Math.random() * 30) + 1; // Entre 1 e 30 dias
        const data = new Date(hoje);
        data.setDate(hoje.getDate() + diasAdicionar);
        
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();
        
        return `${dia}/${mes}/${ano}`;
    }

    // Função para selecionar item aleatório de um array
    function itemAleatorio(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    // Selecionar elementos do DOM
    const nomePsicologo = document.querySelector('.nome-psicologo');
    const descricaoPsicologo = document.querySelector('.descricao-psicologo');
    const diaSemana = document.querySelector('.dia-semana');
    const dataHorario = document.querySelector('.data-horario');

    // Preencher com valores aleatórios
    if (nomePsicologo) {
        // Verificar se há um psicólogo selecionado no localStorage
        const psicologoSelecionado = localStorage.getItem('psicologoSelecionado');
        if (psicologoSelecionado && nomesPsicologos.includes(psicologoSelecionado)) {
            // Usar o nome selecionado na página Psicólogos
            nomePsicologo.textContent = psicologoSelecionado;
            
            // Encontrar o índice do psicólogo selecionado para usar a descrição correspondente
            const indicePsicologo = nomesPsicologos.indexOf(psicologoSelecionado);
            if (descricaoPsicologo && indicePsicologo !== -1) {
                descricaoPsicologo.textContent = descricoes[indicePsicologo];
            }
            
            // Limpar o localStorage após usar
            localStorage.removeItem('psicologoSelecionado');
        } else {
            // Se não houver seleção, usar nome e descrição aleatórios
            const indiceAleatorio = Math.floor(Math.random() * nomesPsicologos.length);
            nomePsicologo.textContent = nomesPsicologos[indiceAleatorio];
            if (descricaoPsicologo) {
                descricaoPsicologo.textContent = descricoes[indiceAleatorio];
            }
        }
    } else if (descricaoPsicologo) {
        // Se não houver nomePsicologo mas houver descricao, usar descrição aleatória
        descricaoPsicologo.textContent = itemAleatorio(descricoes);
    }

    if (diaSemana) {
        diaSemana.textContent = `Dia da semana: ${itemAleatorio(diasSemana)}`;
    }

    if (dataHorario) {
        const data = gerarDataAleatoria();
        const horario = itemAleatorio(horarios);
        dataHorario.textContent = `Data e Horário: ${data} às ${horario}`;
    }
});

