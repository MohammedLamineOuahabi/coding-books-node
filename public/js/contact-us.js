const msgForm = document.querySelector('#contact-us-form');
const msgUsername = document.querySelector('#contact-us-username');
const msgEmail = document.querySelector('#contact-us-email');
const msgMessage = document.querySelector('#contact-us-message');
const msgSubmit = document.querySelector('#contact-us-submit');

msgSubmit.addEventListener('click', function (e) {
  e.preventDefault(),
    null == msgUsername.value ||
    null == msgEmail.value ||
    null == msgMessage.value ||
    '' == msgUsername.value ||
    '' == msgEmail.value ||
    '' == msgMessage.value
      ? console.log('enter your email please.')
      : ((e = {
          method: 'POST',
          body: JSON.stringify({
            username: msgUsername.value,
            email: msgEmail.value,
            message: msgMessage.value,
            list: 'coding-books',
            js: !0
          }),
          headers: { 'Content-Type': 'application/json' }
        }),
        fetch('https://my-mail-chimp.herokuapp.com/api/v1/messages', e).then(function (e) {
          e.ok && (console.log('thanks for the message.'), msgForm.reset());
        }));
});
