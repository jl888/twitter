$( document ).ready(function() {
  // Remove notification after 6 seconds
  if ($('.notification').length) {
    setTimeout(() => {
      $('.notification').remove();
    }, 6000);
  }
})
