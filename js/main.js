const boxes = document.querySelector('.container-griglia');
const bottone = document.getElementById('play');
const difficolta = document.getElementById('difficolta');

play.addEventListener('click', function(){
    
    for (let i = 1; i <= 100; i++){
         const cardElement= document.createElement('div');
        cardElement.classList.add('box');
        cardElement.innerHTML = i;
    
        cardElement.addEventListener('click', function(){
            cardElement.className = 'box active';
        });
    
        boxes.append(cardElement);
    }
})

