const buttons = document.querySelectorAll(".button");
const infoImage = document.getElementById("info-image");
const infoText = document.getElementById("info-text");

const images = {
    plantio: "img/plantio.jpeg",
    crescimento: "img/crescimento.jpeg",
    colheita: "img/colheita.jpeg",
    processamento: "img/processamento.jpeg",
    distribuicao: "img/distribuicao.jpeg"
};

const texts = {
    plantio: "O plantio é a primeira etapa crucial do ciclo agrícola. Aqui, selecionamos as sementes de qualidade e preparamos o solo para receber as plantas. A escolha do momento certo para o plantio e a correta preparação do solo garantem o início saudável do crescimento das plantas.",
    crescimento: "Durante a fase de crescimento, as plantas desenvolvem suas folhas, raízes e caules. É um período de intenso desenvolvimento onde as plantas precisam de cuidados constantes, como irrigação, fertilização e controle de pragas. O objetivo é garantir um crescimento vigoroso e saudável.",
    colheita: "A colheita é a etapa onde os frutos ou grãos estão prontos para serem recolhidos. É um momento decisivo para garantir a qualidade do produto final. A colheita deve ser realizada no momento exato para evitar perdas e garantir a máxima qualidade e rendimento.",
    processamento: "Após a colheita, as plantas passam pelo processamento, que pode incluir a limpeza, secagem e embalagem dos produtos. Este passo é essencial para preparar o produto para o mercado, garantindo que ele esteja em condições ideais para consumo ou comercialização.",
    distribuicao: "A distribuição é a etapa final onde os produtos processados são enviados para os pontos de venda. É crucial garantir que o transporte seja feito de forma eficiente e que os produtos cheguem ao destino final em boas condições. A logística e o planejamento são fundamentais para o sucesso dessa etapa."
};

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const infoKey = button.getAttribute("data-info");
        infoImage.src = images[infoKey];
        infoText.textContent = texts[infoKey];
    });
});
