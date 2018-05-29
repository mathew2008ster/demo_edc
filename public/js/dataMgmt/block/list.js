
$('.more-vert-label').click(function(event) {
    event.preventDefault();
    event.stopPropagation();
    $('.file-options').hide();
    var file_options = this.previousElementSibling;
    file_options.style.cssText = 'display: block !important';
    file_options.classList.add('tan-m');
});
$('.file-options').click(function() {
    event.preventDefault();
    event.stopPropagation();
});

$('body').click(function() {
    $('.file-options').hide();
});