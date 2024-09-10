let size = 16;
function inc() {
    size+=2;
    document.querySelector("p").setAttribute("style", `font-size: ${size}px;`);
}
function dec() {
    size-=2;
    document.querySelector("p").setAttribute("style", `font-size: ${size}px;`);
}
document.querySelector(".plu").onclick = inc;
document.querySelector(".min").onclick = dec;