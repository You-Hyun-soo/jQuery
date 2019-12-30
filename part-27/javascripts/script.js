$(document).ready(function(){ // html이 모두 준비가 되면 실행을 해라 (js 링크가 head에 있는 경우)

    var slide = $('.slider').bxSlider({
        // mode : 'fade'
        // slideMargin : 200
        controls : false,
        pager : false,
        onSliderLoad : function(){
            $('.first .box').css('color', 'white');
        },
        onSlideBefore : function(){
            $('.box').css('color','transparent')
        },
        onSlideAfter : function($slideElement, oldIndex, newIndex){

            $slideElement.find('.box').css('color','white');
            //$('.item').eq(newIndex).find('.box').css('color','white'); // newIndex는 힘들다
        }
       

    });

    $('.button button').on('click',function(){
        
        var idx = $(this).index();
        slide.goToSlide(idx);
    });

    $('.move .prev').on('click',function(){
        slide.goToPrevSlide();
    });
    $('.move .next').on('click',function(){
        slide.goToNextSlide();
    });
  });

  // callback
  // 슬라이드 동작이 끝나거나 혹은 시작하거나 등 행위에 대한 시점을 알려주는 정보를 준다.
  // 채널에 나오는 추천영화 같은

  // method
  // 슬라이드 조작한다. 리모콘

 