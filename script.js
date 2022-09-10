window.onscroll = function() {
    var header = document.getElementById("header");
    var header_space = document.getElementById("header_space");
    var logo = document.getElementById("logo");
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header.style.fontSize = "1.2em";
    } else {
        header.style.fontSize = "1.8em";
    }
} 

