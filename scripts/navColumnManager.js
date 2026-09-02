const navcolumn = document.getElementById("navcolumn");
var buttons = [];
var active;



for (const child of navcolumn.children) {
    if (child.id == "BACK") { continue; }
    if (child.textContent == "MAIN") {active = child;}

    buttons.push(child)
    child.addEventListener("click", handleClick);
    child.classList.toggle("active", false);
}

document.getElementById(active.textContent).classList.toggle("hidden", false);
active.classList.toggle("active", true);

function handleClick() {
    const element = document.getElementById(event.target.textContent);
    const current = document.getElementById(active.textContent)
    
    active.classList.toggle("active", false);
    event.target.classList.toggle("active", true);
    active = event.target;

    if (element != null) {element.classList.toggle("hidden", false);}
    if (current != null) {current.classList.toggle("hidden", true);}
    
}