import { fruteirasCard } from './dataset/preparacoes.js';// vai importar o array de objetos "fruteirasCard" do arquivo de preparações


let getCartao = (fruteira) => {// Função responsável por montar o HTML de um card de fruteira vai receber um objeto "fruteira" com os dados e retorna o HTML pronto

    const dataPlantio = new Date(fruteira.dataPlantio);// cria um objeto Date com a data de plantio da fruteira
    const hoje = new Date(); // Data atual

    let meses = (hoje.getFullYear() - dataPlantio.getFullYear()) * 12;// calcula a idade em meses: diferença de anos * 12 + diferença de meses
    meses -= dataPlantio.getMonth();// subtrai os meses do ano inicial
    meses += hoje.getMonth();// adiciona os meses do ano atual

    const idadeEmMeses = meses <= 0 ? 0 : meses;// evita que a idade seja negativa se a data de plantio seja no futuro
    const dataFormatada = new Date(fruteira.dataPlantio + 'T00:00:00').toLocaleDateString('pt-BR');// Converte a data de plantio para o formato brasileiro dd/mm/aaaa e o "T00:00:00" garante que o horário não influencie na conversão

    // Retorna o HTML completo do card, o card irá mostrar imagem, nome popular, nome científico, produção e data do plantio
    return `
    <div class="col">
        <div class="card h-100 shadow-sm">
            <img src="${fruteira.src}" class="card-img-top" alt="${fruteira.nomeEspecie}" style="object-fit: cover; height: 200px;">
            <div class="card-header bg-success text-white">
                <h5 class="card-title mb-0">${fruteira.nomeEspecie}</h5>
            </div>
            <div class="card-body">
                <p class="card-text"><strong>Nome Científico:</strong> <em>${fruteira.nomeCientifico}</em></p>
                <p class="card-text"><strong>Produção Média:</strong> ${fruteira.producaoMedia} Kg/safra</p>
                <p class="card-text"><strong>Data do Plantio:</strong> ${dataFormatada}</p>
            </div>
            <div class="card-footer text-muted">
                Idade: ${idadeEmMeses} meses
            </div>
        </div>
    </div>`;
};

let setCartaoCol = (cartao) => { // essa função insere o HTML do card gerado dentro da div principal da pagina
    let listaFruteirasDiv = document.getElementById('lista-fruteiras');// Busca no HTML pelo ID 
    listaFruteirasDiv.insertAdjacentHTML('beforeend', cartao);// "insertAdjacentHTML" insere o conteúdo HTML no final da div existente
};

let createCartoes = () => {// a função vai percorrer a lista de fruteiras e cria um card para cada uma delas
    for (let item of fruteirasCard) {
        let cartao = getCartao(item);// vai gerar o HTML de cada card
        setCartaoCol(cartao);// Insere o card na página
    }
};

createCartoes();// e chama a função para criar todos os cards quando o script for executado
