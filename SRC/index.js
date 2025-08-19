import { fruteirasCard } from './dataset/preparacoes.js';

let getCartao = (fruteira) => {
    // objetivo = calcular idade em meses j
    const dataPlantio = new Date(fruteira.dataPlantio);
    const hoje = new Date();
    let meses = ( hoje.getFullYear() - dataPlantio.getFullYear())* 12;
    meses -= dataPlantio.getMonth();
    meses += hoje.getMonth();
    const idadeEmMeses = meses <= 0 ? 0 : meses;

    const dataFormatada = new Date(fruteira.dataPlantio + 'T00:00:00').toLocaleDateString('pt-BR');

    // Retorna o HTML do card
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

//inserir o HTML do cartão na div principal da pagina
let setCartaoCol = (cartao) => {
    let listaFruteirasDiv = document.getElementById('lista-fruteiras');
    listaFruteirasDiv.insertAdjacentHTML('beforeend', cartao);
};

//iterar sobre a lista de fruteiras e cria um cartão para cada uma
let createCartoes = () => {

    for (let item of fruteirasCard ) {
        // Html completo referente a cada card com o conteúdo.
        let cartao = getCartao(item);

        // Inserir cartão dentro do código html na div com id lista-fruteiras.
        setCartaoCol(cartao);
    }
};

createCartoes();
