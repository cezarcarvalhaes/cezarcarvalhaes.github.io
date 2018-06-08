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
        //In case weblink button was hidden previously, show. 
        $("#weblink").show();
        //Logic for determining which images, text and links to display
        if (this.id === "motivator-btn"){
            displayMotivator();
        }
        else if (this.id === "trailerpark-btn"){
            displayTrailerPark();
        }
        else if (this.id === "netscrape-btn"){
            displayNetscrape();
        }
        else if (this.id === "friendfinder-btn"){
            displayFriendFinder();
        }
        else if (this.id === "eatdaburger-btn"){
            displayBurger();
        }
        else if (this.id === "rps-btn"){
            displayRps();
        }
        else if (this.id === "bamazon-btn"){
            displayBamazon();
        }
        else if (this.id === "hangmancli-btn"){
            displayHangmanCli();
        }
        else if (this.id === "liri-btn"){
            displayLiri();
        }
        else if (this.id === "dkrpg-btn"){
            displayDkrpg();
        }
        else if (this.id === "whtrivia-btn"){
            displayWhTrivia();
        }
        //Makes the modal appear
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

    //Functions populate modals with appropriate image, text and links.
    function displayMotivator() {
        $("#demo-pic").css({
            'background-image': 'url("assets/img/motivator1.png"',
        });
        $("#info-header").text("MOT1V8R")
        $("#info-text").text("MOT1V8R is a full stack app for establishing daily habits and reaching your goals. Set a daily reminder and receive a text message reminding you of the tasks you want to accomplish. Track your progress online to help motivate you to success! ")
        $("#weblink").attr("href", "https://secure-tor-11865.herokuapp.com/")
        $("#gitlink").attr("href", "https://github.com/cezarcarvalhaes/m0t1v8r")
    }

    function displayTrailerPark() {
        $("#demo-pic").css({
            'background-image': 'url(assets/img/trailerpark1.png)',
        });
        $("#info-header").text("Trailer Park")
        $("#info-text").text("What to watch and where to find it. With Trailer Park, users can see the what top movies and tv shows are available, watch their trailers and find them in theaters or through a streaming platform. ")
        $("#weblink").attr("href", "https://cezarcarvalhaes.github.io/Trailer-Park/")
        $("#gitlink").attr("href", "https://github.com/cezarcarvalhaes/Trailer-Park")
    }

    function displayFriendFinder() {
        $("#demo-pic").css({
            'background-image': 'url(assets/img/friendfinder1.png)',
        });
        $("#info-header").text("Friend Finder")
        $("#info-text").text("FriendFinder mimics a match-making service, where users fill out a personality survey, and the app will match you with the most compatible user in our database.")
        $("#weblink").attr("href", "https://shielded-bayou-95492.herokuapp.com/")
        $("#gitlink").attr("href", "https://github.com/cezarcarvalhaes/FriendFinder")
    }

    function displayBurger() {
        $("#demo-pic").css({
            'background-image': 'url(assets/img/burger1.png)',
        });
        $("#info-header").text("Eat da Burger")
        $("#info-text").text("Eat-da-Burger is a simple logging app that enables users to post burgers they'd like to eat and to 'devour' them. All information is saved in a database.")
        $("#weblink").attr("href", "https://secret-refuge-63829.herokuapp.com/")
        $("#gitlink").attr("href", "https://github.com/cezarcarvalhaes/sequelizedBurger")
    }
    function displayRps() {
        $("#demo-pic").css({
            'background-image': 'url(assets/img/rps.png)',
        });
        $("#info-header").text("Rock Paper Scissors")
        $("#info-text").text("An anonymous multiplayer Rock Paper Scissors game using Firebase, a real-time database. The game also has built-in chat functionality. No information is stored permanently, as soon as a user is disconnected, all data is erased.")
        $("#weblink").attr("href", "https://cezarcarvalhaes.github.io/RPS-Multiplayer/")
        $("#gitlink").attr("href", "https://github.com/cezarcarvalhaes/RPS-Multiplayer")
    }
    function displayBamazon() {
        $("#weblink").hide();
        $("#demo-pic").css({
            'background-image': 'url(assets/img/bamazon1.png)',
        });
        $("#info-header").text("Bamazon")
        $("#info-text").text("Bamazon is a command line interface that mimics a storefront with customer, supervisor and manager roles. All inforamtion is stored and updated within a database.")
        $("#gitlink").attr("href", "https://github.com/cezarcarvalhaes/liri-bot")
    }
    function displayLiri() {
        $("#weblink").hide();
        $("#demo-pic").css({
            'background-image': 'url(assets/img/rps.png)',
        });
        $("#info-header").text("LIRI Bot")
        $("#info-text").text("LIRI is a Language Interpretation and Recognition Interface. LIRI is be a command line node app that takes in parameters and gives you back data from the Spotify and Open Movie DB APIs.")
        $("#gitlink").attr("href", "https://github.com/cezarcarvalhaes/liri-bot")
    }
    function displayHangmanCli() {
        $("#weblink").hide();
        $("#demo-pic").css({
            'background-image': 'url(assets/img/hangmancli1.png)',
        });
        $("#info-header").text("Nations of the World Hangman")
        $("#info-text").text("A hangman game for the command line using Nations of the World.")
        $("#gitlink").attr("href", "https://github.com/cezarcarvalhaes/hangman-cli")
    }
    function displayDkrpg() {
        $("#demo-pic").css({
            'background-image': 'url(assets/img/dkrpg1.png)',
        });
        $("#info-header").text("Donkey Kong RPG")
        $("#info-text").text("A Donkey Kong RPG game. Play as DK himself, Diddy Kong, King K. Rool or as General Klump!")
        $("#weblink").attr("href", "https://cezarcarvalhaes.github.io/donkeykong-RPG")
        $("#gitlink").attr("href", "https://github.com/cezarcarvalhaes/donkeykong-RPG")
    }
    function displayWhTrivia() {
        $("#demo-pic").css({
            'background-image': 'url(assets/img/whtrivia1.png)',
        });
        $("#info-header").text("Ultimate World History Trivia")
        $("#info-text").text("A hangman game for the command line using Nations of the World.")
        $("#weblink").attr("href", "https://cezarcarvalhaes.github.io/ultimate-wh-trivia")
        $("#gitlink").attr("href", "https://github.com/cezarcarvalhaes/ultimate-wh-trivia")
    }
    function displayNetscrape() {
        $("#demo-pic").css({
            'background-image': 'url(assets/img/netscrape1.png)',
        });
        $("#info-header").text("Netscrape")
        $("#info-text").text("A news site developed with Mongoose and Cheerio that scrapes articles from Allsides.com. Users can save articles and post comments.")
        $("#weblink").attr("href", "https://cezarcarvalhaes.github.io/netscrape")
        $("#gitlink").attr("href", "https://netscrape-navigator.herokuapp.com/")
    }
    

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
