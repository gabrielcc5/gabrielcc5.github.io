document.addEventListener('DOMContentLoaded', () => {
    const nome = document.querySelector('.Nome_completo');
    const Confirmar_agendamento = document.querySelector('.Confirmar_agendamento');

    if (Confirmar_agendamento) {
        Confirmar_agendamento.addEventListener('click', () => {
            const nomeCompleto = nome ? nome.value : '';
            if (nomeCompleto) {
                alert(`Consulta agendada para ${nomeCompleto}!`);
            } else {
                alert('Consulta agendada!');
            }
        });
    }
});


