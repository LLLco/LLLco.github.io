
const link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "/css/navcolumn.css";
document.head.appendChild(link);

var nb_dict = new Map([]);
//map navbarname to active button

const navbars = document.getElementsByClassName("navbar");
if(navbars != null) {
    var i = 0;
    for (const bar of navbars) {
        i += 1;
        buttonCrawl(bar.children, "navbar" + i);
    }
};


function buttonCrawl(source, owner, first_override = true) {
    var first = first_override;

    for (const child of source) {
        //ignore the wips
        if (child.classList.contains("wip") == true) { 
            buttonCrawl(child.children, owner, false);
            continue; 
        }

        //ignore the dividers and such
        if (child.tagName != 'BUTTON') { continue; }

        //set id of buttons
        child.id = owner;

        //exception catching
        if (child.id == "BACK") { continue; }
        
        //projects here is a unique case for the main page navrow... may desire improvement later
        if (first) {
            //sets main as the active button
            console.log(owner, " | ", child);
            nb_dict.set(owner, child)
        }


        //handle default class arrangement
        child.addEventListener("click", handleClick);
        child.classList.toggle("active", false);

        first = false;
    }
}

console.log(nb_dict);

for (const [id, button] of nb_dict) {
    console.log(id, " || ", button)
    const button_page = document.getElementById(button.textContent);
    if(button_page != null) {button_page.classList.toggle("hidden", false);}
}

function handleClick() {
    const pressed_button = event.target
    const owner = pressed_button.id
    const element = document.getElementById(pressed_button.textContent);
    const active_button = nb_dict.get(owner);

    //no content shown check
    if (active_button == null) {
        // make pressed button grey
        pressed_button.classList.toggle("active", true);
        // hide pressed button's content
        if (element != null) {element.classList.toggle("hidden", false);}
        // set the remembered active button
        nb_dict.set(owner, pressed_button);
        
        const d = document.getElementById("DEFAULT");
        if (d != null) {d.classList.toggle("hidden", true);}
        
        return;
    }

    const current_page = document.getElementById(active_button.textContent)
    
    //make the last remembered button not grey
    active_button.classList.toggle("active", false);
  
    //double pressed button check
    if (active_button == pressed_button) {
        //make currently shown content hidden
        if (current_page != null) {current_page.classList.toggle("hidden", true);}
         nb_dict.set(owner, null);

        const d = document.getElementById("DEFAULT");
        if (d != null) {d.classList.toggle("hidden", false);}

        return;
    }
    
    //make new pressed button grey
    pressed_button.classList.toggle("active", true);
    nb_dict.set(owner, pressed_button);
    if (current_page != null) {current_page.classList.toggle("hidden", true);}
    if (element != null) {element.classList.toggle("hidden", false);}
}