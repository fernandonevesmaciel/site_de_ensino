
// Aguarda o carregamento completo do HTML antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // Variável para armazenar os dados das falhas depois de carregados
    let listaDeFalhas = [];

   
    // Elementos da página
    const inputBusca = document.getElementById('codigoFalhaInput');
    const botaoBusca = document.getElementById('buscarBtn');
    const divResultado = document.getElementById('resultado');
    const spanCausa = document.getElementById('causa');
    const ulCausasProvaveis = document.getElementById('causasProvaveis');
    const pMensagemErro = document.getElementById('mensagemErro');

    // Caminho para o arquivo JSON.
    // Ajuste se a estrutura de pastas for diferente.
    const urlJSON = 'falhasg120c.json';

    // Carrega os dados do arquivo JSON
    fetch(urlJSON)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na rede: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            listaDeFalhas = data;
        })
        .catch(error => {
            console.error('Erro ao carregar o arquivo de falhas:', error);
            pMensagemErro.textContent = 'Não foi possível carregar os dados das falhas. Verifique o console para mais detalhes.';
            pMensagemErro.style.display = 'block';
        });

    // Função principal para buscar a falha
    function buscarFalha() {
        const codigoDigitado = inputBusca.value.trim().toUpperCase();

        // Esconde mensagens anteriores
        divResultado.style.display = 'none';
        pMensagemErro.style.display = 'none';

        if (codigoDigitado === '') {
            pMensagemErro.textContent = 'Por favor, digite um código de falha.';
            pMensagemErro.style.display = 'block';
            return;
        }

        const falhaEncontrada = listaDeFalhas.find(falha => falha.codigo.toUpperCase() === codigoDigitado);

        if (falhaEncontrada) {
            // Se encontrou a falha, exibe os resultados
            spanCausa.textContent = falhaEncontrada.causa;

            // Limpa a lista de causas anteriores
            ulCausasProvaveis.innerHTML = '';

            // Adiciona as novas causas como itens da lista
            falhaEncontrada.causasProvaveis.forEach(textoCausa => {
                const li = document.createElement('li');
                li.textContent = textoCausa;
                ulCausasProvaveis.appendChild(li);
            });

            divResultado.style.display = 'block';
        } else {
            // Se não encontrou, exibe mensagem de erro
            pMensagemErro.textContent = `Código de falha "${codigoDigitado}" não encontrado. Verifique se foi digitado corretamente.`;
            pMensagemErro.style.display = 'block';
        }
    }

    // Adiciona o evento de clique ao botão
    botaoBusca.addEventListener('click', buscarFalha);

    // Adiciona o evento de "Enter" no campo de input
    inputBusca.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            buscarFalha();
        }
    });
});