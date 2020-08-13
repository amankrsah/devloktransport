window.onscroll = function() {anime()};
function anime(){
if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
document.getElementById("head").className = "header_on_scroll";
} 
else if (document.body.scrollTop < 80 || document.documentElement.scrollTop < 80) {
document.getElementById("head").className = "had";
} 
else {
document.getElementById("head").className = "";
}
}

//for closing form
function close_form(){
    document.getElementById("enq_form_close").setAttribute("style","display:none")
    document.getElementById("enq_form").setAttribute("style","display:none")
    document.getElementById("backg").setAttribute("style","display:none")
    document.getElementById("enquiry").setAttribute("style","display:block")
}
function show_form(){
    close_menu()
    document.getElementById("enq_form_close").setAttribute("style","display:block")
    document.getElementById("enq_form").setAttribute("style","display:block")
    document.getElementById("backg").setAttribute("style","display:block")
    document.getElementById("enquiry").setAttribute("style","display:none")
    
}
//for closing contact
function close_cont(){
    document.getElementById("cont_close").setAttribute("style","display:none")
    document.getElementById("cont").setAttribute("style","display:none")
    document.getElementById("backg").setAttribute("style","display:none")
}
function show_cont(){
    document.getElementById("cont_close").setAttribute("style","display:block")
    document.getElementById("cont").setAttribute("style","display:block")
    document.getElementById("backg").setAttribute("style","display:block")
}
//for closing about
function close_about(){
    document.getElementById("about_close").setAttribute("style","display:none")
    document.getElementById("about_us_1").setAttribute("style","display:none")
    document.getElementById("backg").setAttribute("style","display:none")
}
function show_about(){
    document.getElementById("about_close").setAttribute("style","display:block")
    document.getElementById("about_us_1").setAttribute("style","display:block")
    document.getElementById("backg").setAttribute("style","display:block")
}

function show_menu(){
    document.getElementById("menu").setAttribute("style","display:block")
    document.getElementById("backg").setAttribute("style","display:block")
}
function close_menu(){
    document.getElementById("menu").setAttribute("style","display:none")

}

// For second Menu
function show_form_1(){
    close_menu()
    document.getElementById("enq_form_close").setAttribute("style","display:block")
    document.getElementById("enq_form").setAttribute("style","display:block")
    document.getElementById("backg").setAttribute("style","display:block")
}
function show_cont_1(){
    close_menu()
    document.getElementById("cont_close").setAttribute("style","display:block")
    document.getElementById("cont").setAttribute("style","display:block")
    document.getElementById("backg").setAttribute("style","display:block")
}
function show_about_1(){
    close_menu()
    document.getElementById("about_close").setAttribute("style","display:block")
    document.getElementById("about_us_1").setAttribute("style","display:block")
    document.getElementById("backg").setAttribute("style","display:block")
}
function close_(){
    document.getElementById("backg").setAttribute("style","display:none")
    close_menu()
}



function close_all(){
    close_cont();
    close_form();
    close_about();
    close_menu();
}