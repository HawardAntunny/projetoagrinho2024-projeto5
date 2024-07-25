// script.js

const botoes = document.querySelectorAll(".step");
const textoInfo = document.getElementById("info-text");
const imagemInfo = document.getElementById("info-image");

const imagens = [
    "img/plantio.jpeg",
    "img/crescimento.jpeg", // Substitua com o nome da imagem para crescimento
    "img/colheita.jpeg",
    "img/processamento.jpeg", // Substitua com o nome da imagem para processamento
    "img/distribuicao.jpeg" // Substitua com o nome da imagem para distribuição
];

const textos = [
    "O plantio é a primeira etapa do ciclo alimentar, onde as sementes são colocadas no solo e começam a germinar.",
    "Durante o crescimento, as plantas se desenvolvem e se fortalecem, absorvendo nutrientes e água do solo.",
    "A colheita ocorre quando os alimentos atingem o ponto ideal de maturação e estão prontos para serem recolhidos.",
    "O processamento envolve a transformação dos alimentos colhidos em produtos finais prontos para consumo.",
    "A distribuição é a etapa final, onde os alimentos são entregues aos consumidores através de diversos canais de venda."
];

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        // Remove a classe 'ativo' de todos os botões
        botoes.forEach(b => b.classList.remove("ativo"));
        
        // Adiciona a classe 'ativo' ao botão clicado
        botao.classList.add("ativo");
        
        // Atualiza a imagem e o texto informativo
        imagemInfo.src = imagens[index];
        textoInfo.textContent = textos[index];
    });
});
