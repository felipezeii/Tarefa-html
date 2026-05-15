let tudo = []

function cadastrar() {
    let produto = document.getElementById("produto").value;
    let preco = parseFloat(document.getElementById("preco").value);
    let cate = document.getElementById("categoria").value;
    let quant = parseFloat(document.getElementById("quantidade").value);
    let mensagem = document.getElementById("mensagem");
    let cadastrado = document.getElementById("cadastrado")

    if (produto == "" || cate == "" || preco <= 0 || quant <= 0) {
        mensagem.textContent = "Digite algo valido"
        mensagem.style.color = "red"
    } else {

        const nproduto = {
            nome: produto,
            categoria: cate,
            valor: preco,
            quantidade: quant,
        };

        tudo.push(nproduto);

        mensagem.textContent = "produto cadastrado com sucesso";
        mensagem.style.color = "green"
    }
    armazenamento()
}

function armazenamento() {
    const tbody = document.getElementById("tableBody");
    tbody.textContent = "";
    const tproduto = document.getElementById("totalproduto");
    const tquantidade = document.getElementById("totalquantidade");
    const testoque = document.getElementById("totalestoque");

    for (let i = 0; i < tudo.length; i++) {
        let p = tudo[i]
        let linha = document.createElement("tr")
        let tdnome = document.createElement("td");
        let tdcategoria = document.createElement("td");
        let tdpreco = document.createElement("td");
        let tdquantidade = document.createElement("td");
        let tdtotal = document.createElement("td");

        tdnome.textContent = p.nome;
        tdcategoria.textContent = p.categoria;
        tdpreco.textContent = "R$ " + p.valor;
        tdquantidade.textContent = p.quantidade;

        let resultado = p.valor * p.quantidade;
        tdtotal.textContent = "R$ " + resultado.toFixed(2);


        linha.appendChild(tdnome);
        linha.appendChild(tdcategoria);
        linha.appendChild(tdpreco);
        linha.appendChild(tdquantidade);
        linha.appendChild(tdtotal);

        tbody.appendChild(linha);
    }
}

function pesquisa() {
    let psq = document.getElementById("pesquisa").value;
    let mostrar = document.getElementById("resultadopesq");
    let par = document.getElementById("mostrar")

    mostrar.textContent = ""

    if (psq == "") {
        par.style.color = "red"
        par.textContent = "digite algo valido"
    }

    for (let i = 0; i < tudo.length; i++) {
        let p = tudo[i];
        if (p.nome.trim().toLowerCase().includes(psq)) {
            let linha = document.createElement("tr")
            let tdnome = document.createElement("td");
            let tdcategoria = document.createElement("td");
            let tdpreco = document.createElement("td");
            let tdquantidade = document.createElement("td");
            let tdtotal = document.createElement("td");

            tdnome.textContent = p.nome;
            tdcategoria.textContent = p.categoria;
            tdpreco.textContent = "R$ " + p.valor;
            tdquantidade.textContent = p.quantidade;

            let resultado = p.valor * p.quantidade;
            tdtotal.textContent = "R$ " + resultado.toFixed(2);

            mostrar.appendChild(linha)
            linha.appendChild(tdnome);
            linha.appendChild(tdcategoria);
            linha.appendChild(tdpreco);
            linha.appendChild(tdquantidade);
            linha.appendChild(tdtotal);
            
            document.getElementById("pesquisa").value =""
        }
    }

}