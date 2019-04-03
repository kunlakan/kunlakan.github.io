jQuery.getJSON("js/data.json", function (data) {
     "use strict";
     
     var about = data.about;
     var hobbie = about.hobbie;

     $("img.myphoto").attr("src", about.picture);
     $(".des").append("<h2>" + about.head + "</h2><p>" + about.description + "<p>");
     $(".des").append("<p><img src='image/Logo_Linkedin.png' class='sns'><a href='" + about.linkedin + "' target='_blank'>Linkedin/kunlakan</a></p>");
     $(".des").append("<p><img src='image/Logo_github.jpg' class='sns'><a href='" + about.github + "' target='_blank'>Github/kunlakan</a></p>");
     $(".des").append("<p><img src='image/Logo_resume.jpg' class='sns'><a href='" + about.resume + "' target='_blank'>My Resume</a></p>");
     $(".des").append("<p><img src='image/Logo_email.jpg' class='sns'>" + about.email + "</p></br>");
     $(".des").append("<b>WHEN I'M NOT CODING</b></br>");
     
     for (var i = 0; i < hobbie.length; i++) {
          $(".des").append("<div class='col-md-2 col-xs-4 hobbie'><img src='" + hobbie[i].img + "' class='hobbie'><br><br>" + hobbie[i].name + "</div>");

     }
});