class Slider {
  constructor(index) {
    this.activeSlider = index;
    this.sliderItems = document.querySelectorAll(".slide > *");
    this.thumbContainer = document.querySelector(".thumbs");
    this.init();
  }

  removeActiveAllSliders() {
    this.sliderItems.forEach((slide) => slide.classList.remove("active"));
  }

  addThumbs() {
    const newThumbs = Array.from(this.sliderItems).map(() =>
      document.createElement("span")
    );
    newThumbs.forEach((thumb) => this.thumbContainer.append(thumb));
  }

  removeActiveClassThumbs() {
    this.thumbs.forEach((thumb) => thumb.classList.remove("active"));
  }

  verifyIndexSlider() {
    this.activeSlider > this.sliderItems.length - 1
      ? (this.activeSlider = 0)
      : this.activeSlider;

    this.activeSlider < 0
      ? (this.activeSlider = this.sliderItems.length - 1)
      : this.activeSlider;
  }

  nextSlider() {
    this.removeActiveAllSliders();
    this.removeActiveClassThumbs();
    this.activeSlider += 1;
    this.verifyIndexSlider();
    this.sliderItems[this.activeSlider].classList.add("active");
    this.thumbs[this.activeSlider].classList.add("active");
    this.autoSlide();
  }

  prevSlider() {
    this.removeActiveAllSliders();
    this.removeActiveClassThumbs();
    this.activeSlider -= 1;
    this.verifyIndexSlider();
    this.sliderItems[this.activeSlider].classList.add("active");
    this.thumbs[this.activeSlider].classList.add("active");
    this.autoSlide();
  }

  bindMethods() {
    this.nextSlider = this.nextSlider.bind(this);
    this.prevSlider = this.prevSlider.bind(this);
  }

  listeners() {
    const next = document.querySelector('[data-js="next"]');
    const prev = document.querySelector('[data-js="prev"]');
    next.addEventListener("click", this.nextSlider);
    prev.addEventListener("click", this.prevSlider);
  }

  autoSlide() {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.nextSlider();
    }, 5000);
  }

  init() {
    this.sliderItems[this.activeSlider].classList.add("active");
    this.addThumbs();
    this.bindMethods();
    this.listeners();
    this.autoSlide();
    this.thumbs = this.thumbContainer.querySelectorAll("span");
    this.thumbs[this.activeSlider].classList.add("active");
  }
}

new Slider(0);
