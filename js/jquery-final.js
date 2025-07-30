console.log("jQuery-final.jsを読み込みます")





//1
$(function () {
  $('.marina').hide();

  $('.menumem').hover(
    function () {
      $(this).find('.marina').stop(true, true).slideDown('slow');
    },
    function () {
      $(this).find('.marina').stop(true, true).slideUp('slow');
    }
  );
});


$(function () {
  $('.mvint').hide();

  $('.menumv').hover(
    function () {
      $(this).find('.mvint').stop(true, true).slideDown('slow');
    },
    function () {
      $(this).find('.mvint').stop(true, true).slideUp('slow');
    }
  );
});





