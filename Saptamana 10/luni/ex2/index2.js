// MOVE THIS FUCKING SCRIPT INTO INDEX.JS

const firstInput = document.getElementById('name');
const secondInput = document.getElementById('adjective');
const thirdInput = document.getElementById('random-word');

const eventHandlerBtn = () => {
  const firstInputValue = firstInput.value; // name input's value
  const secondInputValue = secondInput.value; // adjective's input value
  const thirdInputValue = thirdInput.value; // random-word's input value

  const story = document.getElementById('story');

  // story.innerText = "text value"
  story.innerHTML = `${firstInputValue} ${secondInput} ${thirdInput}`;
};

firstInput.addEventListener('keydown', () => {
  console.log('afisez');
});

const eventHandlerPrintInput = () => {
  const valueFromInput = firstInput.value;

  alert(valueFromInput);
};

const buttonToBeHandled = document.getElementById('exButton');
buttonToBeHandled.addEventListener('click', eventHandlerBtn); // nu onclick - cele prefixate cu on sunt atribute

const buttonThatPrintsInput = document.getElementsByClassName('input-btn')[0];
// console.log(buttonThatPrintsInput);
buttonThatPrintsInput.addEventListener('click', eventHandlerPrintInput);

const validate = event => {
  console.log(event);
  const firstInputValue = firstInput.value;

  if (firstInputValue === 'Ovidiu') {
    event.preventDefault();
    alert('Corect');
  } else {
    event.preventDefault();
    firstInput.style.border = '1px solid red';
  }
};

const form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', validate);

// console.log(firstInput);
// console.log(secondInput);
// console.log(thirdInput);
