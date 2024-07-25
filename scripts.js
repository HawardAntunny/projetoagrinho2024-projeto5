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
    plantio: "Texto informativo sobre o plantio.",
    crescimento: "Texto informativo sobre o crescimento das plantas.",
    colheita: "Texto informativo sobre a colheita.",
    processamento: "Texto informativo sobre o processamento das plantas.",
    distribuicao: "Texto informativo sobre a distribuição das plantas."
};

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const infoKey = button.getAttribute("data-info");
        infoImage.src = images[infoKey];
        infoText.textContent = texts[infoKey];
    });
});
