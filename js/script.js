"use strict";

// Adds event listener for when DOMContentLoaded occurs (when HTML loads), then starts the following function
document.addEventListener("DOMContentLoaded", function () {

    // Function for updating slide text
    function updateSlideText() {
        // When I host my website locally, its URL is http://127.0.0.1:5500/#slide-1 when its on slide 1, making window.location.hash output #slide-1
        const slideId = window.location.hash;
        // Finds .hidden-text and stores it in the variable called hiddenText
        const hiddenText = document.querySelector('.hidden-text');
        // If the slideId is equal to "#slide-1"
        if (slideId === '#slide-1') {
            // Makes hiddenText say "Cool art project 1"
            hiddenText.textContent = 'Cool art project 1';
        }
        else if (slideId === '#slide-2') {
            hiddenText.textContent = 'Cool art project 2';
        }
        else if (slideId === '#slide-3') {
            hiddenText.textContent = 'Cool art project 3';
        }
        // If there is no slideId yet, it's the first slide
        else {
            hiddenText.textContent = 'Cool art project 1';
        }
    }
    // Adds event listener for when hashchange occurs (whenever the hash in the url changes), then updates the slide text
    window.addEventListener('hashchange', updateSlideText);
    // Updates the slide text for the first time
    updateSlideText();
});

// ChatGPT helped with this stuff here
document.addEventListener("DOMContentLoaded", function () {
    // Selects all elements with the fade-in-text class
    const fadeInTextElements = document.querySelectorAll(".fade-in");

    // Checks if any elements ended up being selected
    if (fadeInTextElements.length > 0) {
        // The IntersectionObserver watches whether the viewport is seeing changes in elements
        const observer = new IntersectionObserver((entries, observer) => {
            // For every entry (provided by the observer)
            entries.forEach(entry => {
                // If the entry is in view of the viewport (being seen)
                if (entry.isIntersecting) {
                    // Add the 'visible' class to .fade-in
                    entry.target.classList.add("visible");
                }
                else {
                    // Remove the 'visible' class from .fade-in
                    entry.target.classList.remove("visible");
                }
            });
        }, {
            // Triggers when 10% of the element is in the viewport
            threshold: 0.1
        });

        // For every element utilizing the fade in effect
        fadeInTextElements.forEach(element => {
            // Tells the observer to observe
            observer.observe(element);
        });
    }
});

// Disables scrolling
function disableScrolling() {
    document.body.style.overflow = 'hidden';
}

// Enables scrolling
function enableScrolling() {
    document.body.style.overflow = 'auto';
}

// Adds an event listener for when the website loads, disables scrolling, then re-enables it after 1 second
window.addEventListener('load', function () {
    disableScrolling();
    setTimeout(enableScrolling, 1000);
});