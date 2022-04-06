let index = 0;
slideShow();
submitClear();

function slideShow() {
  let getClass = document.getElementsByClassName('slide');
  let length = getClass.length;
  for (let a = 0; a < length; a++) {
    getClass[a].style.display = 'none';
  }
  index++;
  if (index > length) {
    index = 1;
  }
  getClass[index - 1].style.display = 'block';
  setTimeout(slideShow, 3000);
}

function submitClear() {
  document.getElementById('name').value = '';
  document.getElementById('e-mail').value = '';
  document.getElementById('question').value = '';
}
