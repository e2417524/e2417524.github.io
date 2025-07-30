console.log("jQuery-final.jsを読み込みます")


$(function () {
  $('.member-details').hide();　//メンバーインスタをはじめは隠す
});
$("h3").on("click",function(){ //メンバーの名前をクリックした時
    $(this).next().slideToggle();　//スライドトグルする
});


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

//2
$(function () {
  $('.miselle').hide();

  $('.menumem').hover(
    function () {
      $(this).find('.miselle').stop(true, true).slideDown('slow');
    },
    function () {
      $(this).find('.miselle').stop(true, true).slideUp('slow');
    }
  );
});

$(function () {
  $('.minter').hide();

  $('.menumem').hover(
    function () {
      $(this).find('.minter').stop(true, true).slideDown('slow');
    },
    function () {
      $(this).find('.minter').stop(true, true).slideUp('slow');
    }
  );
});

$(function () {
  $('.mingning').hide();

  $('.menumem').hover(
    function () {
      $(this).find('.mingning').stop(true, true).slideDown('slow');
    },
    function () {
      $(this).find('.mingning').stop(true, true).slideUp('slow');
    }
  );
});

