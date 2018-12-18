jQuery.getJSON("js/data.json", function(data){
     var str = "";
     var school = data["school"];
     
     for(var i = 0; i < school.length; i++) {
          str += "<div class='col-xs-12><a target='_blank' href='" + school[i].site + "'>";
          str += "<img src='" + school[i].logo +"' class='logo'></a>";
          str += "<div class='right'>" + school[i].graduation + "<br>";
          str += school[i].area + "</div>";
          str += "<div class='col-xs-12 center'><h4>" + school[i].name + "<br>";
          str += school[i].degree + "</h4></div></div>";
                    
          if(school[i].course.length > 0){
               str += "<div class='full'>Related Coursework:<ul>";
               school[i].course.forEach(function(coursename){
                    str += "<li>" + coursename + "</li>";
               });
               str += "</ul></div>";
          }
         
          if(school[i].honor.length > 0){
               str += "<div class='col-xs-12 full'>Honors & Awards:<ul>";
               school[i].honor.forEach(function(honorname){
                    str += "<li>" + honorname + "</li>";
               });
               str += "</ul></div>";
          }
         
          if(i != school.length - 1){
               str += "<hr>";
          }
          
          $("body").append(str);
          str = "";
      }
});