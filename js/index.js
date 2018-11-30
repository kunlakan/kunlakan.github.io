/*jslint browser: true*/
/*global $, jQuery, alert*/

/*================================ LOAD DATA ================================*/

jQuery.getJSON("js/data.json", function (data) {
     var title = data.title;
     
     $("#title").append("<h1 id='title'>" + title.title + "</h1>");
     $("#title").append("<h1 id='subtitle'>" + title.subtitle + "</h1>");
});

$("iframe").attr("src", "main.html");

$("#footer").append("&copy; 2016 - 2018 Kunlakan Cherdchusilp");


/*================================= EFFECTS =================================*/

$("#menu a").mouseover(function () {
     $(this).css("color", "white");
});

$("#menu a").mouseout(function () {
     $(this).css("color", "#c2c2c2");
});

$("#hamberger").on("click", function () {
     $("nav").toggleClass("clicked");
     $("#page").toggleClass("clicked");
});

$("li").click(function () {
     var url = $(this).text();
     
     if (url === "Me") {
          url = "about";
     } else if (url === "Home") {
          url = "main";
     }
    
     url += ".html";
     
     $("iframe").fadeOut(500, function () {
          $("iframe").attr("src", url);
          $("iframe").fadeIn(1000);
          
     });
});

document.querySelector("#hamberger").addEventListener("click", function () {this.classList.toggle("active"); });
