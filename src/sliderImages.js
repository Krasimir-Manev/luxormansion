import { modal } from "./modal";

/**
 * Images which will be slide
 */

const images = [
  "./images/galery/image-1.jpg",
  "./images/galery/image-2.jpg",
  "./images/galery/image-3.jpg",
  "./images/galery/image-4.jpg",
  "./images/galery/image-5.jpg"
];

const imagesToSlide = () => {
  const showImage = [];

  images.forEach(image => {
    const curentImage = {
      tagName: "div",
      className: "image",
      children: [
        {
          tagName: "img",
          attr: {
            src: image,
            alt: ""
          }
        }
      ]
    };

    showImage.push(modal(curentImage));
  });

  return showImage;
};

const imagesLength = () => {
  return images.length;
};

export { imagesToSlide as images, imagesLength };
