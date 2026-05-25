produtos = []

function Cadastrar() {
    let produto = document.getElementById("nproduto").value;
    let digite = document.getElementById("dv");
    if (produto == "") {
        digite.textContent = "Digite algo valido";
        digite.style.color = "red"
    } else {
        produtos.push(produto);
        digite.textContent = "Produto adicionado";
        digite.style.color = "green";
    }

}

function Mostrar() {

    let quantidade = document.getElementById("qnt");
    let lista = document.getElementById("listaestoque");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    for (let i = 0; i < produtos.length; i++) {
        let item = document.createElement("li");
        item.textContent = produtos[i];
        lista.appendChild(item);
    }
}

compras = []
preçosc = []

function Comprar() {
    let compra = document.getElementById("nomeprodt").value;
    let preçoc = parseFloat(document.getElementById("precoprodut").value);
    let digiteval = document.getElementById("digite");

    if (compra == "" || preçoc <= 0) {
        digiteval.textContent = "digite algo valido"
        digiteval.style.color = "red"
    } else {
        compras.push(compra + " R$ " + preçoc);
        preçosc.push(preçoc);
        digiteval.style.color = "green"
        digiteval.textContent = "compra cadastrado"
        return;
    };
}


function Calcular() {

    let listac = document.getElementById("list");
    let valort = document.getElementById("valr")

    let vlr = 0


    while (listac.firstChild) {
        listac.removeChild(listac.firstChild);
    }


    for (let i = 0; i < compras.length; i++) {
        let itm = document.createElement("li");
        itm.textContent = compras[i];
        listac.appendChild(itm)
        vlr += preçosc[i];

        valort.textContent = "O valor total da compra é " + vlr.toFixed(2);

    }
}


let contadordeten = 0;
function Senha() {
    let senha = document.getElementById("Senha").value;
    let tentativa = document.getElementById("tentativas");
    let ace = document.getElementById("acesso");

    const senhacerta = "1234";

    contadordeten++;


    if (senha == "") {
        ace.style.color = "red"
        ace.textContent = "digite algo valido"
    } else if (senha == senhacerta) {
        ace.textContent = "Acertou a senha"
        ace.style.color = "green"
        tentativa.textContent = "Você acertou em " + contadordeten + " tentativas";
    } else {
        ace.textContent = "Você errou a senha"
        ace.style.color = "red"
        tentativa.textContent = "Você errou, e ja foram " + contadordeten + " tentativas";
    }
}

alunos = []
notas = []
function Notas() {
    let aluno = document.getElementById("aluno").value;
    let nota = parseFloat(document.getElementById("nota").value);
    let pv = document.getElementById("pp");
    if (aluno == "" || nota <= 0) {
        pv.textContent = "digite algo valido"
        pv.style.color = "red"
    } else {
        alunos.push(aluno + " " + nota);
        notas.push(nota);
        pv.textContent = "aluno cadastrado ao relatório"
        pv.style.color = "green"
    }

    show()
}

function show() {
    let listaluno = document.getElementById("listadaluno");
    let pmedia = document.getElementById("media")

    let somanotas = 0;
        

    while (listaluno.firstChild) {
        listaluno.removeChild(listaluno.firstChild);
    }
    for (let i = 0; i < alunos.length; i++) {
        let nts = document.createElement("li");
        nts.textContent = alunos[i];
        listaluno.appendChild(nts);
        somanotas += notas[i]

        if(alunos.length > 0 ) {
            let media = somanotas / notas.length;
            pmedia.textContent = "A media geral dos alunos é " + media.toFixed(2);
        } else {
            pmedia.textContent = ""
        }
    }
}

valor = []
function Total() {
    let total = document.getElementById("total1");
    let parac = prompt ("digite um valor: ");
    let numb = 0;
    while(Number(parac) !== 0 ) {
        numb += Number(parac);
        parac = prompt("Digite um valor; ");
    }
    total.textContent = `Valor ${numb}`;

    

}
