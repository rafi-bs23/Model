'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnOpenModel = document.querySelectorAll('.show-modal');
console.log(btnOpenModel);
console.log(model, overlay);

const openModel = () => {
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModel = () => {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModel.length; i++) {
  btnOpenModel[i].addEventListener('click', openModel);
}

document.querySelector('.close-modal').addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);
