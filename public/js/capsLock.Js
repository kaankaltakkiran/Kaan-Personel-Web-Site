const password = document.querySelector('#password');
const message = document.querySelector('.alert');

password.addEventListener('keyup', function (e) {
  if (e.getModifierState('CapsLock')) {
      message.textContent = '!!!Caps Lock İs On!!!';
  } else {
      message.textContent = '';
  }
});