// array inicial com algumas fruteiras pré-cadastradas, cada objeto representa uma fruteira(card) com suas propriedades básicas

let fruteirasCard = [
    {
        src: "/assets/image/manga.png", // Caminho da imagem da fruta
        nomeEspecie: "Manga",           // Nome popular
        nomeCientifico: "Mangifera indica", // Nome científico
        producaoMedia: "150",          // Produção média em Kg
        dataPlantio: "2020-01-15"      // Data de plantio no formato ISO
    },
    {
        src: "/assets/image/acerola.png",
        nomeEspecie: "Acerola",
        nomeCientifico: "Malpighia emarginata",
        producaoMedia: "30",
        dataPlantio: "2021-06-10"
    },
    {
        src: "/assets/image/caju.png",
        nomeEspecie: "Caju",
        nomeCientifico: "Anacardium occidentale",
        producaoMedia: "80",
        dataPlantio: "2019-09-20"
    },
    {
        src: "/assets/image/abacate.png",
        nomeEspecie: "Abacate",
        nomeCientifico: "Persea americana",
        producaoMedia: "200",
        dataPlantio: "2022-03-05"
    }
];

let preparacoesfrutas = [];// uma array vazia

let inserirfrutas = () => { };

export { fruteirasCard, preparacoesfrutas, inserirfrutas };// exporta as variáveis e funções para que possam ser usadas em outros arquivos, isso irá permitir a modularizaçao do código

