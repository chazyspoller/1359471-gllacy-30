// Открытие, закрытие попапа обратной связи
// Запись имени и почты в хранилище

let popup = document.querySelector('.modal');
let btnOpenPopup = document.querySelector('.button-feedback');
let btnClosePopup = document.querySelector('.close-button');
let popupName = document.querySelector('[name = name]');
let popupMail = document.querySelector('[name = mail]');

let isStorageSupport = true;
let storageName = '';
let storageMail = '';

try {
  storageName = localStorage.getItem('name');
  storageMail = localStorage.getItem('mail');
} catch (err) {
  isStorageSupport = false;
}

btnOpenPopup.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
  popupName.focus();

  if (storageName) {
    popupName.value = storageName;
  }
  if (storageMail) {
    popupMail.value = storageMail;
  }
});

btnClosePopup.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
});

document.addEventListener('keydown', function(evt) {
  if (evt.keyCode == '27') {
    evt.preventDefault();
    popup.classList.remove('modal-show');
  }
});

popup.addEventListener('submit', function(evt) {
  if(!popupName.value || !popupMail.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
    localStorage.setItem('name', popupName.value);
    localStorage.setItem('mail', popupMail.value);
  }
  }
});
