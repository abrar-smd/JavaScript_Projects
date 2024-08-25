var nav_Stuatus = 0;
function openNav() {
    if(!nav_Stuatus){
        $(".maindiv").css("width", "100%");
        $("li").css("display", "block");
        nav_Stuatus = 1;
    }
    else{
        $(".maindiv").css("width", "0");
        $("li").css("display", "none");
        nav_Stuatus = 0;
    }
}