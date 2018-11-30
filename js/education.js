jQuery.getJSON("js/data.json", function(data){
     var str = "<div class='row parent' style='padding-left: 30px;'>";
     var school = data["school"];
     
     for(var i = 0; i < school.length; i++) {
          str += "<div class='col-sm-10'><a target='_blank' href='" +
                 school[i].site + "'><img src='" + school[i].logo +
                 "' id='logo' align='left'></a><h4>" + school[i].name +
                 "<br>" + school[i].degree + "</h4></div>";
          
          str += "<div class='col-sm-2'>" + school[i].graduation + "<br>" +
                 school[i].area + "</div>";
                    
          if(school[i].course.length > 0){
               str += "<div class='col-sm-12'>Related Coursework:<ul>";
               school[i].course.forEach(function(coursename){
                    str += "<li>" + coursename + "</li>";
               });
               str += "</ul></div>";
          }
         
          if(school[i].honor.length > 0){
               str += "<div class='col-xs-12'>Honors & Awards:<ul>";
               school[i].honor.forEach(function(honorname){
                    str += "<li>" + honorname + "</li>";
               });
               str += "</ul></div>";
          }
         
          if(i != school.length - 1){
               str += "<div class='col-xs-12'><hr></div>";
          }
      }

     str += "</div>";
     $("body").append(str);
});