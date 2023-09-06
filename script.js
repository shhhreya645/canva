const buttonhair= document.getElementById("button-hair");
const imghair = document.getElementById("hair")

const buttonbody = document.getElementById("button-body");
const imgbody = document.getElementById("body")

const buttondress = document.getElementById("button-dress");
const imgdress = document.getElementById("dress")

const buttonface = document.getElementById("button-face");
const imgface = document.getElementById("face")

const buttonBackground = document.getElementById("button-background");
const imgBackground = document.getElementById("background")






buttonBackground.oninput = () => {
    imgBackground.style.fill = buttonBackground.value;
}
buttonhair.oninput = () => {
    imghair.style.fill = buttonhair.value;
}
buttonbody.oninput = () => {
    imgbody.style.fill = buttonbody.value;
}
buttondress.oninput = () => {
    imgdress.style.fill = buttondress.value;
}
buttonface.oninput = () => {
    imgface.style.fill = buttonface.value;
}