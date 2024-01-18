const boxes = document.querySelector('.box');
let numero;



for (let i = 1; i <=100; i++){
 numero = [i];
 const card = `<div class="box ">${numero}</div>`;
 boxes.innerHTML += card;
 console.log(i);
}