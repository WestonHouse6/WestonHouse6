window.onscroll = function() {
    var header = document.getElementById("header");
    var header_space = document.getElementById("header_space");
    var logo = document.getElementById("logo");
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        //header.style.flexDirection = "row-reverse"
        header.style.fontSize = "1.8em";
        header_space.style.height = "13em";
        //logo.src = "logo/WestonHouse6_bis_alt.svg"

    } else {
        //header.style.flexDirection = "column"
        header.style.fontSize = "2.5em";
        header_space.style.height = "13em";
        //logo.src = "logo/WestonHouse6_bis.svg"
    }
} 

