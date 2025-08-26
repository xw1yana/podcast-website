class PopularMusicCarousel {
  constructor() {
    this.container = document.querySelector(".popular_music__carousel");
    this.list = document.querySelector(".popular_music__list");
    this.originalSlides = Array.from(document.querySelectorAll('.popular_music__item'));
    this.prevButton = document.querySelector('.popular_music__button--left');
    this.nextButton = document.querySelector('.popular_music__button--right');

    this.slidesPerView = this.getSlidesPerView();
    this.currentIndex = this.slidesPerView;

    this.setupInfiniteScroll();

    this.prevButton.addEventListener('click', () => this.slide('prev'));
    this.nextButton.addEventListener('click', () => this.slide('next'));

    window.addEventListener('resize', () => this.onResize());

    this.updateSlidePositions();
  }

  getSlidesPerView() {
    if (window.innerWidth < 767) return 1;
    if (window.innerWidth < 991) return 2;
    return 4;
  }

  clearClones() {
    this.slides = Array.from(this.list.querySelectorAll('.popular_music__item'));
    this.slides.forEach(slide => {
      if (!this.originalSlides.includes(slide)) {
        this.list.removeChild(slide);
      }
    });
  }

  setupInfiniteScroll() {
    this.clearClones();

    const slidesPerView = this.slidesPerView;
    const slidesCount = this.originalSlides.length;

    const firstSlideClones = this.originalSlides.slice(0, slidesPerView).map(slide => slide.cloneNode(true));
    const lastSlideClones = this.originalSlides.slice(slidesCount - slidesPerView, slidesCount).map(slide => slide.cloneNode(true));

    lastSlideClones.reverse().forEach(clone => this.list.insertBefore(clone, this.list.firstChild));
    firstSlideClones.forEach(clone => this.list.appendChild(clone));

    this.slides = Array.from(this.list.querySelectorAll('.popular_music__item'));
  }

  updateSlidePositions(transition = true) {
    this.slidesPerView = this.getSlidesPerView();
    const slideWidth = 100 / this.slidesPerView;
    this.slides.forEach(slide => {
      slide.style.width = `${slideWidth}%`;
    });

    if (transition) {
      this.list.style.transition = 'transform 0.5s ease-in-out';
    } else {
      this.list.style.transition = 'none';
    }

    const offset = -this.currentIndex * slideWidth;
    this.list.style.transform = `translateX(${offset}%)`;
  }

  slide(direction) {
    if (direction === 'next') {
      this.currentIndex++;
    } else {
      this.currentIndex--;
    }

    this.updateSlidePositions(true);

    setTimeout(() => {
      const slidesCount = this.originalSlides.length;
      if (this.currentIndex >= slidesCount + this.slidesPerView) {
        this.currentIndex = this.slidesPerView;
        this.updateSlidePositions(false);
      } else if (this.currentIndex < this.slidesPerView) {
        this.currentIndex = slidesCount + this.slidesPerView - 1;
        this.updateSlidePositions(false);
      }
    }, 500);
  }

  onResize() {
    const oldSlidesPerView = this.slidesPerView;
    const newSlidesPerView = this.getSlidesPerView();

    if (oldSlidesPerView === newSlidesPerView) return;

    const slidesCount = this.originalSlides.length;
    let realIndex = this.currentIndex - oldSlidesPerView;
    if (realIndex < 0) realIndex = 0;
    if (realIndex >= slidesCount) realIndex = slidesCount - 1;

    this.slidesPerView = newSlidesPerView;
    this.setupInfiniteScroll();

    this.currentIndex = realIndex + this.slidesPerView;

    this.updateSlidePositions(false);
  }
}

new PopularMusicCarousel();
