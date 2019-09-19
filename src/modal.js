import element from "./modalThree";

/** The modal function accept argument modalTree and iterate over it executing the function recursively  */

const modal = obj => {
  if (typeof obj !== "object") {
    return;
  }

  const parent = document.createElement(obj.tagName);

  if (obj.className) {
    if (obj.className.indexOf(" ")) {
      const classes = obj.className.split(" ");

      classes.forEach(currentClass => {
        parent.classList.add(currentClass);
      });
    } else {
      parent.classList.add(obj.className);
    }
  }

  if (obj.attr) {
    for (const key in obj.attr) {
      if (obj.attr.hasOwnProperty(key)) {
        parent.setAttribute(key, obj.attr[key]);
      }
    }
  }

  if (obj.children) {
    for (const childElement of obj.children) {
      const child = modal(childElement);
      parent.appendChild(child);
    }
  }

  return parent;
};

const addModal = () => {
  const galery = document.querySelector(".galery");
  galery.parentElement.insertBefore(modal(element), galery.nextElementSibling);
};

const removeModal = () => {
  const modal = document.querySelector(".modal");
  modal.addEventListener("click", onRemoveModal, false);
};

const onRemoveModal = e => {
  const container = document.querySelector(".inside .container");
  const modal = document.querySelector(".modal");

  if (e.target.classList.contains("modal")) {
    container.removeChild(modal);
  }
};

export { modal, addModal, removeModal };
