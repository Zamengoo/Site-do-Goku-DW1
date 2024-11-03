function ciro() {
    alert("Ciro o Calvo?");
}

function bolsonaro() {
    alert("Bolsonaro é Norte, Bolsonaro é Nordeste, VAI 17 VAI 17!");
}

function petista() {
    alert("Lula la, seila quem aqui!");
}

function taxa() {
    alert('Taxação Concluída.')
}
function haddadC() {
    document.getElementById("bolso").style.color = 'rgb(163, 25, 15)';
    document.getElementById("lula").style.color = 'rgb(163, 25, 15)';
    document.getElementById("cilio").style.color = 'rgb(163, 25, 15)';
    document.getElementById("cu").style.color = 'rgb(0, 0, 0)';
    document.getElementById("cus").style.color = 'rgb(0, 0, 0)';
    document.getElementById("cuz").style.color = 'rgb(0, 0, 0)';
    document.getElementById("title").style.color = 'rgb(0, 0, 0)';
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
