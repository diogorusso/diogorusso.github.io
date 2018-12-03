$('.icon').click(function() {
  $(this)
    .addClass('current')
    .siblings('.icon').removeClass('current');
  return $('#device')
    .removeClass('desktop')
    .removeClass('tablet')
    .removeClass('mobile')
    .addClass($(this).attr('id'));
});

$('.icon').click(function() {
  return $('#prototype-demo')
    .removeClass('desktop')
    .removeClass('tablet')
    .removeClass('mobile')
    .addClass($(this).attr('id'));
});