const dynamicText = document.querySelector(".typing");
const words = ["Front End Designer", "Web Developer", "Python Developer", "Dot Net Developer"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();

document.addEventListener("DOMContentLoaded", function() {
    // Disable scrolling
    document.body.style.overflow = "hidden";

    // Simulate loading time with a timeout
    setTimeout(function() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").classList.add("show");
        // Re-enable scrolling
        document.body.style.overflow = "auto";
    }, 1500); // 1.5 seconds
});


