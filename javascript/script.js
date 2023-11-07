
function googleTranslate() {
  new google.translate.TranslateElement({pageLanguage: 'no', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate');
}

document.getElementById('translateButton').addEventListener('click', function() {
  googleTranslate();
});



