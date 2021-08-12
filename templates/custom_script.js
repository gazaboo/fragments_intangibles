function filter_photos(id) {
  let imgs = document.getElementById("images_portfolio");
  for (let item of imgs.children) {
    if (item.classList.contains(id)) {
      item.style.width = "20vw";
      item.style.margin = "1rem 1rem 1rem 1rem";
      item.classList.add("animate__zoomIn");
    } else {
      item.style.width = 0;
      item.style.margin = 0;
      item.classList.remove("animate__zoomIn");
    }
  }
}

function display_all_photos() {
  let imgs = document.getElementById("images_portfolio");
  for (let item of imgs.children) {
    item.style.width = "20vw";
    item.style.margin = "1rem 1rem 1rem 1rem";
    item.classList.remove("animate__zoomIn", "animate__zoomOut");
    item.classList.add("animate__zoomIn");
  }
}
