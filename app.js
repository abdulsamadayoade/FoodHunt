// IMAGE SLIDER IN THE EVENTS SECTION
let slide = document.getElementById('slide');
let familyImg = document.getElementById('family');
let specialImg = document.getElementById('special');
let socialImg = document.getElementById('social');

let eventsHeading = document.getElementById('events__heading');
let eventsDescription = document.getElementById('events__description');

let slideimages = new Array(
    "images/family-gathering-desktop.jpg",
    "images/special-events-desktop.jpg",
    "images/social-events-desktop.jpg",
);


familyImg.addEventListener('click', function () {
    for (let i = 0; i < 1; i++) {
        slide.src = slideimages[i];
        eventsHeading.textContent = 'Family Gathering';
        eventsDescription.textContent = `
        We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.
        `;
    }
});


specialImg.addEventListener('click', function () {
    for (let i = 0; i < 1; i++) {
        slide.src = slideimages[i + 1];
        eventsHeading.textContent = 'Special Events';
        eventsDescription.textContent = `
        Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.
        `;
    }
});

socialImg.addEventListener('click', function () {
    for (let i = 0; i < 1; i++) {
        slide.src = slideimages[i + 2];
        eventsHeading.textContent = 'Social Events';
        eventsDescription.textContent = `
        Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.
        `;
    }
});