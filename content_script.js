var host = window.location.host;

if(host == "github.com") {
    var element = document.getElementsByClassName("header-dark")[0];
    element.className = element.className.replace(/\header-dark\b/,'');
}