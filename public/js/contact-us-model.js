var modalContact = document.getElementById('contact-us-modal'),
  btnContact = document.getElementById('contact-us-btn'),
  spanContact = document.getElementById('contact-us-close');
(btnContact.onclick = function () {
  modalContact.style.display = 'block';
}),
  (spanContact.onclick = function () {
    (modalContact.style.display = 'none'), console.log('X click');
  }),
  (window.onclick = function (t) {
    t.target == modalContact && (modalContact.style.display = 'none');
  });
