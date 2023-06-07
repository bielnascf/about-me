const darkButton = document.querySelector('#darkButton');
const lightButton = document.querySelector('#lightButton');
const lightMode = document.querySelector('.light');



darkButton.addEventListener("click", () => {
    darkButton.style.display = "none";
    lightButton.style.display = "block";

    lightMode.classList.add('light');
})


lightButton.addEventListener("click", () => {
    lightButton.style.display = "none";
    darkButton.style.display = "block";

    lightMode.classList.remove('light');
})
