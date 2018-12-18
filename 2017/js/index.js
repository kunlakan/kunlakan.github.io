var title = "<div id='titleName'><h1>KUNLAKAN<br>CHERDCHUSILP</h1></div>";
var htitle = "<span id='heart'>&hearts;</span>";
var menu = ["work", "experience", "education", "me"];


/*================================ LOAD DATA ================================*/

$("#title").append(htitle);
$("#title").append(title);

menu.forEach(function (i) {
     $("#menu").append("<div class='col-xs-6 col-md-3'>" + i + "</div>");
});

$("iframe").attr("src", "work.html");

$("#footer").append(" 2016 Kunlakan Cherdchusilp");


/*================================= EFFECTS =================================*/
function run() {
     var heart = $("#heart");
     heart.animate({fontSize: "7vw"}, 400, function () {
          $("#heart").animate({fontSize: "8vw"}, 400);
          run();
     });
}

$("#menu div").mouseover(function () {
     $(this).animate({fontSize: "1.1em"}, 150);
});

$("#menu div").mouseout(function () {
     $(this).animate({fontSize: "1em"}, 150);
});

$("h1").click(function () {
     $("iframe").attr("src", "work.html");
});

$("#menu div").click(function () {
     var url = $(this).text();
     
     if (url === "me") {
          url = "about";
     }
    
     url += ".html";
     
     $("iframe").fadeOut(500, function () {
          $("iframe").attr("src", url);
          $("iframe").fadeIn(1000);
          
     });
});

//$("iframe").height($(window).height() - ($(window).height() * 0.32));

run();
