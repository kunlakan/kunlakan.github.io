jQuery.getJSON("js/data.json", function(data){
     var str = "";
     var job = data["job"];
     
     for(var i = 0; i < job.length; i++) {
          str += "<div class='left'><a target='_blank' href='" + job[i].site + "'>";
          str += "<img src='" + job[i].logo +"' class='logo'></a></div>";
          str += "<div class='center'><h3>" + job[i].name + "<br>";
          str += job[i].title + "</h3></div>";
          str += "<div class='right'>" + job[i].time + "<br>";
          str += job[i].area + "</div>";
          str += "<div class='full'>" + job[i].description + "</div>";
          
          if(job[i].skill.length > 0){
               str += "<div class='full'><br>";
               job[i].skill.forEach(function(skillname){
                    str += "<span id='skill'>" + skillname + "</span>";
               });
          }
          
          str += "</div>";
          
          if(i != job.length - 1){
               str += "<hr>";
          }
          
          $("body").append(str);
          str = "";
      }
});
