document.addEventListener('DOMContentLoaded', function () {
  const description = document.querySelector('.popular-songs__description');

  function fadeText(element, newHtml) {
    element.style.opacity = 0;
    setTimeout(() => {
      element.innerHTML = newHtml;
      element.style.opacity = 1;
      makeHighlightClickable(); 
    }, 300);
  }

function makeHighlightClickable() {
  const highlight = document.querySelector('.popular-songs__highlight');
  if (highlight) {
    highlight.style.cursor = 'pointer';
    highlight.addEventListener('click', (e) => {
      e.stopPropagation(); 
      const target = document.querySelector('.popular_music__carousel');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

const saved = localStorage.getItem('popularSongsText');
if (saved) {
  description.innerHTML = saved;
  makeHighlightClickable(); 
}


  makeHighlightClickable();

  description.addEventListener('click', function () {
    const isDefault = description.textContent.includes('Explore our');
    const newHtml = isDefault
      ? 'New hits <strong class="popular-songs__highlight">every Monday</strong>. Stay tuned!'
      : 'Explore our <strong class="popular-songs__highlight">best songs</strong> of the week, from rap to jazz. Work, dance, and dream with us.';

    fadeText(description, newHtml);
    localStorage.setItem('popularSongsText', newHtml);
  });

  let isAlt = false;
  setInterval(() => {
    const newHtml = isAlt
      ? 'Explore our <strong class="popular-songs__highlight">best songs</strong> of the week, from rap to jazz. Work, dance, and dream with us.'
      : 'New hits <strong class="popular-songs__highlight">every Monday</strong>. Stay tuned!';
    fadeText(description, newHtml);
    localStorage.setItem('popularSongsText', newHtml);
    isAlt = !isAlt;
  }, 10000);
});

fetch('api/popular-songs.json')
  .then((res) => res.json())
  .then((songs) => {
    const list = document.getElementById('popular-songs-list');
    songs.forEach((song) => {
      const li = document.createElement('li');
      li.className = 'popular-songs__item';
      li.innerHTML = `
        <figure class="popular-songs__card">
          <img class="popular-songs__track-image" src="${song.image}" alt="${song.title}">
          <figcaption class="popular-songs__caption">
            <strong class="popular-songs__title">${song.title}</strong>
            <span class="popular-songs__artist">${song.artist}</span>
          </figcaption>
        </figure>
      `;
      list.appendChild(li);
    });
  })
  .catch((err) => {
    console.error('Could not load popular songs:', err);
  });
