//criando a paleta de cores
function criaPaleta() {
    let paletteContainer = document.querySelector("#color-palette");

    for (let i = 0; i < 4; i += 1) {
        let caixaCor = document.createElement("div");
        caixaCor.className = "color";
        paletteContainer.appendChild(caixaCor);
    }

    //definindo a cor de cada div
    let paleta = document.getElementsByClassName("color");

    paleta[0].style.backgroundColor = "black";
    paleta[1].style.backgroundColor = "red";
    paleta[2].style.backgroundColor = "green";
    paleta[3].style.backgroundColor = "blue";
}

criaPaleta();

//criando o quadro de pixels
function criaQuadro() {
    let quadroPixels = document.querySelector("#pixel-board");

    for (let i = 0; i < 25; i += 1) {
        let caixaPixel = document.createElement("div");
        caixaPixel.className = "pixel";
        quadroPixels.appendChild(caixaPixel);
    }
}

criaQuadro();

//selecionando a cor
function selecionaCor() {
    //inicializando a cor preta como selecionada
    let paleta = document.getElementsByClassName("color")

    paleta[0].className += " selected"

    //mudando a cor para a selecionada ao clicar
    let caixaPaleta = document.querySelector("#color-palette")

    caixaPaleta.addEventListener("click", function (event) {
        //percorrendo as cores e mudando as classes
        for (let i = 0; i < 4; i += 1) {
            if (paleta[i] === event.target) {
                event.target.className = "color selected";
            } else {
                paleta[i].className = "color";
            }
        }
    })
}

selecionaCor();

//pintando o pixel
function pintaPixel() {
    let quadroPixels = document.querySelector("#pixel-board")

    quadroPixels.addEventListener("click", function(event) {
        let corSelecionada = document.querySelector(".selected").style.backgroundColor;
        event.target.style.backgroundColor = corSelecionada;
    })
}

pintaPixel();

//limpando o quadro
function limpaQuadro() {
    let button = document.querySelector("input[name='Limpar']");
    let pixels = document.getElementsByClassName("pixel");

    button.addEventListener("click", function() {
        for (let i = 0; i < 25; i += 1) {
            pixels[i].style.backgroundColor = "white";
        }
    })
}

limpaQuadro();

//Adicionando o texto "Limpar" ao botão homônimo
let botao = document.querySelector("input[name='Limpar']");
botao.innerHTML = "Limpar";