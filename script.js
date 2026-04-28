function caixinha () {
    alert("Olá mundo");
    let felipe = "Felipe Zei";
    alert (felipe);
    let a = 60;
    let b = 7;
    alert (a + b)

    
}

function text () {
    let texto = document.getElementById("textinho");
    texto.textContent = "Aoba";
    document.getElementById ("cor").style.background = "blue";
}

function btn3 () {
    document.getElementById ("btn3").textContent = "zei";
}

function btn4 () {
    document.getElementById ("paragrafo").textContent = "";
}

function enviar () {
    let para = document.getElementById ("parag");
    let caixa = document.getElementById ("caixa");
    let escrita = para.textContent;
    caixa.value = escrita;
}

function calcular() {
    let num1 = Number(document.getElementById("numero1").value);
    let num2 = Number(document.getElementById("numero2").value);
    let somaa = (num1 + num2)
    let total = document.getElementById("resultado").textContent = somaa;
}

function cor () {
    document.body.style.backgroundColor = "blue"
}

function tamanhot () {
    let tamanhotext = document.getElementById ("tamanho").style.fontSize = "30px"
}

function cortext () {
    let cortexto = document.getElementById ("corzinhatexto").style.color = "green"
}

function mudar () {
    let mudarh = document.getElementById ("mudarh1").textContent = "mudou"
    let mudarp1 = document.getElementById ("mudarp").textContent = "mudou tbm"
}

function mudar3p () {
    let txtc = document.getElementById ("txtc").style.backgroundColor = "pink"
    let cortxt = document.getElementById ("mudarcortxt").style.color = "blue"
    let tamanhotxt = document.getElementById ("aumentarfonte").style.fontSize = "40px"
}


function dificil1 () {
    let mudr = document.getElementById ("mudar").style.color ="lightgray"
    document.getElementById ("mudar").style.fontSize ="30px"
    document.getElementById ("mudar").textContent ="Mudou o texto "
}

function env () {
    let caixa1 = document.getElementById("boxca");
    let caixa2 = document.getElementById("boxc");
    let escrit = document.getElementById("mdr").textContent;
    caixa1.value = escrit;
    caixa2.value = escrit;
}

function botao() {
    document.getElementById("mudaros3").style.fontSize ="30px"
}

function botaotamanho() {
    document.getElementById("mudaros3").textContent ="Mudar texto"
}

function botaocor() {
    document.getElementById("mudaros3").style.color = "lightblue"
}

function divs () {
    document.getElementById("mdr1").style.fontSize ="50px"
    document.getElementById("mdr2").style.color ="pink"
}

function copiar() {
    document.getElementById("colar");
    document.getElementById("resultadov").textContent = colar.value;
    document.getElementById("resultadov").style.color = "red";
}


function somab1() {
    let somabb1 = Number(document.getElementById("numero6").value);
    let somabb2 = Number(document.getElementById("numero62").value);
    let soma12 = somabb1 + somabb2
    document.getElementById("result").textContent = soma12;
}

function nadab1() { 
    let r = document.getElementById("result").textContent=""
}


function geral() {
   let geralI = document.getElementById("textinho").style.fontSize ="50px"
   let geralII = document.getElementById("btn3").style.color = "blue"
   let geralIII = document.getElementById("btn4").style.fontSize ="40px"
}