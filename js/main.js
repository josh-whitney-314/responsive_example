function home() {
    document.getElementById("home").style.display = "grid";
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
}
function page1() {
    document.getElementById("home").style.display = "none";
    document.getElementById("page1").style.display = "grid";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
}
function page2() {
    document.getElementById("home").style.display = "none";
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "grid";
    document.getElementById("page3").style.display = "none";
}
function page3() {
    document.getElementById("home").style.display = "none";
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "grid";
}

function toggleTheme() {
    let head = document.head;
    let darkMode = document.getElementById("darkTheme");

    if(darkMode) {
        head.removeChild(darkMode);        
    } else {
        let head = document.head;
        let link = document.createElement("link");

        link.id = "darkTheme";
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "css/dark.css";

        head.appendChild(link);
    }
}