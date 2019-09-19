const slideItemsStyle = callback => {
  const elements = ["slide", "slide image", "previous-image", "next-image"];
  const slideItems = {};

  elements.forEach(element => {
    if (element.indexOf(" ") !== -1) {
      const classes = element.split(" ");

      slideItems[element] = document.querySelectorAll(
        `.${classes[0]} .${classes[1]}`
      );
    } else {
      slideItems[element] = document.querySelector(`.${element}`);
    }
  });

  callback(slideItems);
};

export default slideItemsStyle;
