const navcolumn = document.getElementById("navcolumn");
var buttons = [];

document.getElementById("MAIN").classList.toggle("hidden");

for (const child of navcolumn.children) {
    //child.id = child.textContent;
    buttons.push(child)
    child.addEventListener("click", handleClick);

    console.log(buttons);
}

function handleClick() {
    for (const b of buttons) {
        if (b.textContent != event.target.textContent) {
            document.getElementById(b.textContent).classList.toggle("hidden", true);
        }
        else {
            document.getElementById(b.textContent).classList.toggle("hidden", false);
        }
    }
}