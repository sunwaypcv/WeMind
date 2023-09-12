function ID(stringid){
    return document.getElementById(stringid);
}

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

navbar = ID("navbar")
detector = ID("detector")
previousscroll=window.pageYOffset;

id=0;
links = ["https://forms.gle/S6ddNBvuHViccwGc9","https://forms.gle/xunViHw42gHgLUGx5"]

popup = ID("popup");
phonepopup = ID("phonepopup");

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
}else{
    ID("MCV").onclick = ()=>{
        ID("phonegrey").style.display="block";
        ID("phoneMCV").style.display="block";
        ID("phoneMM").style.display="none";
        ID("phoneInfo").style.display="none";
        phonepopup.style.display="block"
        id=0;
    }
    ID("MM").onclick = ()=>{
        ID("phonegrey").style.display="block";
        ID("phoneMCV").style.display="none";
        ID("phoneMM").style.display="block";
        ID("phoneInfo").style.display="none";
        phonepopup.style.display="block"
        id=1;
    }
    ID("Info").onclick = ()=>{
        ID("phonegrey").style.display="block";
        ID("phoneMCV").style.display="none";
        ID("phoneMM").style.display="none";
        ID("phoneInfo").style.display="block";
        phonepopup.style.display="block"
        ID("signupbutton").style.display="none";
    }
    ID("phoneclosepopup").onclick = ()=>{
        ID("phonegrey").style.display="none";
        ID("phoneMCV").style.display="none";
        ID("phoneMM").style.display="none";
        ID("signupbutton").style.display="block";
        phonepopup.style.display="none"
    }
    ID("signupbutton").onclick = ()=>{
        window.open(links[id], "_blank");
    }
}
