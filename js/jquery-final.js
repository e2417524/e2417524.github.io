console.log("jQuery-final.jsを読み込みます")

// セレクタ
let menuabout = $("menuabout").text();
console.log('menuabout');

let menumem = $("menumem").text();
console.log('menumem');

let menumv = $("menumv").text();
console.log('menumv');

$("#test-p-1").hide();
function slide() {
    $("#test-p-1").slideToggle();
}


function color() {
    $("#menuabout").css("color","red");
    $("#menumem").css("color","red");
    $("#menumv").css("color","red");
}


// イベントハンドラ
// focusイベントを取得
$("#input-test").on("focus", function(){
    console.log("インプットを取得");
});

// clickイベント
$("h3").on("click",function(){
    $(this).next().slideToggle();
});

$(document).ready(function() {
    
    $('a').hover(
        function() {
            $(this).css('color', '#ffffff');
        },
    function() {
             $(this).css('color', '#b0b0b0'); 
            
        }
    );

  
    $('.main-nav li a').hover(
        function() {
         
            $(this).css({
                'background-color': '#333333',
                'color': '#ffffff'
            });
        },
        function() {
           
           $(this).css({
                'background-color': '#000000',
                'color': '#ffffff'
            });
        }
    );
});