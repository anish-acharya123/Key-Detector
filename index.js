const keyBoard = document.getElementById('keyBoard');
const firstLetter = document.querySelector('#first');
const secondLetter = document.querySelector('#second');

keyBoard.addEventListener('keydown', e=>{
    firstLetter.innerHTML = e.key
    secondLetter.innerHTML = `Key`+e.key.toUpperCase()
})