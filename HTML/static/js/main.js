$('.sub_menu_wrap').click(function (e) { 
    e.preventDefault();
    $(this).find($("ul")).slideToggle();
    $(this).find($('.icon_arow')).toggleClass('click_menu_icon')
});
//open menu
$('.btn_menu').click(function (e) { 
    $('.menu').addClass('menu_mobile');
});
$('.btn_exit_menu').click(function (e) { 
    $('.menu').removeClass('menu_mobile');
});
$('.btn_sub_menu').click(function (e) { 
    $('.sub_menu').toggleClass('open_sub_menu');
});
$('.btn_exit_sub_menu').click(function (e) { 
    $('.sub_menu').removeClass('open_sub_menu');
});
$('.btn_category_filter').click(function (e) { 
    $(this).find($('.category_filter')).slideToggle();
    $(this).find($('.category_filter')).toggleClass('open_category_filter');
});

$(document).mouseup(function(e) 
{
    var container = $(".btn_category_filter");

    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $(this).find($('.category_filter')).slideUp();
        $(this).find($('.category_filter')).removeClass('open_category_filter');
    }
});
$('.thCategory').click(function (e) { 
    $(this).find($('.icon')).toggleClass('icon_rotate');
});
// $('.line_table').click(function (e) { 
    
//     $(this).toggleClass('bg_click_green')
// });

//
let tabs = document.querySelectorAll(".line_table");
let tabsArray = Array.from(tabs);
tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    // console.log(ele);
    tabsArray.forEach((ele) => {
      ele.classList.remove("bg_click_green");
    });
    e.currentTarget.classList.add("bg_click_green");
  });
});

//disabled_line
$('.btn_disabled').click(function (e) { 
    
    $(this).closest($('.line_table_review')).toggleClass('disabled_line');
    console.log($(this))
    console.log('hihi')
});

//add PDA

$('.add_menber').click(function (e) { 
    var offset = $(this).offset();
    var top1 = offset.top - 5;
    var left1 = offset.left + 60;
    $("#searchUser").offset({ top: top1, left: left1 }).addClass('open_searchUser');
    
   
    $(document).mouseup(function(e) 
    {
        var container = $('.add_menber');

        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            $("#searchUser").removeClass('open_searchUser');
        }
    });
});
