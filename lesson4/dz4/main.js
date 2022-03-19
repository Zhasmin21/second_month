const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const number = document.querySelector('.number');
const clear = document.querySelector('#clear')

let chislo = 0;

plus.onclick = function () {
    chislo++;
    number.innerHTML = chislo;
}
minus.onclick = function () {
     chislo--;
     if (chislo < 1) {
         chislo = 0;
     }
    number.innerHTML = chislo;
}
clear.onclick = function () {
    chislo = 0;
    number.innerHTML = chislo;
}