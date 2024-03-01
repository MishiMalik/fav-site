
window.addEventListener('resize', function() {
    if (window.innerWidth < 1024) {
        $(".menu-btn").on("click", function () {
            $(".manu-div").removeClass("scale-0");
            $(".close-btn").removeClass("hidden");
            $("body").css("overflow", "hidden");
        })
        
        $(".close-btn").on("click", function () {
            $(".manu-div").addClass("scale-0");
            $(this).addClass("hidden");
            $("body").css("overflow", "auto");
        })
       
    } else {
            $(".manu-div").addClass("scale-0");
            $(".close-btn").addClass("hidden");
            $("body").css("overflow", "auto");
    }
});

// Check on page load
if (window.innerWidth < 1024) {

 
    $(".menu-btn").on("click", function () {
        $(".manu-div").removeClass("scale-0");
        $(".close-btn").removeClass("hidden");
        $("body").css("overflow", "hidden");
    })
    
    $(".close-btn").on("click", function () {
        $(".manu-div").addClass("scale-0");
        $(this).addClass("hidden");
        $("body").css("overflow", "auto");
    })
    
}
// apply style on navabar
// window.addEventListener('scroll', () => {
//     const verticalScrollPx = window.scrollY || window.pageYOffset;
//     var topNavbar = document.querySelector(".top-navbar");
//     if (verticalScrollPx < 20) {
//         topNavbar.style.boxShadow = 'none';
//     } else {
//         topNavbar.style.boxShadow = 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px';
//     }
// });
