const response = await fetch ('./api/popular-artists.json');
const popularArtists = await response.json();

const lineStyles = [
    "line-one",
    "line-two",
    "line-three",
    "line-four"
];

function renderPopularArtists(popularArtists) {
    const popularArtistsListHTML = [];
    const listDuplicates = 1;
    for (let i = 0; i < listDuplicates; i++) {
        for (let artist of popularArtists) {
            let randomLineIndex = Math.trunc(((Math.random() * 10) % lineStyles.length));
            popularArtistsListHTML.push(`<li class="popular-artists__carousel__item">
                    <div class="item__image-block">
                        <img src="${artist.imagePath}" class="item__image" alt="${artist.name}"/>
                    </div>
                    <div class="item__info">
                        <p class="item__info__name">${artist.name}</p>
                        <span class="item__info__line">
                            <span class="item__info__line ${lineStyles[randomLineIndex]}"></span>
                        </span>
                        <p class="item__info__location">${artist.location}</p>
                    </div>
                </li>`);
        }
    }
    const popularArtistsListContainer = document.querySelector(".popular-artists__carousel__list");
    popularArtistsListContainer.innerHTML = popularArtistsListHTML.join("");
}

renderPopularArtists(popularArtists);

const artistsCarousel = document.querySelector('.popular-artists__carousel__list');
const artistCard = document.querySelector('.popular-artists__carousel__item');
const artistNextButton = document.getElementById('popularArtistNext');
const artistPrevButton = document.getElementById('popularArtistPrev');
const artistCardWidth = artistCard.offsetWidth;
let artistIndex = 0;
let artists = Array.from(artistsCarousel.children);

function getVisibleArtistsCount() {
    return Math.trunc(artistsCarousel.offsetWidth / artistCardWidth);
}

function cloneArtistSlides() {
    const visible = getVisibleArtistsCount();
    const originalSlides = artists.filter(s => !s.classList.contains('clone'));

    artists.forEach(slide => {
        if (slide.classList.contains('clone')) {
            artistsCarousel.removeChild(slide);
        }
    });

    for (let i = 0; i < visible; i++) {
        const firstClone = originalSlides[i].cloneNode(true);
        const lastClone = originalSlides[originalSlides.length - 1 - i].cloneNode(true);
        firstClone.classList.add('clone');
        lastClone.classList.add('clone');
        artistsCarousel.appendChild(firstClone);
        artistsCarousel.insertBefore(lastClone, artistsCarousel.firstChild);
    }

    artists = Array.from(artistsCarousel.children);
}

function setInitialArtistPosition() {
    const slideWidth = artists[0].getBoundingClientRect().width;
    artistIndex = getVisibleArtistsCount();
    artistsCarousel.style.transition = 'none';
    artistsCarousel.style.transform = `translateX(-${slideWidth * artistIndex}px)`;
}

function moveToArtistSlide() {
    const slideWidth = artists[0].getBoundingClientRect().width;
    artistsCarousel.style.transition = 'transform 500ms ease-in-out';
    artistsCarousel.style.transform = `translateX(-${slideWidth * artistIndex}px)`;
}

artistsCarousel.addEventListener('transitionend', () => {
    const slideWidth = artists[0].getBoundingClientRect().width;
    const visible = getVisibleArtistsCount();

    if (artists[artistIndex].classList.contains('clone')) {
        artistsCarousel.style.transition = 'none';

        if (artistIndex >= artists.length - visible) {
            artistIndex = visible;
        } else if (artistIndex === 0) {
            artistIndex = artists.length - visible * 2;
        }

        artistsCarousel.style.transform = `translateX(-${slideWidth * artistIndex}px)`;
    }
});

artistNextButton.addEventListener('click', () => {
    artistIndex++;
    moveToArtistSlide();
})

artistPrevButton.addEventListener('click', () => {
    artistIndex--;
    moveToArtistSlide();
})

function rebuildArtistsCarousel() {
    cloneArtistSlides();
    setInitialArtistPosition();
}

window.addEventListener('resize', () => {
    rebuildArtistsCarousel();
})

rebuildArtistsCarousel();

function scrollToElement() {
    const url = new URL(document.URL);
    const scrollToId = url.hash.replace('#', '');
    const elementToScrollTo = document.getElementById(scrollToId);
    elementToScrollTo.scrollIntoView();
}

scrollToElement();