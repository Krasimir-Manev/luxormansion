import { addModal, removeModal } from "./modal";
import { images, imagesLength } from "./sliderImages";
import slideItemsStyle from "./slideItemStyle";
import currentlyDisplayedImage from "./currentlyDisplayedImage";

class Slider {
  constructor() {
    this.onHandleGalery = this.onHandleGalery.bind(this);

    this.nextSlideTransition = this.nextSlideTransition.bind(this);
    this.slidePrevTransition = this.slidePrevTransition.bind(this);

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  init(width) {
    const images = [...document.querySelectorAll(".galery .image img")];

    this.width = width;

    images.forEach((image, index) => {
      image.setAttribute("data-image", index);
    });

    const galery = document.querySelector(".galery");
    galery.addEventListener("click", this.onHandleGalery, false);
  }

  onHandleGalery(e) {
    const tagName = e.target.tagName.toLowerCase();

    if (tagName === "img") {
      this.selectedImage = Number(e.target.dataset.image);

      if (this.selectedImage >= 0) {
        addModal();

        this.slideChild();
        this.showFirstSelectedImage();

        this.sliderWidth();

        this.slideNext();
        this.slidePrev();

        currentlyDisplayedImage(this.selectedImage, imagesLength());

        removeModal();
      }
    }
  }

  slideChild() {
    const slide = document.querySelector(".slide");

    images().forEach(image => {
      slide.appendChild(image);
    });
  }

  sliderWidth() {
    const slider = document.querySelector(".slider");
    slider.style.maxWidth = `${
      typeof this.width === "number" ? this.width : 700
    }px`;
  }

  showFirstSelectedImage() {
    const slideImages = document.querySelectorAll(".slide .image");

    slideImages.forEach((image, index) =>
      this.selectedImage !== index ? (image.style.display = "none") : null
    );
  }

  next() {
    let showCurrentImageIndex = this.selectedImage;

    if (showCurrentImageIndex < imagesLength() - 1) {
      currentlyDisplayedImage(++showCurrentImageIndex, imagesLength(), "next");
    }

    slideItemsStyle(element => {
      if (element["slide image"][this.selectedImage].nextElementSibling) {
        element["slide image"][
          this.selectedImage
        ].nextElementSibling.style.display = "block";
        element["slide"].classList.add("transition");
        element[
          "slide"
        ].style.transform = `translateX(-${element["slide"].clientWidth}px)`;
        element["next-image"].style.pointerEvents = "none";
        element["previous-image"].style.pointerEvents = "none";
        element["slide"].addEventListener(
          "transitionend",
          this.nextSlideTransition,
          false
        );
      }
    });
  }

  nextSlideTransition() {
    slideItemsStyle(element => {
      element["next-image"].style.pointerEvents = "auto";
      element["previous-image"].style.pointerEvents = "auto";

      if (element["slide image"][this.selectedImage].nextElementSibling) {
        element["slide"].classList.remove("transition");
        element["slide"].style.transform = `translateX(${0}px)`;
        element["slide image"][this.selectedImage].style.display = "none";

        this.selectedImage++;

        element["slide"].removeEventListener(
          "transitionend",
          this.nextSlideTransition
        );
      }
    });
  }

  slideNext() {
    const next = document.querySelector(".next-image");
    next.addEventListener("click", this.next, false);
  }

  prev() {
    let showCurrentImageIndex = this.selectedImage;

    if (showCurrentImageIndex > 0 && imagesLength() > showCurrentImageIndex) {
      currentlyDisplayedImage(++showCurrentImageIndex, imagesLength(), "prev");
    }

    slideItemsStyle(element => {
      if (element["slide image"][this.selectedImage].previousElementSibling) {
        element["slide image"][
          this.selectedImage
        ].previousElementSibling.style.display = "block";

        element[
          "slide"
        ].style.transform = `translateX(-${element["slide"].clientWidth}px)`;

        element["next-image"].style.pointerEvents = "none";
        element["previous-image"].style.pointerEvents = "none";

        if (element["slide"].clientWidth) {
          element["slide"].classList.add("transition");
          element["slide"].style.transform = `translateX(${0}px)`;
        }

        element["slide"].addEventListener(
          "transitionend",
          this.slidePrevTransition,
          false
        );
      }
    });
  }

  slidePrevTransition() {
    slideItemsStyle(element => {
      element["next-image"].style.pointerEvents = "auto";
      element["previous-image"].style.pointerEvents = "auto";

      if (element["slide image"][this.selectedImage].previousElementSibling) {
        element["slide"].classList.remove("transition");
        element["slide"].style.transform = `translateX(${0}px)`;
        element["slide image"][this.selectedImage].style.display = "none";

        this.selectedImage--;

        element["slide"].removeEventListener(
          "transitionend",
          this.slidePrevTransition
        );
      }
    });
  }

  slidePrev() {
    const prev = document.querySelector(".previous-image");
    prev.addEventListener("click", this.prev, false);
  }
}

export default new Slider();
