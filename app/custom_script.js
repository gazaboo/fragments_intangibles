jQuery(document).ready(function ($) {
  "use strict";

  $(function () {
    populate_portfolio();
  });
});


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

function populate_portfolio() {
  if (document.getElementById("images_portfolio").children.length == 0){
    let folders = ["ccas", "pierre_dubois", "portugal", "poya", "smlv"]
    for (folder of folders){
      for (let i=0; i<6; i++){
        let img = document.createElement("img");
        img.src = `assets/images/${folder}/${folder}_${i}.jpg`;
        img.style.width = "20vw";
        img.style.margin = "1rem 1rem 1rem 1rem";
        img.classList.add(folder)
        document.getElementById("images_portfolio").appendChild(img)
      }
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
