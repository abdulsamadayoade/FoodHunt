// IMAGE SLIDER IN THE EVENTS SECTION
const events = [
    {
        title: 'Family Gathering',
        description: 'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.',
        image: document.querySelector('#event__image--family'),
    },
    {
        title: 'Special Events',
        description: 'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.',
        image: document.querySelector('#event__image--special'),
    },
    {
        title: 'Social Events',
        description: 'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.',
        image: document.querySelector('#event__image--social'),
    }
];



// DOM VARIABLES
const eventHeading = document.querySelector('#event__heading');
const eventDescription = document.querySelector('#event__description');
const eventItems = document.querySelectorAll('.event__item');
const eventImages = document.querySelectorAll('.event__img');


// CLICK ON THE BUTTONS
eventItems.forEach(function (item, i) {
    item.addEventListener('click', function () {
        eventHeading.innerText = events[i].title;
        eventDescription.innerText = events[i].description;
        eventImages.forEach(item => {
            item.classList.remove('show');
        })
        events[i].image.classList.add('show');
    })
})