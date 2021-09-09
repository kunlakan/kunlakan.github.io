function run() {
     var heart = $("#heart");
     heart.animate({fontSize: "250px"}, 400, function () {
          $("#heart").animate({fontSize: "300px"}, 400);
          run();
     });
}

run();