/**
 * The modal tree structure with all of the html children elements which will contains
 */

const modalTreeStructure = {
  tagName: "div",
  className: "modal",
  children: [
    {
      tagName: "div",
      className: "slider",
      children: [
        {
          tagName: "div",
          className: "previous-image",
          children: [{ tagName: "i", className: "fas fa-chevron-circle-left" }]
        },
        { tagName: "div", className: "slide" },
        {
          tagName: "div",
          className: "next-image",
          children: [{ tagName: "i", className: "fas fa-chevron-circle-right" }]
        },
        {
          tagName: "div",
          className: "currentImage",
          children: [{ tagName: "span", className: "showCurentImageIndex" }]
        }
      ]
    }
  ]
};

export default modalTreeStructure;
