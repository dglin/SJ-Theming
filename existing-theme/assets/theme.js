function start() {

    /* Adjusts column sizes */
    var left = document.getElementById('left-column');
    var right = document.getElementById('right-column');
    var main = document.getElementById('content');
    
    if (left.hasChildNodes() && right.hasChildNodes()) {
        main.style.width = "54%";
    } else if (left.hasChildNodes() || right.hasChildNodes()) {
        main.style.width = "75%";
    } else {
        main.style.width = "100%";
        main.style.margin = "0";
    }
    
    /* Adjusts user tool size */
    /* Adjusts user tool size */
    var login = document.getElementById('portal-personaltools');
    var tag = login.tagName;
    
    if (tag == "UL") {
        login.style.width = "200px";
        login.style.float = "right";
        login.style.textAlign = "right";
    }
    
}