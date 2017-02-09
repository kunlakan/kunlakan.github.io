jQuery.getJSON("js/data.json", function(data){
     var str = "";
     var job = data["job"];
     
     for(var i = 0; i < job.length; i++) {
          str += "<div class='col-xs-12'><a target='_blank' href='" + job[i].site + "'>";
          str += "<img src='" + job[i].logo +"' class='logo'></a>";
          str += "<div class='right'>" + job[i].time + "<br>";
          str += job[i].area + "</div>";
          str += "<div class='col-xs-10 center'><h3>" + job[i].name + "<br>";
          str += job[i].title + "</h3></div></div>";
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
});
