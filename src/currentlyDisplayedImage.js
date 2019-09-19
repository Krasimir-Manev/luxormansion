/**
 * Show which image { number } is currently displayed
 *
 **/

const currentlyDisplayedImage = (index, imagesLength, slidePosition = null) => {
  const showCurrentImageIndex = document.querySelector(".showCurentImageIndex");

  switch (slidePosition) {
    case "next":
      showCurrentImageIndex.textContent = `${index + 1} / ${imagesLength}`;
      break;
    case "prev":
      showCurrentImageIndex.textContent = `${index - 1} / ${imagesLength}`;
      break;
    default:
      showCurrentImageIndex.textContent = `${index + 1} / ${imagesLength}`;
      break;
  }
};

export default currentlyDisplayedImage;
