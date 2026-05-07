function bidade() {
    let idadehtml = document.getElementById("idadehtml").value;
    let result = document.getElementById("pidade");


    if ( idadehtml == 0){
        result.textContent="Erro"
    } else if(idadehtml <= 12){
        result.textContent="Criança";
    }  else if(idadehtml >= 12 && idadehtml <= 17) {
        result.textContent="Adolescente";
    } else if (idadehtml >= 18 && idadehtml <= 59) {
        result.textContent="Adulto"
    } else if (idadehtml >= 60) {
        result.textContent="Idoso"
    } 
    
}

function blogin() {
    let ilogin = document.getElementById("ilogin").value;
    let isenha = document.getElementById("isenha").value;
    let plogin = document.getElementById("plogin");
    if ( ilogin == "admin" && isenha == 1234) {
        plogin.textContent="Login realizado com sucesso";
    } else if ( ilogin == "professor" && isenha == "senac") {
        plogin.textContent=" Bem-vindo, professor";
    } else if ( ilogin =="" && isenha == "") {
        plogin.textContent="Preencha todos os campos"
    } else{
        plogin.textContent="Usuário ou senha incorretos"
    }
}

function bdesconto() {
    let valor = document.getElementById("valor").value;
    let vip = document.getElementById("vip").value;
    let cupom = document.getElementById("cupom").value;
    let pdesconto = document.getElementById("pdesconto");
    if(valor == "" && vip == "" && cupom == "") {
        pdesconto.textContent="Erro"
    } else if (valor == 500 && vip == "sim") {
        pdesconto.textContent = valor - (valor / 20);
    } else if (valor >= 300 && vip == "nao" && cupom == "azambuja") {
        pdesconto.textContent = valor - (valor / 10);
    } else if (valor <= 300 && vip == "nao" && cupom == "nao") {
        pdesconto.textContent = valor;
    }
}

function verificar() {
    let nota = document.getElementById("nota").value;
    let freq = document.getElementById("freq").value;
    let ava = document.getElementById("pavaliacao");
    if(freq > 1 && freq < 75) {
        ava.textContent="Reprovado"
    }
    if ( nota == "" || nota == "" || freq == "" || freq == "") {
        ava.textContent="Valores invalidos"
    } else if (nota >= 60 && freq >= 75) {
        ava.textContent="Aprovado"
    } else if (nota >= 40 && nota < 60 && freq >= 75) {
        ava.textContent="Recuperação"
    } else if (nota < 40 ) {
        ava.textContent="Reprovado"
    }
}


function clima() {
    let temp = document.getElementById("temp").value;
    let cho = document.getElementById("chovendo").value;
    let ven = document.getElementById("ventando").value;
    let p = document.getElementById("aparecer")
    if (temp > 30 && cho == "não"){
        p.textContent=" Bom dia para piscina"
    } else if (cho == "sim" && ven == "sim") {
        p.textContent="Melhor ficar em casa"
    } else if (temp > 18 && temp < 30) {
        p.textContent="Clima agradável"
    } else if(temp < 18) {
        p.textContent="Está frio"
    }
}