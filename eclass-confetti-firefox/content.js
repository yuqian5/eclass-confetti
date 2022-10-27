let buttons = document.getElementsByClassName("btn")
let triggered = false;
for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    let type = button.getAttribute('type') || 'submit'; // Submit is the default
    if (type === "submit" && (button.value === "Save changes" || button.innerText === "Submit all and finish")) {
        button.onclick = (e) => {
            if (!triggered) {
                e.preventDefault();
                startConfetti();
                setTimeout(()=>{triggered = true; button.click();}, 4000);
            }
        }
    }
}


