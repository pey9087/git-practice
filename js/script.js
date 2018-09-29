// 지정한 필터 조건 삭제
$(document).on("click", ".result-tag button", function(){
	if($(".result-tag button").length == 1){
		$(this).parents(".filter-section.result-tag").remove();
		$(".img-filter-box").removeClass("filter-result");
	}else{
		$(this).parent("li").remove();
	}
});

// Task tab
function task_tab(i){

    var tab_title = $(".task-wrap .task-tab").find("li");
    var tab_sub = $(".task-wrap").find(".task-sub");
    var tab_cont = $(".task-wrap").find(".task-list");


    tab_title.removeClass("active").eq(i).addClass("active");
    tab_sub.hide().eq(i).show();
    tab_cont.hide().eq(i).show();

    $(".task-wrap .task-tab li button").click(function(){

        for ( var i = 0; i < tab_title.length; i++ ) {
            if (i == $(this).parent("li").index()) {
                tab_title.eq(i).addClass("active");
                tab_sub.eq(i).show();
                tab_cont.eq(i).show();
            } else {
                tab_title.eq(i).removeClass("active");
                tab_sub.eq(i).hide();
                tab_cont.eq(i).hide();
            }
        }
    });
}

// table to do display
function todo_display(){
    var todo_index = $(".todo-list table tbody").find("tr");
    var todo_cont = $(".todo-list").find(".todo-box");

    $(".todo-list .todo-btn").hover(function(){
        for ( var i = 0; i < todo_index.length; i++ ) {
            if (i == $(this).parents("tr").index()) {
                todo_index.eq(i).addClass("active");
                todo_cont.eq(i).show();
            }
        }
    },function(){
        for ( var i = 0; i < todo_index.length; i++ ) {
            if (i == $(this).parents("tr").index()) {
                todo_index.eq(i).removeClass("active");
                todo_cont.eq(i).hide();
            }
        }
    });
}

// 임시 저장 안내 confirm 팝업
$(document).on("click", ".confirm-btns .temp-btn", function(){
    if(!$(this).hasClass("active")){
        $(this).addClass("active");
        $(".popup-dim").fadeIn();
        $(".confirm-popup.temp-confirm").show();
    }
});
$(document).on("click", ".confirm-popup .close-btn", function(){
    $(this).removeClass("active");
    $(".popup-dim").fadeOut();
    $(".confirm-popup.temp-confirm").hide();
});

// layer popup
function layer_popup(el){
    var $el = $(el); //레이어의 id를 $el 변수에 저장

    $(".popup-dim").fadeIn();
    $el.fadeIn();

    var $elWidth = ~~($el.outerWidth()),
        $elHeight = ~~($el.outerHeight()),
        winWidth = $(window).width(),
        winHeight = $(window).height();

    // 화면의 중앙에 레이어를 띄운다.
    if($elHeight > winHeight) {
        $el.css({top: 10});
    }else{
        $el.css({marginTop: -(($elHeight)/2)});
    }

    // 레이어 팝업 닫기
    $el.find(".layer_close").click(function(){
        $(".popup-dim").fadeOut();
        $el.fadeOut();
        return false;
    });
}

// UI 셀렉트박스 여닫이
$(document).on("click", ".select-ui .select-value", function(){
    if(!$(this).parent(".select-ui").hasClass("active")){
        $(".select-ui").removeClass("active");
        $(this).parent(".select-ui").addClass("active");
    }else{
        $(this).parent(".select-ui").removeClass("active");
    }
});
$(document).click(function(e){
    if(!$(e.target).is(".select-ui .select-value")){
        $(".select-ui").removeClass("active");
    }
});
// UI 셀렉트박스 선택
$(document).on("click", ".select-box li > button", function(){
    var select_html = $(this).html();
    var $select_ui = $(this).parents(".select-ui");
    var $select_value = $select_ui.find(".select-value");

    $select_ui.find("li").removeClass("active");
    $(this).parent("li").addClass("active");
    $select_value.removeClass("placeholder");
    $select_value.html(select_html);
    $select_ui.removeClass("active");
});

$(document).ready(function(){
    task_tab(0); // 메뉴 탭
    todo_display(); // 테이블 툴팁 띄우기

    $(".select-ui .select-box").mCustomScrollbar({ // UI 셀렉트박스 스크롤
        scrollInertia: 300
    });
    $(".entered-value .value-box").mCustomScrollbar({ // 입력된 value값 obj, meta
        scrollInertia: 300
    });
});