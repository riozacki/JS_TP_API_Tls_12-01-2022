
//---------------------------Toulouse-Inventaire de la flore sauvage en milieu urbain------------------------------//

//--------------Récupération Elements html-----------------------//

const titleFirst = document.getElementById('title_first'); //-Titre-//
let displayTitle = document.getElementById('displayTitle');      //-Zone d'affichage d titres-//  
let display = document.getElementById('display');     //-Zone d'affichage des données-//
let display2 = document.getElementById('display2');  //-Zone d'affichage des images-//
let stateSelect = document.getElementById('stateSelect'); //-Menu déroulant-//
let displayImg = document.getElementById('displayImg');
const circleNew = document.getElementById('circle');

//--------------Récupération des données-------------------------//

const url = "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=inventaire-de-la-flore-sauvage-en-milieu-urbain-ville-de-toulouse&q=&facet=nom_scientifique&facet=nom_commun&facet=famille&facet=date";

fetch(url) //--Connection à l'api via l'url--//
    .then(res => {                         // .then attente de la connexion à l'api
        if (res.ok) {                      //Condition Si conection OK// & //res.json Transformation des données en json // & //console.log (res) //--Vérification connection--//
            res.json().then(data => {      /* //Accés au données avec 'data'// & //console.log de 'data' pour vérification//*/
                linksMenu(data);
                circleNew.addEventListener('click', (e) => {
                    displayImg.style.display = 'none';
                    display.style.display = "none";                                      //!!!!!page2!!!!! Se référencer ci-bas  [body 2eme page]
                    for (const key in data.facet_groups) {
                        display2.innerHTML = `${data.facet_groups[0].facets[0]}`;
                    }
                })
            })
        }
        else {
            display.innerHTML("La connexion a l'api à échouer!");     //--Condition d'erreur--//
            document.body.style.background = "url('img/windows11bsod.jpg' no-repeat fixed)";  
            document.body.style.backgroundSize = "100% 100%";
        }

    })

//--------------Affichage des données-------------------------//

//---------Tentative de boucler pour éviter de déclarer 9 fonctions-----------//
/*
    function erableSycomore(data) {
        for (let i=0;i<data.records.length;i++){
            for (const key in data.records[i].fields) {
                display.innerHTML += `${key} ${data.records[i].fields[key]}  <br/>`;
            }
        }
    }
*/
//-------------------------------------------------------------//


function erableSycomore(data) {
    for (const key in data.records[0].fields) {
        display.innerHTML += `${key} : ${data.records[0].fields[key]}  <br/>`;
    }
}
function achilleeMilleFeuille(data) {
    for (const key in data.records[0].fields) {
        display.innerHTML += `${key} : ${data.records[1].fields[key]}  <br/>`;
    }
}
function roseTremiere(data) {
    achilleeMilleFeuille
    for (const key in data.records[0].fields) {
        display.innerHTML += `${key} : ${data.records[2].fields[key]}  <br/>`;
    }
}
function ailDeNaples(data) {
    for (const key in data.records[0].fields) {
        display.innerHTML += `${key} : ${data.records[3].fields[key]}  <br/>`;
    }
}
function ailDesVignes(data) {
    for (const key in data.records[0].fields) {
        display.innerHTML += `${key} : ${data.records[4].fields[key]}  <br/>`;
    }
}
function ambroisie(data) {
    for (const key in data.records[0].fields) {
        display.innerHTML += `${key} : ${data.records[5].fields[key]}  <br/>`;
    }
}
function ammiEleve(data) {
    for (const key in data.records[0].fields) {
        display.innerHTML += `${key} : ${data.records[6].fields[key]}  <br/>`;
    }
}
function orchisPyramidal(data) {
    for (const key in data.records[0].fields) {
        display.innerHTML += `${key} : ${data.records[7].fields[key]}  <br/>`;
    }
}
//-------------Body--2eme page-------------------------------------//
/*   //----------------ne marche pas !-----------------------------//
function displayDiv2(data) {
    circleNew.addEventListener('click', (e) => {
        displayImg.style.display = 'none';
        display.style.display = "none";
        for (const key in data.facet_groups) {
            display2.innerHTML = `${data.nhits}`;
        }
    })
}
displayDiv2();
*/
circleNew.addEventListener('click', (e) => {
    displayImg.style.display = 'none';
    display.style.display = "none";
})
//-------------Gestion du menu déroulant-----------------------//

