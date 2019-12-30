// scroll 이벤트

$(window).on('scroll',function(){
    
    // 스크롤 이벤트에서 가장 중요한건 현재 스크롤의 위치이다.
    var nowScroll = $(this).scrollTop();
  
    // if( nowScroll >= 160 ){
    //     $('.menu').css({
    //         position : 'fixed' ,
    //         top : 0,
    //         width : '100%'
    //     })
    // } else {
    //     $('.menu').css({
    //         position : 'static' // position의 default 값 => 위의 값 (top , width) 이 그대로 남아있다.
    //     }) 
    // }
    if( nowScroll >= 160 ){
        $('.menu').addClass('fixed');
    } else {
        $('.menu').removeClass('fixed');
        $('.item').removeClass('select');
    }
    // css에 class를 추가하는 방식을 사용하자
    //1000, 1900, 2700, 3400
    // if( nowScroll >= 160 && nowScroll < 1220){
    //     $('.item:first-child').addClass('select');
    // } else {
    //     $('.item:first-child').removeClass('select');
    // }
    // if( nowScroll >= 1220 && nowScroll < 1900){
    //     $('.item:nth-child(2)').addClass('select');
    // } else {
    //     $('.item:nth-child(2)').removeClass('select');
    // }
    // if( nowScroll >= 1900 && nowScroll < 2700){
    //     $('.item:nth-child(3)').addClass('select');
    // } else {
    //     $('.item:nth-child(3)').removeClass('select');
    // }
    // if( nowScroll >= 2700 && nowScroll < 3500){
    //     $('.item:nth-child(4)').addClass('select');
    // } else {
    //     $('.item:nth-child(4)').removeClass('select');
    // }
    // if( nowScroll >= 3500){
    //     $('.item:nth-child(5)').addClass('select');
    // } else {
    //     $('.item:nth-child(5)').removeClass('select');
    // }
    // if( nowScroll >= 160 && nowScroll < 1220) {
    //     $('.item').removeClass('select');
    //     $('.item').eq(0).addClass('select'); // 그 자리에 있는 것(위치가 중요)
    //     //$('.item:eq(0)').addClass('select'); // 선택자로 이미 선택되어 있는 선택자
    // }
    // nht-child(1) = eq(0) // eq는 index 방식이기에 0번째부터
    // if( nowScroll >= 1220 && nowScroll < 2220) {
    //     $('.item').removeClass('select');
    //     $('.item').eq(1).addClass('select');
    // }
    
    // 위에 처럼 쓰면 페이지가 늘어날 때 계속해서 수정해야 하는 문제점

    $('.section').each(function(index){
        
        var posStart = $(this).position().top;
        var posEnd = posStart + $(this).height();
      //  console.log(posStart);
        if( nowScroll >= posStart && nowScroll < posEnd) {
            $('.item').removeClass('select');
            $('.item').eq(index).addClass('select');
        };
    });
    /*

        if( 현재스크롤 >= 태그위 맨위위치(position()) && 현재스크롤 < 태그의 맨 아래 위치(height())){
            $('.item').removeClass('active');
            $('.item').eq(태그의 인덱스).addClass('active');
        }

     */
});

//each 선택자의 갯수만큼 함수를 실행하는 기능
// $('.item').each(function(index){ // each는 대상을 순서대로 잡는다
//    $('.item').eq(index).addClass('select');
//    $(this).addClass('active'); // this도 각 대상의 대상을 잡는다
//});

// index를 가져오는 기능을 보자

$('.item').on('click',function(){

    var idx = $(this).index();
    var move = $('.section').eq(idx);

    var moveTop = move.position().top;

    $('html, body').animate({
        scrollTop : moveTop
    }); // ui를 사용해서 easebounce효과 등을 넣을 수 있다.
    console.log(idx); 
});

var check = $(window).scrollTop();
console.log(check);

if( check >= 160) {
    $('.menu').addClass('fixed');
} // 중간에서도 새로고침을 해도 메뉴바가 고정되게 하는 기능