jQuery.getJSON("js/data.json", function(data){
     var str = "<div class='row'>";
     var work = data["work"];
     
     for(var i = 0; i < work.length; i++) {
          if(i%2 == 0){
               str+= "<div class='col-sm-4'><div class='row'>";
          }
          
          str += "<div class='col-md-12 work'><div><img src='" + work[i].image + "'></div>";
          str += "<div><b>" + work[i].name + "</b> ";
          str += work[i].description + "</div>";
          
          if(work[i].skill.length > 0){
               str += "<br><div>"
               work[i].skill.forEach(function(skillname){
                    str += "<span id='skill'>" + skillname + "</span>";
               });
          }
          
          str += "</div></div>";
          
          if(i%2 == 1){
               str += "</div></div>";
          }
      }
     
     str += "</div>"
     $("body").append(str);
     
});