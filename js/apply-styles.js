$( document ).ready(function() {
 
    $("table").addClass("table table-bordered");
    $("p").addClass("text-jusitfy");
    $("#header ul li").addClass("text-capitalize h2");

    $("#sidebar ul").addClass("nav");
    $("#sidebar > ul").addClass("bs-docs-sidenav affix");

    $("img").addClass("img-responsive center-block");

    $('.grid').masonry({
        // options
//        columnWidth: '.grid-sizer',
        columnWidth: 100,
        itemSelector: '.grid-item',
        percentPosition: true
    });

//    $("caption").css("color","#000000");
//    $("caption").css("text-align", "center");
//    $("caption").css("font-weight", "bold");
});
