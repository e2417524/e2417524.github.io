console.log("jQuery-test.jsを読み込みます")

// セレクタ
let text_p_1 = $("#test-p-1").text();
console.log(text_p_1);

let test_p_2 = $(".test-p-2").text();
console.log(test_p_2);

let p_123 = $("p").text();
console.log(p_123);

$("#test-p-1").hide();

// メソッド
// toggle
function toggle() {
    // 非表示
    // $("#test-p-1").hide();

    // 表示
    // $("#test-p-1").show();

    // 表示・非表示
    $("#test-p-1").toggle();
}

function slide() {
    // スライドダウン
    // $("#test-p-1").slideDown();

    // スライドアップ
    // $("#test-p-1").slideUp();

    // スライドアップアンドダウン
    // $("#test-p-1").slideToggle();
}

function fade() {
    // フェードイン
    // $("#test-p-1").fadeIn();

    // フェードアウト
    // $("#test-p-1").fadeOut();

    //　フェード
    $("#test-p-1").fadeToggle();
}

function color() {
    $("#test-p-1").css("color","red");
    $("#test-p-1").css("fontSize","64px");
}

function customAnimate() {
    // JSON（javascript object notation）形式でプロパティ値を渡す
$("#test-p-1").animate({
        "fontSize": "64px",
});

// メソッドチェーン
$("#test-p-1").animate({
        "fontSize": "64px",
}).animate({
    "fontSize": "16px",
});
}


// イベントハンドラ
// focusイベントを取得
$("#input-test").on("focus", function(){
    console.log("インプットを取得");
});

// clickイベント
$("h3").on("click",function(){
    console.log("h3タグがクリックされた");
    $(this).next().slideToggle();
});