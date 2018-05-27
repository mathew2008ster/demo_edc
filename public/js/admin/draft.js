
$('.more-vert-label').click(function(event) {
    event.preventDefault();
   console.log($(this).prev()[0])
    $('.file-options').css({'display': 'block !important'})
});