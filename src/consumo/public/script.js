// Navegação entre abas
const tabs = document.querySelectorAll('nav button');
const sections = document.querySelectorAll('.tab');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Remove a classe "active" de todas as seções
        sections.forEach(section => section.classList.remove('active'));

        // Adiciona a classe "active" apenas à seção correspondente
        sections[index].classList.add('active');
    });
});

// Cadastro de Consumo
document.getElementById('cadastro-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const usuarioId = document.getElementById('usuarioId').value;
    const quantidade = document.getElementById('quantidade').value;
    const dataLeitura = document.getElementById('dataLeitura').value;

    try {
        const response = await fetch('http://localhost:3000/consumo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ usuarioId, quantidade, dataLeitura })
        });

        const mensagem = response.ok ? 'Consumo cadastrado com sucesso!' : 'Erro ao cadastrar consumo.';
        document.getElementById('cadastro-mensagem').textContent = mensagem;
    } catch (error) {
        document.getElementById('cadastro-mensagem').textContent = 'Erro ao conectar com o servidor.';
    }
});

// Histórico de Consumo
document.getElementById('historico-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const usuarioId = document.getElementById('historico-usuarioId').value;
    const inicio = document.getElementById('inicio').value;
    const fim = document.getElementById('fim').value;

    try {
        const response = await fetch(`http://localhost:3000/consumo/historico?usuarioId=${usuarioId}&inicio=${inicio}&fim=${fim}`);
        const dados = await response.json();

        const tabela = document.getElementById('historico-table');
        tabela.innerHTML = '';
        dados.forEach(dado => {
            tabela.innerHTML += `
        <tr>
          <td>${dado.id}</td>
          <td>${dado.quantidade}</td>
          <td>${new Date(dado.dataLeitura).toLocaleDateString()}</td>
        </tr>
      `;
        });
    } catch (error) {
        alert('Erro ao consultar histórico.');
    }
});

document.getElementById('alertas-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const usuarioId = document.getElementById('alertas-usuarioId').value;

    try {
        const response = await fetch(`http://localhost:3000/consumo/alertas?usuarioId=${usuarioId}`);
        const alerta = await response.json(); // Espera um objeto, não um array
        console.log(alerta);

        const lista = document.getElementById('alertas-list');
        lista.innerHTML = ''; // Limpar a lista de alertas

        if (alerta.alerta) {
            lista.innerHTML = `<li>${alerta.mensagem}</li>`; // Exibe a mensagem do alerta
        } else {
            lista.innerHTML = '<li>Nenhum alerta encontrado.</li>';
        }

    } catch (error) {
        alert('Erro ao consultar alertas.');
        console.error('Erro ao consultar alertas:', error); // Imprimir erro no console para depuração
    }
});
