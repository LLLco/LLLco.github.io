const navcolumn = document.getElementById("navcolumn");
var buttons = [];

document.getElementById("MAIN").classList.toggle("hidden");

for (const child of navcolumn.children) {
    //child.id = child.textContent;
    if (child.id == "BACK") { continue; }
    buttons.push(child)
    child.addEventListener("click", handleClick);

    console.log(buttons);
}

function handleClick() {
    for (const b of buttons) {
        const element = document.getElementById(b.textContent);
        if (element == null) {continue;}

        element.classList.toggle("hidden", (b.textContent != event.target.textContent));
    }
}