const ham = document.querySelector('.ham');
const menu = document.querySelector('.menu');
const cross = document.querySelector('.cross');

const onClickHandler = () => {
  ham.style.display = 'none';
  menu.style.display = 'inline-block';
  cross.style.display = 'inline-block';
};

const onCrossHandler = () => {
  ham.style.display = 'inline-block';
  menu.style.display = 'none';
};
ham.addEventListener('click', onClickHandler);
cross.addEventListener('click', onCrossHandler);
