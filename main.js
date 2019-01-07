$(function () {



    $("div.top_box").find("li").each(function (index, item) {
        $(item).click(function () {
            if (!$(item).hasClass("now")) {
                $(item).addClass("now");
                $(item).siblings("li").removeClass("now");
                var boxClass = "box_" + (index + 1);
                $("div." + boxClass).show();
                $("div." + boxClass).siblings(":not(div.top_box)").hide();
            }
        })
    })
    $("div.hotsale").find("li").each(function () {
$(this).parent().parent().find("li").each(function (index, item) {
          $(item).click(function () {
              if (!$(item).hasClass("now")) {
                  $(item).addClass("now");
                  $(item).siblings("li").removeClass("now");
                  var $showDiv = $(item).parent().parent().siblings("div:not(div.hotsale)").eq(index);
                  $showDiv.show();
                  $showDiv.siblings("div:not(div.hotsale)").hide();
              }
          })
      })

  })
  $("div.lbss").find("li").each(function () {
             $(this).parent().parent().find("li").each(function (index, item) {
          $(item).click(function () {
              if (!$(item).hasClass("now")) {
                  $(item).addClass("now");
                  $(item).siblings("li").removeClass("now");
                  var $showDiv = $(item).parent().parent().siblings("div:not(div.lbss)").eq(index);
                  $showDiv.show();
                  $showDiv.siblings("div:not(div.lbss)").hide();
              }
          })
      })

  })
     $("div.search_nav").find("li").each(function (index, item) {
        $(item).click(function () {
            if (!$(item).hasClass("now")) {
                $(item).addClass("now");
                $(item).siblings("li").removeClass("now");
                var boxClass = "search_up" + (index + 1);
                $("div." + boxClass).show();
                $("div." + boxClass).siblings(":not(div.search_nav)").hide();
            }
        })
    })


})