var title = "<div class='col-xs-11'><h1>KUNLAKAN<br>CHERDCHUSILP</h1></div>";
var htitle ="<div class='col-xs-1'><span id='heart'>&hearts;</span><div>";
var menu = ["work", "experience", "education", "me"];


/*================================ LOAD DATA ================================*/

$("#title").append(title);
$("#title").append(htitle);

menu.forEach(function (i) {
    $("#menu").append("<div class='col-xs-3'>" + i + "</div>");
});

$("iframe").attr("src", "work.html");
$('iframe').height( $('iframe').contents().outerHeight() );

$("#footer").text("© 2016 Kunlakan Cherdchusilp");


/*================================= EFFECTS =================================*/

$("#menu div").mouseover(function(){
     $(this).animate({fontSize: "1.1em"}, 150);
});

$("#menu div").mouseout(function(){
     $(this).animate({fontSize: "1em"}, 150);
});

$("h1").click(function () {
     $("iframe").attr("src", "work.html");
});


$("#menu div").click(function () {
    var url = $(this).text();
     
    if( url === "me"){
        url = "about"
    }
    
     url += ".html";
     
     $("iframe").fadeOut(500, function(){
          $("iframe").attr("src", url);
          $("iframe").fadeIn(1000);
          
     })
});

run();

function run(){
     var heart = $("#heart");
     heart.animate({fontSize: "7.5vw"}, 400, function(){
          $("#heart").animate({fontSize: "8.5vw"}, 400);
          run()
          });
}