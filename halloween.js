// Idea is flying across the screen ghosts like in HCB
// ghosts are made by claude no judjement pls


const ghost1 = `<img src="ghost-1.svg" alt="Ghost" class="ghost" style="position: absolute; top: 50px; left: 0; width: auto; height: 100%;"></img>`
const ghost2 = `<img src="ghost-2.svg" alt="Ghost" class="ghost" style="position: absolute; top: 50px; left: 0; width: auto; height: 100%;"></img>`
const currentMonth = new Date().getMonth() + 1; // 09-11 are needed months, let there be halloween
let loop = 15000
if (currentMonth === 10) {
    loop = 10000
}
setInterval(() => {
    if (currentMonth < 9 || currentMonth > 11) {
        return
    }
    const ghost = Math.random() < 0.5 ? ghost1 : ghost2;
    const ghostElement = document.createElement('div');
    ghostElement.innerHTML = ghost;
    document.body.appendChild(ghostElement);
    const ghostImg = ghostElement.querySelector('img');
    const duration = 5000;
    setTimeout(()=>{
        ghostImg.remove()
    }, duration)
}, loop)

// well not like in hcb but i like this one too. mb will add more variations.