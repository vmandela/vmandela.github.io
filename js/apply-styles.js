$( document ).ready(function() {
 
    // bootstrap needs blockquote class
    // on the tag to apply styles
    $("blockquote").addClass("blockquote");

    // Justify the paragraphs
    $("p").addClass("text-justify");

    // Slight shadow for highlighting code
    $("div.sourceCode").addClass("shadow-sm p-3 mb-5");

    $("div.sidebar ul").addClass("nav flex-column");
    
    $("div.sidebar ul li").addClass("nav-item");
    $("div.sidebar ul li a").addClass("nav-link");


    //$("div.navmenu").addClass("navbar-collapse collapse");
    $("div.navmenu ul").addClass("nav nav-pills");
    $("div.navmenu ul li").addClass("nav-item");
    $("div.navmenu ul li a").addClass("nav-link");
    //$("table").addClass("table table-bordered");
    // $("#header ul li").addClass("text-capitalize h2");

    // $("#sidebar ul").addClass("nav");
    // $("#sidebar > ul").addClass("bs-docs-sidenav affix");

    // $("img").addClass("img-responsive center-block");

    $('.grid').masonry({
        // options
//        columnWidth: '.grid-sizer',
        columnWidth: 100,
        itemSelector: '.grid-item',
        percentPosition: true
    });

    $("body").css("position","relative","margin-top","5em");
//    $("caption").css("color","#000000");
//    $("caption").css("text-align", "center");
//    $("caption").css("font-weight", "bold");
});
