/**
 * Created by admin on 2018/5/31.
 */
$(function(){
    $('.dropdown').on('show.bs.dropdown', function () {
        $(this).find('a.btn-down-icon i').html('remove');
    }).on('hide.bs.dropdown', function(){
        $(this).find('a.btn-down-icon i').html('add');
    });

    $('#page-header-primary').on('click',function(){
        $('#selected-template').addClass('selected-template');

    });
    $('#page-header-grey').on('click',function(){
        $('#selected-template').removeClass('selected-template');
    });


});
