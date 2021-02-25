import '../scss/druzynowe.scss';


//2 liga mezczyzn


const Lublin = [0, 4, 7, 8];
const Belzyce = [0, 3, 5];
const Wlodawa = [6, 6, 5];
const Lubartow = [4, 7, 3];




let wynikLublin1 = document.querySelector ('.numberGame__Lu');
wynikLublin1.innerHTML = Lublin.length;

let wynikBelzyce1 = document.querySelector ('.numberGame__Bel');
wynikBelzyce1.innerHTML = Belzyce.length;

let wynikWlodawa1 = document.querySelector ('.numberGame__Wlod');
wynikWlodawa1.innerHTML = Wlodawa.length;

let wynikLubartow1 = document.querySelector ('.numberGame__Lub');
wynikLubartow1.innerHTML = Lubartow.length;



//1 kolejka

let Lublin1 = document.querySelector ('.round1__Lublin');
Lublin1.innerHTML = Lublin[0];

let Belzyce1 = document.querySelector ('.round1__Belzyce'); 
Belzyce1.innerHTML = Belzyce[0];


let Wlodawa1 = document.querySelector ('.round1__Wlodawa'); 
Wlodawa1.innerHTML = Wlodawa[0];

let Lubartow1 = document.querySelector ('.round1__Lubarow'); 
Lubartow1.innerHTML = Lubartow[0];


//2 kolejka

let Lublin2 = document.querySelector ('.round2__Lublin');
Lublin2.innerHTML = Lublin[1];

let belzyce2 = document.querySelector ('.round2__Belzyce'); 
belzyce2.innerHTML = Belzyce[1];


let wlodawa2 = document.querySelector ('.round2__Wlodawa'); 
wlodawa2.innerHTML = Wlodawa[1];

let lubartow2 = document.querySelector ('.round2__Lubartow'); 
lubartow2.innerHTML = Lubartow[1];



//3 kolejka 
let Lublin3 = document.querySelector ('.round3__Lublin');
Lublin3.innerHTML = Lublin[2];

let belzyce3 = document.querySelector ('.round3__Belzyce'); 
belzyce3.innerHTML = Belzyce[2];


let wlodawa3 = document.querySelector ('.round3__Wlodawa'); 
wlodawa3.innerHTML = Wlodawa[2];

let lubartow3 = document.querySelector ('.round3__Lubartow'); 
lubartow3.innerHTML = Lubartow[2];






cost LL =  function() {
    let gMP = document.querySelector('.gamePlusLublin');
    gMP.innerHTML = result;
 let result = 0;
    for (let i = 0; i < Lublin.length; i++) {
    result += Lublin[i];
}
return result;
}





// for (let i=0; i<tab.length; i++) {
//     console.log("licznik pętli: " + i); //0, 1...
//     console.log(tab[i]); //"Marcin", "Ania"...
// }
        



// for (let i = 0; i < Lublin.length; i++) {
//     const gameMinus--Lublin = 10 - Lublin[i];

// function gamePlus (querySelector, content) {
//     const element = document.querySelector(querySelectorContent);
//     element.innerHTML = content;
// }

// gamePlus('gamePlus__Lublin', Lublin[0] + Lublin[1] + Lublin[2]);