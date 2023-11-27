
function fuso() {
    const clockElement = document.querySelector(".clock");
    const hrsElement = document.querySelector(".hrs");
    const minElement = document.querySelector(".min");
    const segElement = document.querySelector(".seg");
        
    const now = new Date();
    const hrs = now.getHours().toString().padStart(2, "0")
    const min = now.getMinutes().toString().padStart(2, "0")
    const seg = now.getSeconds().toString().padStart(2, "0") 

    hrsElement.textContent = hrs;
    minElement.textContent = min;
    segElement.textContent = seg;

        

      
}
    setInterval(fuso, 1000);
