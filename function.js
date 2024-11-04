function ciro() {
    alert("Ciro o Calvo?");
}

function bolsonaro() {
    alert("Bolsonaro é Norte, Bolsonaro é Nordeste, VAI 17 VAI 17!");
}

function petista() {
    alert("Lula lá, Seila quem Aqui!");
}

function haddadC() {
    document.getElementById("bolso").style.color = 'rgb(163, 25, 15)';
    document.getElementById("lula").style.color = 'rgb(163, 25, 15)';
    document.getElementById("cilio").style.color = 'rgb(163, 25, 15)';
    document.getElementById("cu").style.color = 'black';
    document.getElementById("cus").style.color = 'black';
    document.getElementById("cuz").style.color = 'black';
    document.getElementById("title").style.color = 'black';
    document.getElementById("cu").style.backgroundColor = 'red';
    document.getElementById("cus").style.backgroundColor = 'red';
    document.getElementById("cuz").style.backgroundColor = 'red';
    haddadi();
    haddadT();
}

function haddadi() {
    document.body.style.backgroundImage = "url('img/EstrelaPT.jpg')";
    document.body.style.backgroundSize = '50%';
    document.getElementById("lula").src = "img/Taxad.jpg";
    document.getElementById("bolso").src = "img/Taxad.jpg";
    document.getElementById("cilio").src = "img/Taxad.jpg";
}

function haddadT() {
    document.getElementById("title").textContent = "TAXE HADDAD";
    document.getElementById("cu").textContent = "A TAXA É REAL";
    document.getElementById("cus").textContent = "A TAXA É REAL";
    document.getElementById("cuz").textContent = "A TAXA É REAL";
    document.getElementById("botaoL").innerHTML = '<button onclick="taxa()" " style="background-color: rgb(247, 67, 67); border:none; font-size:30px; font-family:Comic-Sans-MS;">Taxar</button>';
    document.getElementById("botaoC").innerHTML = '<button onclick="taxa()" " style="background-color: rgb(247, 67, 67); border:none; font-size:30px; font-family:Comic-Sans-MS;">Taxar</button>';
    document.getElementById("botaoB").innerHTML = '<button onclick="taxa()" " style="background-color: rgb(247, 67, 67); border:none; font-size:30px; font-family:Comic-Sans-MS;">Taxar</button>';
    document.getElementById("escolha").innerHTML = '';
}

let a = 1

function taxa() {
    if(a == 1) {
        alert('Taxas em 50%.')
        a += 1
    } else if(a == 2) {
        alert('Taxas em 75%.')
        a += 1
    } else if (a == 3) {
        alert('Taxas em 99%.')
        a += 1
    } else if (a == 4) {
        alert('Taxas em 100%, Projeto Brazuela Iniciado.')
        a += 1
    } else {
        alert('Suas mãos não Aguentam mais Taxar.')
    }
}
