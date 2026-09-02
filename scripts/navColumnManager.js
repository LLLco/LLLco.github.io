const navcolumn = document.getElementById("navcolumn");
var buttons = [];

document.getElementById("MAIN").classList.toggle("hidden");

for (const child of navcolumn.children) {
    if (child.id == "BACK") { continue; }
    buttons.push(child)
    child.addEventListener("click", handleClick);
}

function handleClick() {
    for (const b of buttons) {
        const element = document.getElementById(b.textContent);
        if (element == null) { continue; }

        element.classList.toggle("hidden", (b.textContent != event.target.textContent));
    }
}