function benioC() {
    document.getElementById('bolso').style.color = 'rgb(62, 237, 19)';
    document.getElementById('lula').style.color = 'rgb(62, 237, 19)';
    document.getElementById('cilio').style.color = 'rgb(62, 237, 19)';
    document.getElementById('cu').style.color = 'black';
    document.getElementById('cus').style.color = 'black';
    document.getElementById('cuz').style.color = 'black';
    document.getElementById('title').style.color = 'white';
    document.getElementById('cu').style.backgroundColor = 'rgb(62, 237, 19)';
    document.getElementById('cus').style.backgroundColor = 'rgb(62, 237, 19)';
    document.getElementById('cuz').style.backgroundColor = 'rgb(62, 237, 19)';
    benioi()
    benioT()
}

function benioi() {
    document.body.style.backgroundImage = 'url("img/ggs.webp")';
    document.body.style.backgroundSize = '100%';
    document.getElementById('lula').src = 'aliens/benio1.webp';
    document.getElementById('lula').onclick ='';
    document.getElementById('bolso').onclick = '';
    document.getElementById('cilio').onclick = '';
    document.getElementById('cilio').src = 'aliens/benio2.webp';
    document.getElementById('bolso').src = 'aliens/benio3.webp';
    document.querySelector('link[rel="icon"]').href = 'img/ben10.webp';
}

function benioT() {
    document.getElementById('title').textContent = 'É HORA DE VIRAR HEROI';
    document.getElementById('cu').textContent = '4 BRAÇOS!';
    document.getElementById('cus').textContent = 'esse ta bão';
    document.getElementById('cuz').textContent = 'relógio do lula vsfdkkkkkkkk';
    document.getElementById('botaoL').innerHTML = '<button onclick="proximoE()" " style="background-color: rgb(62, 237, 19); border:none; font-size:30px; font-family:Comic-Sans-MS;"><--------</button>';
    document.getElementById('botaoC').innerHTML = '<button onclick="troca()" " style="background-color: rgb(62, 237, 19); border:none; font-size:30px; font-family:Comic-Sans-MS;" id="ciroT">Base</button>';
    document.getElementById('botaoB').innerHTML = '<button onclick="proximoD()" " style="background-color: rgb(62, 237, 19); border:none; font-size:30px; font-family:Comic-Sans-MS;">--------></button>';
    document.getElementById('escolha').innerHTML = '';
    document.title = 'BEN 10';
}

let alien = 0;

const aliens = [
    ["aliens/benio1.webp", "aliens/benio2.webp", "aliens/benio3.webp", "rgb(62, 237, 19)", "É HORA DE VIRAR HEROI"],
    ["aliens/besta1.webp", "aliens/besta2.webp", "aliens/besta3.webp", "rgb(219, 123, 13)", "Besta"],
    ["aliens/friagem1.webp", "aliens/friagem2.webp", "aliens/friagem3.webp", "rgb(28, 42, 122)", "Friagem"],
    ["aliens/xlr8-1.webp", "aliens/xlr8-2.webp", "aliens/xlr8-3.webp", "rgb(44, 160, 201)", "XLR8"],
    ["aliens/ultra1.webp", "aliens/ultra2.webp", "aliens/ultra3.webp", "rgb(80, 207, 37)", "Ultra-T"],
    ["aliens/ameaça1.webp", "aliens/ameaça2.webp", "aliens/ameaça3.webp", "rgb(166, 28, 28)", "Ameaça Aquática"],
    ["aliens/aquatico1.webp", "aliens/aquatico2.webp", "aliens/aquatico3.webp", "rgb(174, 214, 197)", "Aquático"],
    ["aliens/diamante1.webp", "aliens/diamante2.webp", "aliens/diamante3.webp", "rgb(99, 207, 161)", "Diamante"],
    ["aliens/eco1.webp", "aliens/eco2.webp", "aliens/eco3.webp", "rgb(193, 201, 198)", "Eco-Eco"],
    ["aliens/gosma1.webp", "aliens/gosma2.webp", "aliens/gosma3.webp", "rgb(116, 214, 41)", "Gosma"],
    ["aliens/fantasma1.webp", "aliens/fantasma2.webp", "aliens/fantasma3.webp", "rgb(116, 42, 145)", "Fantasmatico"]
]

