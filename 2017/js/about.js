jQuery.getJSON("js/data.json", function(data){
     var about = data["about"];
     
     $("img.myphoto").attr("src", about.picture);
     $(".des").append("<h2>" + about.head + "</h2><p>" + about.description + "<p>");
     $(".des").append("<p><img src='image/Logo_Linkedin.png' class='sns'><a href='" + about.linkedin + "' target='_blank'>Linkedin/kunlakan</a></p>" );
     $(".des").append("<p><img src='image/Logo_resume.jpg' class='sns'><a href='" + about.resume + "' target='_blank'>My Resume</a></p>" );
     $(".des").append("<p><img src='image/Logo_email.jpg' class='sns'>" + about.email + "</p>");
});