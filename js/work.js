jQuery.getJSON("js/data.json", function(data){
     var str = "";
     var work = data["work"];
     
     for(var i = 0; i < work.length; i++) {
          str += "<div class='col-sm-6 col-lg-4 work'><div><img src='" + work[i].image + "'></div>";
          str += "<div><b>" + work[i].name + "</b> ";
          str += work[i].description + "</div>";
          
          if(work[i].skill.length > 0){
               str += "<br><div>"
               work[i].skill.forEach(function(skillname){
                    str += "<span id='skill'>" + skillname + "</span>";
               });
          }
          
          str += "</div>";
          
          $("body").append(str);
          str = "";
      }
});