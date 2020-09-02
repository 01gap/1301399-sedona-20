'use strict';
var reviewForm = document.querySelector('.review-form');
var submitButton = document.querySelector('.review-form__button');

var firstName = reviewForm.querySelector('#first-name-id');
var surname = reviewForm.querySelector('#surname-id');
var senderEmail = reviewForm.querySelector('#email-id');
var senderTel = reviewForm.querySelector('#tel-id');
var message;
var MessageType = {
  success: 'success',
  error: 'error'
};

var onMessageEscPress = function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    closeMessage()
  }
}

var closeMessage = function () {
  message.classList.add('modal--closed');
  document.removeEventListener('keydown', onMessageEscPress);
};

var openMessage = function (subj) {
  message = document.querySelector('.modal--' + subj);
  var btn = message.querySelector('.modal__button');
  message.classList.remove('modal--closed');
  document.addEventListener('keydown', onMessageEscPress);
  btn.addEventListener('click', function () {
    closeMessage();
  });
};

submitButton.addEventListener('click', function (evt) {
  if (!firstName.value || !surname.value || !senderEmail.value || !senderTel.value) {
    // evt.preventDefault();
    openMessage(MessageType.error);
  } else {
    evt.preventDefault();
    openMessage(MessageType.success);
  }
});

// reviewForm.addEventListener('submit', function (evt) {
//   if (!firstName.value || !surname.value || !senderEmail.value || !senderTel.value) {
//     evt.preventDefault();
//     openMessage(MessageType.error);
//   } else {
//     evt.preventDefault();
//     openMessage(MessageType.success);
//   }
// });
