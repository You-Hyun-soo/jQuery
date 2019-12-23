// animate
// css animation VS jquery animation

/*
    css의 애니메이션 브라우저 자체의 그래픽을 사용해서 성능이 우수하다.
    현재는 제이쿼리 애니메이션 보다 css 에니메이션을 더 선호합니다.
*/

// $('.btn').on('click',function(){
//     // $('.box').css('margin-left','100px');
//     $('.box').css({
//         //'margin-left' : 100
//         marginLeft : 100
//     })
// }); css로 작동하였을 때

$('.btn').on('click',function(){
    // $('.box').animate('margin-left','100px'); // 단일 방식은 애니메이션이 안된다.
    // $('.box').animate({
    //     //'margin-left' : 100
    //     marginLeft : 100 ,
    //     marginTop : 100
    // });

    // 속도는 기본적으로 400ms 
    // slow => 600ms
    // fast => 200ms
    // 기본단위는 ms
    //$('.box').animate({marginLeft : 100},100);
    // $('.box1').animate({marginLeft : 100});
    //animate는 블록형태와 따로쓰는 경우에 결과물이 다르다.
    //자바스크립트는 이전의 내용을 기다려주지 않지만 
    //animate는 같은선택자이면 애니메이션은 이전 동작이 끝날 때까지 다음동작을 하지 않는다.
    //다른 선택자라면 같이 동작이 된다.

    // animate, fade, slide
    // fade => 천천히 나타나거나 사라질 때 사용한다.
    // fadeIn => 나타난다. display:none -> 나타난다
    // fadeOut => 사라진다. // css의 opacitiy를 줄이는 것  & 끝에는 display:none으로 바뀌는 것/ 자바스크립트는 setInterval로 활용 가능

    //$('.box1').fadeToggle(2000);

    // slide -> 태그를 올렸다가 내렸다 할 수 있다.
    // slideDown -> 반대로 내려온다.
    // slideUp -> 올라간다
    //$('.box').slideToggle(1000);

    // toggle은 번갈아가면서 동작을 한다.

    // $('.box').animate(
    //     {
    //         //height : 'toggle'
    //         //width : 'toggle'
    //         //opacity : 0 // fade와 다르게 투명도만 결정된다. (숫자의 경우) 
    //         opactiy : 'toggle'// toggle을 사용하면 fade와 같아진다.
    //     }
    // );

    // a = a + 1 => a+=1
    // $('.box').animate({
    //     width : '+=200' // 누를 때 마다 200씩 커지게 한다.
    // });

    // animate는 색상변경이 안된다.
    // 만약 animate로 색상을 변경하고 싶으면 추가적으로 라이브러리가 필요하다.
    // jquery ui 라는 라이브러리
    // jquery의 확장팩이라고 할 수 있다. 효과 위주의 라이브러리
    //$('.box').animate({backgroundColor : '#c13333'}); 
    // 기본적인 color만 가능하다 (orange pink 는 되지 않는다. 그러므로 색상코드를 써주는 것이 좋다.)
    // jquery ui를 사용하면 효과에 easing

    // $('.box').animate({ left : 400 },1500, 'easeInOutElastic');//'easeOutBounce' bounce 되는 효과 
    // left, right 써줄 때는 position을 써주자

    // 콜백함수
    // call back
    // $('.box').animate({ left : 300 }, 2000, function(){
    //     $('.box1').animate({ left : 300 }, 2000);
    // });
    // 300을 2초동안 가고(call) -> 함수를 실행시켜 호출시켜라(back)
    // delay 몇 초간 멈추었다가 실행

    // $('.box').delay(2000).fadeOut(1000,function(){
    //     $('.box1').fadeOut(1000);    
    // });

    // 콜백함수는 들여쓰기를 많이 할수록 보기가 힘들어진다.
    // 콜백지옥 => promise(ES6) / async, await(ES8)

    // $('.box').delay(2000).fadeOut(1000,second);

    // function second(){
    //     $('.box1').fadeOut(1000,third);
    // }
    // function third(){

    // };

    // 함수를 따로 빼서 쓸 수 있다.
});