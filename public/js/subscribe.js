var toBeHide = document.querySelector('#to-be-hide'),
  subscribeForm = document.querySelector('#subscribe-form'),
  subscribeEmail = document.querySelector('#subscribe-email'),
  subscribeSubmit = document.querySelector('#subscribe-submit');
subscribeSubmit.addEventListener('click', function (e) {
  e.preventDefault(),
    null == subscribeEmail.value || '' == subscribeEmail.value
      ? console.log('enter your email please.')
      : ((e = {
          method: 'POST',
          body: JSON.stringify({ email: subscribeEmail.value, list: 'reactjs-books', js: !0 }),
          headers: { 'Content-Type': 'application/json' }
        }),
        fetch('https://my-mail-chimp.herokuapp.com/api/v1/subscribes', e).then(function (e) {
          e.ok
            ? (console.log('thank you for subscribing.'),
              toBeHide.classList.add('fadout'),
              (toBeHide.innerHTML =
                "<div class='title fadein' style='text-align:center' >Thank You For Subscribing!</div>"))
            : (console.log('error.'),
              toBeHide.classList.add('fadout'),
              (toBeHide.innerHTML =
                "<div class='title fadein' style='text-align:center' >Something went wrong please try again.</div>"));
        }));
});