function linksMenu(data) {                           // permet de sélectionner une plante dans le menu déroulant et en affiche la description  
    stateSelect.addEventListener('input', (e) => {  // Evenement de type input sur le menu déroulant
        display.style.display = "flex";
        if (stateSelect.value == 'link1') {         //Condition afin d'afficher les data correspondant à l'input
            display.innerHTML = "";
            displayImg.style.display = 'flex';
            displayImg.style.backgroundImage = "url('img/erable_sycomore-removebg-preview.png')  ";
            erableSycomore(data);
        }
        else if (stateSelect.value == 'link2') {
            display.innerHTML = "";
            displayImg.style.display = 'flex';
            displayImg.style.backgroundImage = "url('img/big_artfichier_750348_5479745_20160216524230-removebg-preview.png')";
            achilleeMilleFeuille(data);
        }
        else if (stateSelect.value == 'link3') {
            display.innerHTML = "";
            displayImg.style.display = 'flex';
            displayImg.style.backgroundImage = "url('img/7197-rose_tr_mi_re_simple_en_m_lange-ho-removebg-preview.png')";
            roseTremiere(data);
        }
        else if (stateSelect.value == 'link4') {
            display.innerHTML = "";
            displayImg.style.display = 'flex';
            displayImg.style.backgroundImage = "url('img/ALLIUM_Neapolitanum_13006930PL_r-removebg-preview.png')";
            ailDeNaples(data);
        }
        else if (stateSelect.value == 'link5') {
            display.innerHTML = "";
            displayImg.style.display = 'flex';
            displayImg.style.backgroundImage = "url('img/amaryllidacee-liliacee-ail-des-vignes-allium-vineale-2-removebg-preview.png')";
            ailDesVignes(data);
        }
        else if (stateSelect.value == 'link6') {
            display.innerHTML = "";
            displayImg.style.display = 'flex';
            displayImg.style.backgroundImage = "url('img/ambroisie-Parce-juillet-2020-scaled-removebg-preview.png')";
            ambroisie(data);
        }
        else if (stateSelect.value == 'link7') {
            display.innerHTML = "";
            displayImg.style.display = 'flex';
            displayImg.style.backgroundImage = "url('img/ammi_majus_TB-removebg-preview.png')";
            ammiEleve(data);
        }
        else if (stateSelect.value == 'link8') {
            display.innerHTML = "";
            displayImg.style.display = 'flex';
            displayImg.style.backgroundImage = "url('img/14123950330_f39f962547_b-removebg-preview.png')";
            orchisPyramidal(data);
        }
        else {
            display.innerHTML = "NO GOOD CLICK";
        }
    }
    )
}

//-------------Style de la zone d'affichage-----------------------//


//-------------Body--1ere page------------------------------------//

display.style.display = "none";
document.body.style.background = "url('img/bg1.png') no-repeat fixed";
document.body.style.backgroundSize = "100% 100%";
document.body.style.fontFamily = 'Poppins';
document.body.style.textShadow = "1px 1px black";
title2 = document.createElement('h2');
title2.innerHTML = 'Veuillez choisir une plante:';
displayTitle.appendChild(title2);
titleFirst.style.textAlign = "center";
titleFirst.style.marginTop = "50px";
titleFirst.style.color = "black";
titleFirst.style.textShadow = "1px 1px 1px green";
title2.style.marginLeft = '5%';
title2.style.textShadow = '1px 1px 1px green';
stateSelect.style.textAlign = "center";
stateSelect.style.marginLeft = "5%";
stateSelect.style.backgroundColor = "rgb(99, 153, 99, 0.6)";
stateSelect.style.transform = "scale(1)";
stateSelect.style.fontSize = "1.2em";
stateSelect.style.borderStyle = "solid";
stateSelect.style.borderWidth = "3px";
stateSelect.style.borderRadius = "10px";
stateSelect.style.borderColor = "black";
display.style.marginLeft = "10%";
display.style.marginRight = "40%";
display.style.marginTop = "10%";
display.style.fontWeight = "bold";
display.style.borderStyle = "solid";
display.style.borderRadius = "10px";
display.style.padding = "25px";
display.style.fontWeight = "bold";
display.style.fontSize = "1.1em";
display.style.backgroundColor = "rgba(30, 61, 30, 0.445)";
displayImg.style.height = '300px';
displayImg.style.width = '300px';
displayImg.style.borderStyle = 'solid';
displayImg.style.borderRadius = '10px';
displayImg.style.backgroundColor = "rgba(30, 61, 30, 0.445)";
displayImg.style.backgroundSize = "100% 100%";
displayImg.style.display = 'none';
displayImg.style.position = "absolute";
displayImg.style.top = "20%";
displayImg.style.left = "55%";
circleNew.style.height = "200px";
circleNew.style.width = "200px";
circleNew.style.borderRadius = "50%";
circleNew.style.backgroundColor = "rgba(131, 131, 131, 0.2)";
circleNew.style.position = "fixed";
circleNew.style.bottom = "5%";
circleNew.style.right = "5%";
circleNew.style.color = "white";
circleNew.style.fontSize = "9em";
circleNew.style.textAlign = "center";
circleNew.style.color = "grey";
circleNew.style.textShadow = "1px 1px rgba(0, 0, 0, 0.519)";
circleNew.style.borderColor = "grey";
circleNew.style.borderStyle = "solid";
circleNew.style.borderWidth = "1px";

stateSelect.addEventListener('mouseover', (e) => {
    stateSelect.style.backgroundColor = "rgba(69, 237, 69, 0.542)";
})
stateSelect.addEventListener('mouseout', (e) => {
    stateSelect.style.backgroundColor = "rgb(99, 153, 99, 0.6)";
})

//-------------Bonus - animation-----------------------------------//

//-Changement icone de la souris-//

document.getElementsByTagName("body")[0].style.cursor = "url('http://wiki-devel.sugarlabs.org/images/e/e2/Arrow.cur'), auto";

//-Texte défilent en haut de la page-//

let defile;// l'element a deplacer
let psinit = 580; // position horizontale de depart
let pscrnt = psinit;
function texteDefile() {
    if (!defile) defile = document.getElementById('defile');
    if (defile) {
        if (pscrnt < (- defile.offsetWidth)) {
            pscrnt = psinit;
        } else {
            pscrnt += -1; // pixel par deplacement
        }
        defile.style.left = pscrnt + "px";
    }
}
setInterval("texteDefile()", 20); // delai de deplacement 

//-------------Boutton Nouvelle page + ----------------//

circleNew.addEventListener('mouseenter', (e) => {
    circleNew.style.backgroundColor = "rgba(131, 131, 131, 0.4";
})
circleNew.addEventListener('mouseout', (e) => {
    circleNew.style.backgroundColor = "rgba(131, 131, 131, 0.2";
})


