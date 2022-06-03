var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

var button_plus = document.getElementsByName('adicionar')[0]
button_plus.addEventListener('click')

var button_minus = document.getElementsByName('subtrair')[0]
button_minus.addEventListener('click')

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber > 0) {
        currentNumberWrapper.style.color = 'blue';
  }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';  
  }
}