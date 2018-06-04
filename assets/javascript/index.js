$(document).ready(function () {


    //Page scroll click handlers
    $("#work").on("click", function () {
        scrollToAnchor('about');
    })

    $("#home-btn").on("click", function () {
        scrollToAnchor('home');
    })

    $("#about-btn").on("click", function () {
        scrollToAnchor('about');
    })

    $("#portfolio-btn").on("click", function () {
        scrollToAnchor('portfolio');
    })

    $("#contact-btn").on("click", function () {
        scrollToAnchor('contact');
    })

    $("#to-home").on("click", function () {
        scrollToAnchor('home');
    })

    //Hides card text on portfolio projects
    $('.card-text').hide();
    //Shows card text on hover
    $(".card").hover(function () {
        $(this).find(".card-text").slideDown('fast')
    }, function () {
        $(this).find(".card-text").slideUp('fast')
    })

    //Modal functions
    $(".learn-more").on("click", function () {
        //Logic for determining which images, text and links to display
        if (this.id === "motivator-btn"){
            $("#demo-pic").css({
                'background-image': 'url("assets/img/motivator1.png"',
            });
            $("#info-header").text("MOT1V8R")
            $("#info-text").text("MOT1V8R is a full stack app for establishing daily habits and reaching your goals. Set a daily reminder and receive a text message reminding you of the tasks you want to accomplish. Track your progress online to help motivate you to success! ")
            $("#weblink").attr("href", "https://secure-tor-11865.herokuapp.com/")
            $("#gitlink").attr("href", "https://github.com/cezarcarvalhaes/m0t1v8r")
        }
        else if (this.id === "trailerpark-btn"){
            $("#demo-pic").css({
                'background-image': 'url(assets/img/trailerpark1.png)',
            });
            $("#info-header").text("Trailer Park")
            $("#info-text").text("What to watch and where to find it. With Trailer Park, users can see the what top movies and tv shows are available, watch their trailers and find them in theaters or through a streaming platform. ")
            $("#weblink").attr("href", "https://cezarcarvalhaes.github.io/Trailer-Park/")
            $("#gitlink").attr("href", "https://github.com/cezarcarvalhaes/Trailer-Park")
        }
        $("#myModal").css("display", "block");
    });

    // When the user clicks on <span> (x), close the modal
    $(".close").on("click", function () {
        $("#myModal").css("display", "none");
    });

    // When the user clicks anywhere outside of the modal, close it
    $(document).click(function (event) {
        //if you click on anything except the modal itself or the "open modal" link, close the modal
        if (!$(event.target).closest(".modal-content,.learn-more").length) {
            $("body").find(".modal").css("display","none");
        }
    });

    //Click handler in a script tag in index.html
    // When user clicks icon on mobile, shows nav links
    function navBar() {
        var nav = document.getElementById("navbar");
        nav.className += " responsive";
    }

    function scrollToAnchor(element) {
        var element = $("a[name='" + element + "']");
        $('html,body').animate({ scrollTop: element.offset().top }, 'slow');
    }
})
