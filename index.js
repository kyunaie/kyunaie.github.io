// console.log("I am runiing indecxdjoisaj");
function dropdownMenu() {
    var x = document.getElementById("dropdownClick");
    if (x.className === "topnav") {
        x.className += " responsive";
        /*change topnav to topnav.responsive*/
    } else {
        x.className = "topnav";
    }
}
var btns = document.getElementsByClassName("act2");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    // console.log(current);
    current[0].className = current[0].className.replace(" active", " ");
    // console.log(current);
    this.className += " active";
  });
} 
// function addActive(){
//     console.log("Changeing class");
//     // var x = document.querySelectorAll(".active1");
//     // console.log(x);
// }
function handleUpdate(resp){
    $("#data").html(resp);
}
function handleclick(event)
{ 
    // console.log("I have been clicked");

    var linkl= event.target['href'];
    $.get(linkl).done(handleUpdate);
    event.preventDefault();
}
function handleclick1(event)
{ 
    // console.log("changing css");
    var svgSun = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
    var svgMoon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
    
    var icon = document.querySelector(".click1").innerHTML;
    if(icon == svgMoon)
    {
        document.querySelector("link").setAttribute("href","style.css");
        document.querySelector("#Mobile-css").setAttribute("href","style-mobile.css");
        document.querySelector(".click1").innerHTML= '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
    }
    else if(icon == svgSun)
    {
        document.querySelector("link").setAttribute("href","light1.css");
        document.querySelector("#Mobile-css").setAttribute("href","light1-mobile.css");
        document.querySelector(".click1").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
    }
}

function main() {
    var links = $(".click");
    var links1 = $(".click1");
    links1.click(handleclick1);
    links.click(handleclick);
    // links.click(addActive);
}

$(main);