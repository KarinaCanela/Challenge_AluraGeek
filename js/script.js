var search = document.querySelector(".headerPrincipal__search");
var input = document.querySelector(".search");
var btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    search.classList.toggle("active");
    input.focus();
    // document.getElementById("logo").style.display="none";
    // document.getElementById("logo1").style.display="none";
    // document.getElementById("logo2").style.display="none";
    // document.getElementById("logo3").style.display="none";
    // document.getElementById("login").style.display="none";
    // document.getElementById("loginbtn").style.display="none";
    // document.getElementById("inp1").style.display="block";
    
});