const navcolumn = document.getElementById("navcolumn");
var buttons = [];
var active;

const link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "../css/navcolumn.css";
document.head.appendChild(link);

for (const child of navcolumn.children) {
    if (child.id == "BACK") { continue; }
    if (child.classList.contains("divider") == true) { continue; }
    if (child.textContent == "MAIN") {active = child;}

    buttons.push(child)
    child.addEventListener("click", handleClick);
    child.classList.toggle("active", false);
}

document.getElementById(active.textContent).classList.toggle("hidden", false);
active.classList.toggle("active", true);


function handleClick() {
    const element = document.getElementById(event.target.textContent);

    //no content shown check
    if (active == null) {
        // make pressed button grey
        event.target.classList.toggle("active", true);
        // hide pressed button's content
        if (element != null) {element.classList.toggle("hidden", false);}
        // set the remembered active button
        active = event.target;
        return;
    }

    const current = document.getElementById(active.textContent)
    
    //make the last remembered button not grey
    active.classList.toggle("active", false);
  
    //double pressed button check
    if (active == event.target) {
        //make currently shown content hidden
        if (current != null) {current.classList.toggle("hidden", true);}
        active = null;
        return;
    }
    
    //make new pressed button grey
    event.target.classList.toggle("active", true);
    active = event.target;
    if (current != null) {current.classList.toggle("hidden", true);}
    if (element != null) {element.classList.toggle("hidden", false);}
}