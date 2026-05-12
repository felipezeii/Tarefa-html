let produtos = []
let preços = []

function cadastrarProduto() {
    let produto = document.getElementById("nproduto").value;
    let preço = parseFloat(document.getElementById("pproduto").value);
    let mensagem = document.getElementById("mensagem");
    if (produto == "" || preço <= 0) {
        mensagem.textContent = "Digite algo valido";
        mensagem.style.color = "red";
    }
    else {
        produtos.push(produto + " R$ " + preço);
        preços.push(preço);
        mensagem.textContent = "Produto adicionado";
        mensagem.style.color = "green";
    }
}

function mostrarProdutos() {
    let qnt = document.getElementById("quantidade");
    let lista = document.getElementById("lista");
    let valorc = document.getElementById("valor");
    let valorb = document.getElementById("valorb");
    let total = document.getElementById("valortotal");

    let soma = 0;

    let caro = 0;
    let barato = 999999999;

    let ncaro = "";
    let nbarato = "";


    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    for (let i = 0; i < produtos.length; i++) {
        let item = document.createElement("li");
        item.textContent = produtos[i];
        lista.appendChild(item);
        soma += preços[i];


        if (preços[i] > caro) {
            caro = preços[i];
            ncaro = produtos[i];
        }

        if (preços[i] < barato) {
            barato = preços[i];
            nbarato = produtos[i];
        }
    }
    quantidade.textContent = "quantidade de produtos cadastrados  " + produtos.length;
    total.textContent = "total de preços do produto é: " + soma;
    valorc.textContent = "produto mais caro é: " + "R$" + caro.toFixed(2);
    valorb.textContent = "produto mais barato é: " + "R$" + barato.toFixed(2);
}

function apagar() {
    produtos.pop()
    preços.pop()
    mostrarProdutos()
}