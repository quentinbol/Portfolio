const texteEcritureAuto = "Découvrez-moi";
const delaiEcriture = 100;
const delaiEffacement = 500;
const delaiFinal = 1000;

const texteElement = document.querySelector(".main-heading");
let indexLettre = 0;
let timer;

function ecrireLettre() 
{
  texteElement.textContent += texteEcritureAuto[indexLettre];
  indexLettre++;

  if (indexLettre < texteEcritureAuto.length) {
    timer = setTimeout(ecrireLettre, delaiEcriture);
  } else {
    setTimeout(lancerEffacement, delaiFinal);
  }
}

function lancerEffacement() 
{
  setTimeout(effacerTexte, delaiEffacement);
}

function effacerTexte() 
{
  if (indexLettre >= 0) {
    texteElement.textContent = texteEcritureAuto.slice(0, indexLettre);
    indexLettre--;
  }

  if (indexLettre >= 0) {
    timer = setTimeout(effacerTexte, delaiEffacement);
  } else {
    indexLettre = 0;
    setTimeout(ecrireLettre, delaiEcriture);
  }
}

ecrireLettre();