function clear() {
    for(let e of document.getElementsByClassName("ytd-comments")) {
        e.innerHTML = "";
    }
    
    console.log(`Clearing YT Comments`);
}

setInterval(() => {
    clear();
}, 1000);

clear();
