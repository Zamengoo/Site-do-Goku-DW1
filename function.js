function ciro() {
    alert('Ciro o Calvo?');
}
 
function bolsonaro() {
    alert('Bolsonaro é Norte, Bolsonaro é Nordeste, VAI 17 VAI 17!');
}
 
function petista() {
    alert('Lula lá, Seila quem Aqui!');
}
 
function haddadC() {
    document.getElementById('bolso').style.color = 'rgb(163, 25, 15)';
    document.getElementById('lula').style.color = 'rgb(163, 25, 15)';
    document.getElementById('cilio').style.color = 'rgb(163, 25, 15)';
    document.getElementById('cu').style.color = 'black';
    document.getElementById('cus').style.color = 'black';
    document.getElementById('cuz').style.color = 'black';
    document.getElementById('title').style.color = 'black';
    document.getElementById('cu').style.backgroundColor = 'red';
    document.getElementById('cus').style.backgroundColor = 'red';
    document.getElementById('cuz').style.backgroundColor = 'red';
    haddadi();
    haddadT();
}
 
function haddadi() {
    document.body.style.backgroundImage = "url('img/EstrelaPT.jpg')";
    document.body.style.backgroundSize = '50%';
    document.getElementById('lula').src = 'img/Taxad.jpg';
    document.getElementById('bolso').src = 'img/Taxad.jpg';
    document.getElementById('cilio').src = 'img/Taxad.jpg';
    document.querySelector('link[rel="icon"]').href = 'img/PT-icon.png';
}
 
function haddadT() {
    document.getElementById('title').textContent = 'TAXE HADDAD';
    document.getElementById('cu').textContent = 'A TAXA É REAL';
    document.getElementById('cus').textContent = 'A TAXA É REAL';
    document.getElementById('cuz').textContent = 'A TAXA É REAL';
    document.getElementById('botaoL').innerHTML = '<button onclick="taxa()" " style="background-color: rgb(247, 67, 67); border:none; font-size:30px; font-family:Comic-Sans-MS;">Taxar</button>';
    document.getElementById('botaoC').innerHTML = '<button onclick="taxa()" " style="background-color: rgb(247, 67, 67); border:none; font-size:30px; font-family:Comic-Sans-MS;">Taxar</button>';
    document.getElementById('botaoB').innerHTML = '<button onclick="taxa()" " style="background-color: rgb(247, 67, 67); border:none; font-size:30px; font-family:Comic-Sans-MS;">Taxar</button>';
    document.getElementById('escolha').innerHTML = '';
    document.title = 'TAXADO';
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

function bolsoC() {
    document.getElementById('bolso').style.color = 'rgb(36, 105, 2)';
    document.getElementById('lula').style.color = 'rgb(36, 105, 2)';
    document.getElementById('cilio').style.color = 'rgb(36, 105, 2)';
    document.getElementById('cu').style.color = 'black';
    document.getElementById('cus').style.color = 'white';
    document.getElementById('cuz').style.color = 'black';
    document.getElementById('title').style.color = 'white';
    document.getElementById('cu').style.backgroundColor = 'darkgreen';
    document.getElementById('cus').style.backgroundColor = 'darkgreen';
    document.getElementById('cuz').style.backgroundColor = 'darkgreen';
}

function bolsoi() {
    document.body.style.backgroundImage = 'url("img/Brasil.png")';
    document.body.style.backgroundSize = '100%';
    document.getElementById('lula').src = 'img/bosonaro.jpg';
    document.getElementById('cilio').src = 'img/canalhas.jpg';
    document.getElementById('bolso').src = 'img/luffy.jpg';
    document.querySelector('link[rel="icon"]').href = 'img/22.png';
    bolsoC()
    bolsoT()
}

function bolsoT() {
    document.getElementById('title').textContent = '22 É BOLSONARO 100% BRASIL';
    document.getElementById('cu').textContent = 'BOLSONARO É NORTE';
    document.getElementById('cus').textContent = 'BOLSONARO É NORDESTE';
    document.getElementById('cuz').textContent = 'VAI 17! VAI 17!';
    document.getElementById('botaoL').innerHTML = '<button onclick="destaxa()" " style="background-color: rgb(23, 36, 176); border:none; font-size:30px; font-family:Comic-Sans-MS; color: white;">Reduzir Taxas</button>';
    document.getElementById('botaoC').innerHTML = '<button onclick="destaxa()" " style="background-color: rgb(230, 226, 39); border:none; font-size:30px; font-family:Comic-Sans-MS;">Reduzir Taxas</button>';
    document.getElementById('botaoB').innerHTML = '<button onclick="destaxa()" " style="background-color: rgb(23, 36, 176); border:none; font-size:30px; font-family:Comic-Sans-MS; color: white;">Reduzir Taxas</button>';
    document.getElementById('escolha').innerHTML = '';
    document.title = 'TAXADO';
}

let b = 1

function destaxa() {
    if(b == 1) {
        alert('Taxas Reduzidas para 50%.')
        b += 1
    } else if(b == 2) {
        alert('Taxas Reduzidas para 25%.')
        b += 1
    } else if (b == 3) {
        alert('Taxas Reduzidas para 10%.')
        b += 1
    } else if (b == 4) {
        alert('Taxas Reduzidas para 0%, Projeto Brazuela Derrubado.')
        b += 1
    } else {
        alert('Não Existem Taxas para Reduzir.')
    }
}
