const button1 = document.querySelector(".block__button[name='button1'");
const button2 = document.querySelector(".block__button[name='button2'");
const button3 = document.querySelector(".block__button[name='button3'");

button1.addEventListener("click", () => {
    console.log("Button 1 click");
});

button2.addEventListener("click", () => {
    console.log("Button 2 click");
});

button3.addEventListener("click", () => {
    console.log("Button 3 click");
});