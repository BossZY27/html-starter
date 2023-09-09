$(document).ready(function(){
    var menu = $(".menu");
    var ham =$(".ham");
    var line =$(".line");
    var menuOpen;
    
    function openMenu(){
        menu.css("left","0px");
        line.css("background","#ffff");
        menuOpen = true;
    }
    function closeMenu(){
        menu.css("left","-320px");
        line.css("background","#bcad90")
        menuOpen = false
    }
    function toggleMenu() {
        if (menuOpen){
            closeMenu();
        } else {
            openMenu();
        }
    }
    ham.on({
        mouseenter: function(){
            openMenu();
        }
    });
    menu.on({
        mouseleave:function(){
            closeMenu();
        
        }
    });
    ham.on({
        click: function(){
            toggleMenu();
        }
    });
});