function troca() {
    document.getElementById('lula').src = aliens[alien][0];
    document.getElementById('cilio').src = aliens[alien][1];
    document.getElementById('bolso').src = aliens[alien][2];
    document.getElementById('lula').style.color = aliens[alien][3];
    document.getElementById('cilio').style.color = aliens[alien][3];
    document.getElementById('bolso').style.color = aliens[alien][3];
    document.getElementById('title').textContent = aliens[alien][4];
    if (alien == 0) {
        document.getElementById('title').style.color = 'white'
    } else
        document.getElementById('title').style.color = aliens[alien][3];
    if (alien != 0) {
        document.getElementById('cu').innerHTML = ''
        document.getElementById('cus').innerHTML = ''
        document.getElementById('cuz').innerHTML = ''
    } else {
        document.getElementById('cu').innerHTML = '<span class="textop" id="cu" style="color: black; background-color: rgb(62, 237, 19);">4 BRAÇOS!</span>';
        document.getElementById('cus').innerHTML = '<span class="textop" id="cus" style="color: black; background-color: rgb(62, 237, 19);">esse ta bão</span>';
        document.getElementById('cuz').innerHTML = '<span class="textop" id="cuz" style="color: black; background-color: rgb(62, 237, 19);">relógio do lula vsfdkkkkkkkk</span>';               
    }
}

function proximoD() {
    if(alien < 10 && alien >= 0) {
        alien += 1
    } else {
        alien = 0
    }
    if(alien == 0) {
        document.getElementById('botaoC').innerHTML = '<button onclick="troca() " style="background-color: rgb(62, 237, 19); border:none; font-size:30px; font-family:Comic-Sans-MS;" id="ciroT">Base</button>';
    } else if (alien == 1) {
        document.getElementById('botaoC').innerHTML = '<button onclick="troca() " style="background-color: rgb(62, 237, 19); border:none; font-size:30px; font-family:Comic-Sans-MS;" id="ciroT">Besta</button>';
    } else if (alien == 2) {
        document.getElementById('botaoC').innerHTML = '<button onclick="troca() " style="background-color: rgb(62, 237, 19); border:none; font-size:30px; font-family:Comic-Sans-MS;" id="ciroT">Friagem</button>';
    }  else if (alien == 3) {
        document.getElementById('botaoC').innerHTML = '<button onclick="troca() " style="background-color: rgb(62, 237, 19); border:none; font-size:30px; font-family:Comic-Sans-MS;" id="ciroT">XLR8</button>';
    } else if (alien == 4) {
        document.getElementById('botaoC').innerHTML = '<button onclick="troca() " style="background-color: rgb(62, 237, 19); border:none; font-size:30px; font-family:Comic-Sans-MS;" id="ciroT">Ultra-T</button>';
    } else if (alien == 5) {
        document.getElementById('botaoC').innerHTML = '<button onclick="troca() " style="background-color: rgb(62, 237, 19); border:none; font-size:30px; font-family:Comic-Sans-MS;" id="ciroT">Ameaça Aquática</button>';
    } else if (alien == 6) {
        document.getElementById('botaoC').innerHTML = '<button onclick="troca() " style="background-color: rgb(62, 237, 19); border:none; font-size:30px; font-family:Comic-Sans-MS;" id="ciroT">Aquatico</button>';
    } else if (alien == 7) {
        document.getElementById('botaoC').innerHTML = '<button onclick="troca() " style="background-color: rgb(62, 237, 19); border:none; font-size:30px; font-family:Comic-Sans-MS;" id="ciroT">Diamante</button>';
    } else if (alien == 8) {
        document.getElementById('botaoC').innerHTML = '<button onclick="troca() " style="background-color: rgb(62, 237, 19); border:none; font-size:30px; font-family:Comic-Sans-MS;" id="ciroT">Eco-Eco</button>';
    } else if (alien == 9) {
        document.getElementById('botaoC').innerHTML = '<button onclick="troca() " style="background-color: rgb(62, 237, 19); border:none; font-size:30px; font-family:Comic-Sans-MS;" id="ciroT">Gosma</button>';
    } else {
        document.getElementById('botaoC').innerHTML = '<button onclick="troca() " style="background-color: rgb(62, 237, 19); border:none; font-size:30px; font-family:Comic-Sans-MS;" id="ciroT">Fantasmatico</button>';
    }
}

