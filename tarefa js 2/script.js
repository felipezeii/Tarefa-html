let numero = 10

if (numero == 10) {
    alert("O numero é 10");
}

let nome = "felipe";

if (nome == "felipe") {
    alert("Nome correto");
}

function certo() {
    let valor = document.getElementById("txt").value;
    if (valor == "ok") {
        alert("Correto");
    }
}

function bf4() {
    let valorok = document.getElementById("txt4").value;
    if (valorok == 5) {
        alert("Valor certo")
    }
}

function bt5() {
    let adm = document.getElementById("txt5").value; 
    if (adm == "admin") {
        document.getElementById("p5").textContent = "Bem vindo";
    }
}

function bt6 () {
    let f6 = document.getElementById("txt6").value;
    if(f6 == "teste") {
        document.getElementById("p6").innerText = "texto mudou"
    }
}

function b7() {
    let corz7 = document.getElementById("cor7").value;
    if (corz7 == "azul") {
        document.getElementById("cor7div").style.backgroundColor ="blue"
    }
}

function bm1() {
    let md1 = document.getElementById("md1").value;
    if(md1 > 10) {
        document.getElementById("pm1").textContent="maior que 10"
    }
}

function bm2() {
    let md2 = document.getElementById("md2").value;
    if (md2 < 50) {
        document.getElementById("pm2").textContent="menor que 50"
    }
}

function bm3() {
    let md3 = document.getElementById("md3").value;
    if (md3 == "senha") {
        document.getElementById("pm3").textContent="Senha correta"
    }
}

function bm4() {
    let md4 = document.getElementById("md4").value;
    if (md4 == "escuro") {
        document.body.style.backgroundColor="red"
    }
}

function bm5() {
    let md5 = document.getElementById("md5").value;
    if (md5 == "mudar") {
        document.getElementById("p5p").style.color ="grey"
        document.getElementById("p5p").textContent = "acabou de mudar"
    }
}

function bm6() {
    document.getElementById("div1").style.backgroundColor="green"
    document.getElementById("div1").style.fontSize="20px"
}

function bm7() {
    let md7 = document.getElementById("input7").value;
    if (md7 > 20){
        document.getElementById("parag7").style.fontSize="100px"
    }
}

function df1 () {
    let df = document.getElementById("dm1").value;
    if (df == "admin") {
        document.getElementById("pd1").textContent = "Bem-vindo"
    }
}

function df2() {
    let df2 = document.getElementById("dm2").value;
    if (df2 == 7){
        document.getElementById("pd2").textContent = "Mudou texto já"
        document.getElementById("pd2").style.fontSize = "30px"
        document.getElementById("pd2").style.color ="red"
    }
}
function df3 () {
    let df3 = document.getElementById("dm3").value;
    let pd3 = document.getElementById("pd3");
    if(df3 == "verificar"){
        pd3.style.backgroundColor="blue"
        pd3.style.fontSize="50px"
        pd3.style.color="red"
    }
}

function df4 () {
    let df4 = document.getElementById("dm4").value;
    if (df4 > 100){
        document.body.style.backgroundColor="pink"
    }
}

function df5 () {
    let df5 = document.getElementById("dm5").value;
    let cdm5 = document.getElementById("copiardm5").value;
    let pd5 = document.getElementById("pd5")
    if (df5 == "copiar"){
        pd5.innerText = cdm5;
    }
}

function df6 () {
    let df6 = document.getElementById("dm6").value;
    let d1 = document.getElementById("divf1");
    let d2 = document.getElementById("divf2");
    if (df6 == 10){
        d1.style.backgroundColor="blue";
        d2.style.fontSize="30px"
    }
}

function df7() {
    let df7 = document.getElementById("dm7").value;
    if (df7 == "mudare"){
        document.body.style.backgroundColor="green"
        document.getElementById("h1facil").style.fontSize="200px"
        document.getElementById("h1medio").style.background="lightgrey"
        document.getElementById("h1dificil").style.color="white"
        document.getElementById("h1dificil").style.backgroundColor="black"
    }
}