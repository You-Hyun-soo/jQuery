console.log(data);

// 동적할당에 기능

var example = '데이터';
// 태그 만들기
// 객체로서의 div를 잡는 것
var tag = $('<div>');
var ptag = $('<p>')

ptag.addClass('color');
tag.append(ptag);
//tag.text(ptag); // string 이 가능 (문자열을 붙이는 기능)
//tag.html('<p></p>'); // 태그형태 문자를 붙일 때 사용
$('.container').append(tag); // append : 뒤에 붙이다 ! = prepend
// append 방식 구조가 복잡해지면 힘들어짐

// 동적 할당의 두번째 방법

var open = '<div> \
    <p class = "color">' + example + '</p>\
    </div>';
var open = `<div> 
    <p class = "color"> ${example} </p>
    </div>`;
$('.container').append(open);
// string 방식은 들여쓰기를 하면 보기가 안좋아짐
// 들여쓰기하려면 역슬레쉬나 ``블록 방식

// 데이터 가져와서 뿌려주기

$('.ok').on('click',function(){
    
    //1. number input 태그의 값을 가지고 온다.
    var str = $('.number').val();
    //2. 1번에서 가지고 온 데이터를 div 태그를 만들어서 넣어준다.
    var plus = '<div class = "menu">' + str + '</div>';
    //3. 2번에서 만들어진 태그를 wrapper 태그에 붙여 준다.
    $('.wrapper').append(plus);

    $('.number').val('').focus();
});

// 데이터를 삭제 해보기
/*

    동적으로 추가된 태그에는 이벤트가 적용이 안된다.
    선택자 방법을 다르게 구현해야 한다.
    live 기능이 있었으나 1.7 이후에 없어졌다.
    document 를 선택자로 하고 menu라는 클래스를 뒤에서 찾게해준다.
 */
//$('.menu').on('click',function(){
    $(document).on('click','.menu',function(){
        $(this).remove();
        //this.remove(); // javascript의 this로 사용 가능하다.
});

/*
    조회, 삽입, 수정, 삭제
    select, insert, update, delete
    get,  post, put, delete
*/

// 전화번호부 기능을 만들기

// 1. 데이터를 입력시켜서 테이블에 추가 되는 기능 만들기
// $('.add').on('click',function(){
//     var str1 = $('.name').val();
//     var str2 = $('.phone').val();
//     var plus1 = '<tr><td>' + str1 + '</td><td>' + str2 + '</td></tr>'
//     $('tbody').append(plus1);
    
var selected = -1;
    
// });
function addPhone(){

   
    var name = $('.name').val();
    var phone = $('.phone').val();

    if( ! name || !phone ) {
        alert('이름과 전화번호를 모두 입력해주세요');
        return;
    }

    var tag = '<tr>\
        <td>' + name + '</td>\
        <td>' + phone + '</td>\
    </tr>';

    $('tbody').append(tag);
    var plus = {
        name : name,
        phone : phone
    }
    data.list.push(plus);
    // 위의 방식은 수정과 삭제가 힘들다.
    console.log(data);
}
//$('.add').on('click',addPhone);

// 2. data.js의 데이터를 먼저 보여주고 기능을 진행한다.
// 데이터가 기본이 되야 한다.



function viewList(){

    $('tbody').empty();
    for( var i =0; i < data.list.length; i++) {
        // '<tr class="idx' + i +'">\
    var tag = '<tr class="idx' + i +'" data-idx="' + i + '">\
        <td class="name">' + data.list[i].name + '</td>\
        <td class="phone">' + data.list[i].phone + '</td>\
        <td class="remove">삭제</td>\
        <td class="select">수정</td>\
    </tr>';

    $('tbody').append(tag);
}
};
function newFunc(){
    if( selected >= 0 ) {
        alert('수정을 위한 값입니다. 등록을 원할 경우 새로운 값을 입력해주세요');
        return;
    }

        var name = $('.name').val();
        var phone = $('.phone').val();
    
        if( ! name || !phone ) {
            alert('이름과 전화번호를 모두 입력해주세요');
            return;
        }
    
        var plus = {
            name : name,
            phone : phone
        }
        data.list.push(plus);
        viewList();
}

function removeItem(){

    
    //splice 배열을 삭제할 때 사용하는 메소드
    //배열.splice(index,index부터 없앨 숫자의 갯수);
    
    //var idx = $(this).index(); // 계속 2만 들어오는 구조
    var idx = $(this).parent().index(); // parents(tr)
    data.list.splice(idx,1);
    viewList();
    // 데이터를 모두 지우고 새롭게 다시 추가하는 방식
    // 사양이 좋지 않은 컴퓨터는 느려질 가능성이 높다.
    // 100개에서 + 1을 하는 방식을 사용해야 한다.
    // react 메모리상의 변동이 없으면 그대로 사용하는 방식
}

// function updateItem(){
//     var nam = $('.name').val();
//     var phon = $('.phone').val();
//     var idx = $(this).parent().index();
//     var up = data.list[idx]
    
//     console.log(up.name);
    
// }
// function modifyItem(){
//     var idx = $(this).parent().index();
//     var up = data.list[idx]
//     console.log(up.name);
//     console.log(up.phone);
//     $('.name').val(up.name);
//     $('.phone').val(up.phone);
//     viewList();
// }
$('.add').on('click',newFunc);
$(document).on('click','.remove',removeItem);
// $(document).on('click','.update',updateItem);
// $(document).on('click','.modify',modifyItem);
viewList();

// 수정하는 기능 만들기
// 수정하기 누르면 이름 폰의 값을 input 값에 넣고 다시 위의 수정 버튼을 누르면 바꾸는 방식
// index를 key로 쓸수 있는 것
// index는 음수가 나오지 않는다는 것을 이용하자
$(document).on('click','.select',function(){
    
    // var idx = $(this).parent().index();
    // var idx =$(this).parent().attr('class').replace('idx',''); // idx0 // replace는 한번만 작동되기 때문에 전체를 하는 것은 만들어야 한다.
    // replace에서 정규표현식을 사용하면 전체 변경이 가능하다.
    var idx = $(this).parent().data('idx');
    console.log(idx);
    selected = idx;

    var name = $('.name');
    var phone = $('.phone');
    
    var a = $(this).siblings('.name').text()
    var b = $(this).siblings('.phone').text()
    // name.val(data.list[idx].name);
    // phone.val(data.list[idx].phone);
    name.val(a);
    phone.val(b);
    

    // alert('수정이 선택이 되었습니다.')
});

$('.edit').on('click',function(){
    var name = $('.name').val();
    var phone = $('.phone').val();

    data.list[selected].name = name;
    data.list[selected].phone = phone;

    selected = -1;
    viewList();
});