/*jslint browser: true*/
/*global $, jQuery, console, alert*/

function page(pagenum) {
     "use strict";
     
          /*str += "<div class='col-xs-12'><a target='_blank' href='" + job[i].site + "'>";
          str += "<img src='" + job[i].logo +"' class='logo'></a>";
          str += "<div class='right'>" + job[i].time + "<br>";
          str += job[i].area + "</div>";
          str += "<div class='col-xs-12 center'><h4>" + job[i].name + "<br>";
          str += job[i].title + "</h4></div></div>";
          str += "<div class='col-xs-12 full'>" + job[i].description + "</div>";
          
          if(job[i].skill.length > 0){
               str += "<div class='col-xs-12 full'><br>";
               job[i].skill.forEach(function(skillname){
                    str += "<span id='skill'>" + skillname + "</span>";
               });
          }
          
          str += "</div>";
          
          if(i != job.length - 1){
               str += "<div class='col-xs-12'><hr></div>";
          }
          
          $("body").append(str);
          str = "";
      }
     
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

     if (work[pagenum].skill.length > pagenum) {
          str += "<br><div>";
          
          work[pagenum].skill.forEach(function (skillname) {
               str += "<span id='skill'>" + skillname + "</span>";
          });
     }

     str += "</div></div></div></div>";
     
     str += "</div>";
     $("body").append(str);
     
     setTimeout(function () {
          $("img.work").css("opacity", '1');
          $("div.work").css("opacity", '1'); }, 300);*/
}

jQuery.getJSON("js/data.json", function (data) {
     "use strict";
     
     var job = data.job;
     var str = "<div class='page'><div class='row parent'><div class='logo'><ul>";
     
     var i;
     for (i = 0; i < job.length; i += 1) {         
          if (i === 0) {
               str += "<li class='current'><img src='" + job[i].logo + "' id='logo'><a href='#'>"
                      + i + "</a></li>";
          } else {
               str += "<li><img src='" + job[i].logo + "' id='logo'><a href='#'>"
                      + i + "</a></li>";
          }

     }
     
     str += "</ul></div><div class='job'></div></div></div>";
     
     $("body").append(str);
     page(0);
});

$("div.logo").on('click', 'li', function () {
     "use strict";
     
     $(this).toggleClass("current");
     $("div.logo li").removeClass("current");
});