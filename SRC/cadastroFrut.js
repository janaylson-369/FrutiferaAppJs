// vai Cria o HTML para uma nova linha da tabela com os dados da fruteira
const addFruteiraTabela = (fruteira) => {
    // Seleciona o corpo da tabela onde as linhas serão inseridas
    const fruteirasTBody = document.getElementById('fruteiras-tbody');
    
    // idade das planta
    const dataPlantio = new Date(fruteira.dataPlantio);
    const hoje = new Date();
    let meses = (hoje.getFullYear() - dataPlantio.getFullYear()) * 12;
    meses -= dataPlantio.getMonth();
    meses += hoje.getMonth();
    // para que a idade não seja negativa se a data for no futuro
    const idadeEmMeses = meses <= 0 ? 0 : meses;

    // Formata a data de plantio para o padrão brasileiro (dd/mm/aaaa), o T00:00:00 evita problemas com fuso horario
    const dataFormatada = new Date(fruteira.dataPlantio + 'T00:00:00').toLocaleDateString('pt-BR');

    const fruteiraTr = `<tr>
        <th scope="row">${fruteira.id}</th>
        <td>${fruteira.nomeEspecie}</td>
        <td>${fruteira.nomeCientifico}</td>
        <td>${fruteira.producaoMedia}</td>
        <td>${dataFormatada}</td>
        <td>${idadeEmMeses}</td>
    </tr>`;

    fruteirasTBody.insertAdjacentHTML('beforeend', fruteiraTr);
};

// Carrega as fruteiras salvas no localStorage e as exibe na tabela.
const carregarTabela = () => {
    const fruteiras = JSON.parse(localStorage.getItem('fruteiras')) ?? [];
    for (const fruteira of fruteiras) {
        addFruteiraTabela(fruteira);
    }
};

// preencher ou limpar os campos do formulário no HTML
const setPreparacaoFormValues = (nomeEspecie = '', nomeCientifico = '', producaoMedia = '', dataPlantio = '') => {
    const nomeEspecieInput = document.querySelector('#nomeEspecie');
    const nomeCientificoInput = document.querySelector('#nomeCientifico');
    const producaoMediaInput = document.querySelector('#producaoMedia');
    const dataPlantioInput = document.querySelector('#dataPlantio');

    nomeEspecieInput.value = nomeEspecie;
    nomeCientificoInput.value = nomeCientifico;
    producaoMediaInput.value = producaoMedia;
    dataPlantioInput.value = dataPlantio;
};


//manipular o evento do envio do formulário de cadastro de fruteira 
const handleSubmit = (event) => {
    event.preventDefault();

    // dados do formulário a>> criação do objeto.
    const form = document.getElementById('form-fruteira');
    const formData = new FormData(form);
    const fruteira = Object.fromEntries(formData);

    // Adiciona o ID único gerado automaticamente
    fruteira.id = Date.now();

    // Pega os itens que JÁ EXISTEM no localStorage. Se não houver nenhum, cria um array vazio.
    const fruteirasAtuais = JSON.parse(localStorage.getItem('fruteiras')) ?? [];

    // Adiciona a nova fruteira ao array que acabamos de carregar.
    fruteirasAtuais.push(fruteira);

    // Salva o array COMPLETO E ATUALIZADO de volta no localStorage.
    localStorage.setItem('fruteiras', JSON.stringify(fruteirasAtuais));

    // Adicionar na tabela.
    addFruteiraTabela(fruteira);

    // Limpar os valores do formulário.
    form.reset();
    
    //  fechar o modal.
    $('#fruteiraModal').modal('toggle');

    // Exibe uma notificação de sucesso.
    Toastify({
        text: 'Item do cardápio adicionado com sucesso!',
        duration: 3000,
    }).showToast();
};


const form = document.getElementById('form-fruteira');
form.addEventListener('submit', handleSubmit);

let body = document.body;
body.onload = carregarTabela;
