
const addFruteiraTabela = (fruteira) => {// função (addFruteiraTabela) que vai criar o HTML para uma nova linha da tabela com os dados da fruteira
    const fruteirasTBody = document.getElementById('fruteiras-tbody');// Seleciona o corpo da tabela (tbody) onde as linhas serão inseridas


    const dataPlantio = new Date(fruteira.dataPlantio); // vai calcular a idade da planta em meses explicação mais detalhada no index.js k
    const hoje = new Date();
    let meses = (hoje.getFullYear() - dataPlantio.getFullYear()) * 12;
    meses -= dataPlantio.getMonth();
    meses += hoje.getMonth();
    const idadeEmMeses = meses <= 0 ? 0 : meses;

    const dataFormatada = new Date(fruteira.dataPlantio + 'T00:00:00').toLocaleDateString('pt-BR');

    // cria o HTML da linha da tabela com os dados da fruteira cadastrada
    const fruteiraTr = `<tr>
        <th scope="row">${fruteira.id}</th>
        <td>${fruteira.nomeEspecie}</td>
        <td>${fruteira.nomeCientifico}</td>
        <td>${fruteira.producaoMedia}</td>
        <td>${dataFormatada}</td>
        <td>${idadeEmMeses}</td>
    </tr>`;

    fruteirasTBody.insertAdjacentHTML('beforeend', fruteiraTr);// irá inserir a linha no corpo da tabela
};

const carregarTabela = () => {// essa e a função que carrega as fruteiras já salvas no localStorage para exibir na tabela
    const fruteiras = JSON.parse(localStorage.getItem('fruteiras')) ?? []; // pega os dados armazenados ou cria um array vazio se não houver nada

    for (const fruteira of fruteiras) {// para cada fruteira salva irá adicionar uma linha na tabela
        addFruteiraTabela(fruteira);
    }
};

const setPreparacaoFormValues = (nomeEspecie = '', nomeCientifico = '', producaoMedia = '', dataPlantio = '') => {// função utilitária para preencher ou limpar os campos do formulário
    const nomeEspecieInput = document.querySelector('#nomeEspecie');
    const nomeCientificoInput = document.querySelector('#nomeCientifico');
    const producaoMediaInput = document.querySelector('#producaoMedia');
    const dataPlantioInput = document.querySelector('#dataPlantio');

    nomeEspecieInput.value = nomeEspecie; // vai preencher os campos ou limpar se valores não sejam passados
    nomeCientificoInput.value = nomeCientifico;
    producaoMediaInput.value = producaoMedia;
    dataPlantioInput.value = dataPlantio;
};

const handleSubmit = (event) => {// Função que lidará com o envio do formulário de cadastro de fruteiras
    event.preventDefault(); // vai evita que a página recarregue ao enviar o formulário

    const form = document.getElementById('form-fruteira');
    const formData = new FormData(form);// pega dados do formulàrio usando o FormData.
    const fruteira = Object.fromEntries(formData);// vai converter os dados do FormData em um objeto Js simples

    fruteira.id = Date.now();// gera ID único para a fruteira usando o timestamp atual

    const fruteirasAtuais = JSON.parse(localStorage.getItem('fruteiras')) ?? [];// Recupera as fruteiras já existentes do localStorage
    fruteirasAtuais.push(fruteira);// Adiciona a nova fruteira ao array existente

    localStorage.setItem('fruteiras', JSON.stringify(fruteirasAtuais));// salva o array atualizado no localStorage

    addFruteiraTabela(fruteira);// Adiciona a nova fruteira diretamente na tabela
    form.reset();// vai limpar o formulário após clicar em salvar
    $('#fruteiraModal').modal('toggle');// Fecha o modal apos o cadastro

    Toastify({// Exibe uma notificação de sucesso
        text: 'Item do cardápio adicionado com sucesso!',
        duration: 3000,
    }).showToast();
};

const form = document.getElementById('form-fruteira');
form.addEventListener('submit', handleSubmit);// vai associar a função de submit ao formulário

let body = document.body;
body.onload = carregarTabela;// Quando a página terminar de carregar(onload), chama a função(carregarTabela) para preencher a tabela

