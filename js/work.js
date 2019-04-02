/*jslint browser: true*/
/*global $, jQuery, console, alert*/

var work;
var pagenum = 0;

function page(pagenum) {
     "use strict";
     
     $(".page").empty();
     var str = "<div class='row parent'><img class='work' src='" +
               work[pagenum].image + "'><div class='col-12 work'><div id='title'><h2>";

     if (work[pagenum].site !== "") {
            str += "<a href='" + work[pagenum].site + "' target='_blank'>" + work[pagenum].name + "</a>";
     } else {
           str += work[pagenum].name;
     }

     str += "</h2></div><div id='des'>" +
            work[pagenum].description + "<br>";

     if (work[pagenum].skill.length > 0) {
          str += "<br><div>";
          
          work[pagenum].skill.forEach(function (skillname) {
               str += "<span id='skill'>" + skillname + "</span>";
          });
     }

     str += "</div></div></div></div>";
     
     str += "</div>";
     $(".page").append(str);
     
     setTimeout(function () {
          $("img.work").css("transform", 'translate(0%)');
          $("div.work").css("transform", 'translate(0%)');
          $("img.work").css("opacity", '1');
          $("div.work").css("opacity", '1'); }, 200);
}

jQuery.getJSON("js/data.json", function (data) {
     "use strict";
     
     work = data.work;
     
     var str = "<ul>";

     for (var i = 0; i < work.length; i += 1) {
          if (i === 0) {
               str += "<li class='current'><a href='#'>" + i + "</a></li>";
          } else {
               str += "<li><a href='#'>" + i + "</a></li>";
          }
     }
     
     str += "</ul>";
     $(".dotstyle").append(str);
     
     page(0);
});

$("div.dotstyle").on('click', 'li', function () {
     "use strict";
     
     var newPagenum = $(this).text();
     
     if(newPagenum != pagenum)
     {
          $("div.dotstyle li").removeClass("current");
          $(this).toggleClass("current");

          $("img.work").css("transform", 'translate(-100%)');
          $("div.work").css("transform", 'translate(100%)');
          $("img.work").css("opacity", '0');
          $("div.work").css("opacity", '0');

          setTimeout(function () {
               page(pagenum); }, 1500);
          
          pagenum = newPagenum;
     }
});

$(window).bind('wheel', function (event) {
     var isnext = false;
     
     if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
          if(pagenum > 0) {
               pagenum -= 1;
               isnext = true;
          }
     } else {
          if(pagenum < work.length - 1) {
               pagenum += 1;
               console.log(pagenum);
               isnext = true;
          }
     }
     
     if(isnext) {
          $("div.dotstyle li").removeClass("current");
          $('div.dotstyle li:contains(' + pagenum + ')').toggleClass("current");

          $("img.work").css("transform", 'translate(-100%)');
          $("div.work").css("transform", 'translate(100%)');
          $("img.work").css("opacity", '0');
          $("div.work").css("opacity", '0');

          setTimeout(function () {
               page(pagenum); }, 1500);
     }
});

$(window).on('swiperight', function (event) {
               console.log(pagenum);

     var isnext = false;

     if(pagenum < work.length - 1) {
          pagenum += 1;
          isnext = true;
     }
     
     if(isnext) {
          $("div.dotstyle li").removeClass("current");
          $('div.dotstyle li:contains(' + pagenum + ')').toggleClass("current");

          $("img.work").css("transform", 'translate(-100%)');
          $("div.work").css("transform", 'translate(100%)');
          $("img.work").css("opacity", '0');
          $("div.work").css("opacity", '0');

          setTimeout(function () {
               page(pagenum); }, 1500);
     }
});