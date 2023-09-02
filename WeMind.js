function ID(stringid){
    return document.getElementById(stringid);
}


navbar = ID("navbar")
detector = ID("detector")
previousscroll=window.pageYOffset;

popup = ID("popup");

if(window.innerWidth>800){
    window.onscroll = function(){
        currentscroll=window.pageYOffset;
        if(previousscroll > currentscroll){
            navbar.style.top = "0";
            navbar.style.boxShadow = "0 6px 6px hsl(0deg 0% 0% / 0.3)";
        }else{
            navbar.style.top = "-7.5vh";
            navbar.style.boxShadow = "none";
        }
        previousscroll=currentscroll;
        if(window.scrollY<(0.075*window.innerHeight)){
            navbar.style.top = "-7.5vh";
            navbar.style.boxShadow = "none";
        }
    } 
    detector.onmouseover = function(){
        navbar.style.top = "0";
        navbar.style.boxShadow = "0 6px 6px hsl(0deg 0% 0% / 0.3)";
    }
    
    detector.onmouseout = function(){
        navbar.style.top = "-7.5vh";
        navbar.style.boxShadow = "none";
    }

    ID("MCV").onmouseover = function(){
        ID("MCV-info").style.top = 0;
        ID("MCVdes").style.opacity = 0;
    }
    ID("MCV").onmouseout = function(){
        ID("MCV-info").style.top = "100%";
        ID("MCVdes").style.opacity = 1;
    }
    ID("MM").onmouseover = function(){
        ID("MM-info").style.top = 0;
        ID("MMdes").style.opacity = 0;
    }
    ID("MM").onmouseout = function(){
        ID("MM-info").style.top = "100%";
        ID("MMdes").style.opacity = 1;
    }
    ID("Info").onmouseover = function(){
        ID("Info-info").style.top = 0;
        ID("Infodes").style.opacity = 0;
    }
    ID("Info").onmouseout = function(){
        ID("Info-info").style.top = "100%";
        ID("Infodes").style.opacity = 1;
    }
    ID("closepopup").onclick=()=>{
        popup.style.display="none";
        ID('grey').style.display="none";
        ID("MCV-form").style.display="none";
        ID("MM-form").style.display="none";
    }
    ID("MCV-learnmore").onclick = ()=>{
        popup.style.display="block";
        ID("grey").style.display="block";
        ID("MCV-form").style.display="block";
    }
    ID("MM-learnmore").onclick = ()=>{
        popup.style.display="block";
        ID("MM-form").style.display="block";
        ID("grey").style.display="block";
    }


}