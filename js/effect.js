$("body").on("mouseover", "#skill", function () {
     $(this).animate({backgroundColor: 'lightpink'}, 250);
});

$("body").on("mouseout", "#skill", function () {
     $(this).animate({backgroundColor: 'white'}, 250);
});