function proximoE() {
    if(alien <= 10 && alien > 0) {
        alien -= 1
    } else {
        alien = 10
    }
    if(alien == 0) {
        document.getElementById('botaoC').innerHTML = '<button onclick="troca() " style="background-color: rgb(62, 237, 19); border:none; font-size:30px; font-family:Comic-Sans-MS;" id="ciroT">Base</button>';
    } else if (alien == 1) {
        document.getElementById('botaoC').innerHTML = '<button onclick="troca() " style="background-color: rgb(62, 237, 19); border:none; font-size:30px; font-family:Comic-Sans-MS;" id="ciroT">Besta</button>';
    } else if (alien == 2) {
        document.getElementById('botaoC').innerHTML = '<button onclick="troca() " style="background-color: rgb(62, 237, 19); border:none; font-size:30px; font-family:Comic-Sans-MS;" id="ciroT">Friagem</button>';
    }  else if (alien == 3) {
        document.getElementById('botaoC').innerHTML = '<button onclick="troca() " style="background-color: rgb(62, 237, 19); border:none; font-size:30px; font-family:Comic-Sans-MS;" id="ciroT">XLR8</button>';
    } else if (alien == 4) {
        document.getElementById('botaoC').innerHTML = '<button onclick="troca() " style="background-color: rgb(62, 237, 19); border:none; font-size:30px; font-family:Comic-Sans-MS;" id="ciroT">Ultra-T</button>';
    } else if (alien == 5) {
        document.getElementById('botaoC').innerHTML = '<button onclick="troca() " style="background-color: rgb(62, 237, 19); border:none; font-size:30px; font-family:Comic-Sans-MS;" id="ciroT">Ameaça Aquática</button>';
    } else if (alien == 6) {
        document.getElementById('botaoC').innerHTML = '<button onclick="troca() " style="background-color: rgb(62, 237, 19); border:none; font-size:30px; font-family:Comic-Sans-MS;" id="ciroT">Aquatico</button>';
    } else if (alien == 7) {
        document.getElementById('botaoC').innerHTML = '<button onclick="troca() " style="background-color: rgb(62, 237, 19); border:none; font-size:30px; font-family:Comic-Sans-MS;" id="ciroT">Diamante</button>';
    } else if (alien == 8) {
        document.getElementById('botaoC').innerHTML = '<button onclick="troca() " style="background-color: rgb(62, 237, 19); border:none; font-size:30px; font-family:Comic-Sans-MS;" id="ciroT">Eco-Eco</button>';
    } else if (alien == 9) {
        document.getElementById('botaoC').innerHTML = '<button onclick="troca() " style="background-color: rgb(62, 237, 19); border:none; font-size:30px; font-family:Comic-Sans-MS;" id="ciroT">Gosma</button>';
    } else {
        document.getElementById('botaoC').innerHTML = '<button onclick="troca() " style="background-color: rgb(62, 237, 19); border:none; font-size:30px; font-family:Comic-Sans-MS;" id="ciroT">Fantasmatico</button>';
    }
}