
$('.more-vert-label').click(function(event) {
    event.preventDefault();
    event.stopPropagation();
   var file_options = this.previousElementSibling;
   file_options.style.cssText = 'display: block !important';
   file_options.classList.add('tan-m');
});
// $('body').on('touchend',function() {
//    document.getElementsByClassName('tan-m')[0].style.display = 'none';
// });