// javascript vs jQuery
// 제이쿼리는 자바스크립트의 라이브러리
// 간편한명령어, 강력한 크로스브라우징

var doc = document;

// 선택자
// 자바스크립트
var vanila = doc.querySelector('.vanila');
// 제이쿼리
var $jq = $('.jquery'); 

// 이벤트
// - 자바스크립트
vanila.addEventListener('click',function(){

    var box1 = doc.querySelector('.box1');
    var number = 200;
    box1.style.backgroundColor = 'orange';
    box1.style.width = number + 'px';
});
// 제이쿼리
$jq.click(function(){

}); // 권장하지 않는 방식
/*
$jq.on('click',function(){
    var $box2 = $('.box2');
    var $number = 200;
   // $box2.css('background-color','green').css('width',$number); // px을 붙이지 않아도 된다.
    //box2.css('width','200px');
    $box2.css({
        backgroundColor: 'orange',
        width : $number
    });
    // 블럭으로 하면 콜론으로 바뀜 // value : key 의 방식으로 바뀌기 때문에 쿼터가 필요가 없다.
}); // 권장하는 방법
// 자바스크립트는 html에서 주석처리를 하면 에러가 발생하지만 제이쿼리는 에러가 발생하지 않는다.
// 반대로 말하면 제이쿼리에서 문제가 발생했을 때 오류를 발견하기가 어렵다. console.log()를 활용하자.
// 명령어를 잘못쓰거나 규칙에 맞지 않게 쓰면 에러는 발생한다.
*/
// on 메소드(기능)
// 이벤트를 다양하게 사용이 가능하다.
/*
$jq.on('click mouseover mouseout',function(){
    // 선택자.classList.toggle();
    // 선택자.classList.add();
    // 선택자.classList.remove();
    $('.box2').toggleClass('green');
});
*/
// on method 안에 (key : value ,)
/*
$jq.on({
    click : function(){
        $('.box2').css('width',200);
    },
    mouseover : function(){
        $('.box2').addClass('green');
    },
    mouseout : function(){
        $('.box2').removeClass('green');
    }
});
*/

// mouseover mouseout
// mouseenter mouseleave -> jQery에서만 사용되는 이벤트

var num1 = 0;
var num2 = 0;
/*
$('.box1').on('mouseover',function(){
    num1++;
    console.log(num1);
    //자식한테도 영향을 주는 이벤트(버블링 효과)
});

$('.box2').on('mouseenter',function(){
    num2++;
    console.log(num2);
    // mouseover와 다르게 1회성 // 태그영역만을 체크하는 이벤트
});

$('.box2').on('mouseleave',function(){
    num2--;
    console.log(num2);
});
*/

$('.box2').hover(function(){ // hover는 명령어이다. -> mouseenter + mouseleave -> 버블링이 일어나지 않음
    num2++;
    console.log(num2);
},function(){
    num2--;
    console.log(num2);
});
// hover 메소드에서 파라미터의 첫번째로 함수를 하면 mouseenter와 mouseleave의 속성을 갖게 되고
// function을 추가하게 되면 첫번째는 mouseenter 두번째는 mouseleave의 속성을 갖는다.

// 현재 스타트업에서 많이 사용하는 스타일 가이드는 ESLINT 
// AWS / GIT / DOCKER
// AGILE 개발
// TDD/DDD
// WEBBPACK
// 데이터의 시각화가 매우 중요해졌다.
// css의 기능이 향상되면서 jquery의 기능이 좋아졌다.

// scroll event 
// 플러그인
// 구글, 페이스북, 카카오 API 
// 객체지향 프로그래밍(oop)

// node, mysql, react, restful api, http 통신
// 
