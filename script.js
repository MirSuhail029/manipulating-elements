const navigation = document.getElementById("navigation");
const menuContainer = document.createElement("ul");
menuContainer.setAttribute("id", "menu-container");
navigation.append(menuContainer);

const createDropdownMenu = function (dropDown) {
  const dropdownMenu = document.createElement("ul");
  dropdownMenu.setAttribute("id", "dropdown-menu");
  for (let i = 0; i < dropDown.length; i++) {
    const dropdownItem = document.createElement("li");
    dropdownItem.setAttribute("class", "dropdown-items");
    dropdownItem.textContent = dropDown[i];
    dropdownMenu.append(dropdownItem);
  }
  return dropdownMenu;
};

const showDropdownList = function () {
  // dropdownMenu.removeAttribute("class");
  this.lastChild.removeAttribute("class");
};
const hideDropdownList = function () {
  // dropdownMenu.setAttribute("class", "hidden");
  this.lastChild.setAttribute("class", "hidden");
};

const selectedItem = function () {
  const menuContainerItems = menuContainer.childNodes;
  for (let i = 0; i < menuContainerItems.length; i++) {
    menuContainerItems[i].setAttribute("class", "menu-item");
  }
  this.setAttribute("class", "menu-item selected");
};

const createMenuItems = function (menu, dropDown = []) {
  const menuItem = document.createElement("li");
  menuItem.addEventListener("click", selectedItem);
  menuItem.textContent = menu;
  const id = menu.toLowerCase().replaceAll(" ", "-");
  menuItem.setAttribute("id", id); // ID Home=home,Products=products, Services=services & Contact Us=contact-us
  if (id === "home") {
    menuItem.setAttribute("class", "menu-item selected");
  } else {
    menuItem.setAttribute("class", "menu-item");
  }
  if (dropDown.length !== 0) {
    menuItem.append(createDropdownMenu(dropDown));
    menuItem.lastChild.setAttribute("class", "hidden");
    menuItem.addEventListener("mouseover", showDropdownList);
    menuItem.addEventListener("mouseout", hideDropdownList);
  }
  menuContainer.append(menuItem);
};

createMenuItems("Home");
createMenuItems("Products", [
  "Shirts",
  "Jeans",
  "Shorts",
  "Jackets",
  "Blazers",
]);
createMenuItems("Services", [
  "Gardenscaping",
  "Plumbing",
  "Electricals",
  "Networking",
]);
createMenuItems("Contact us");

const heroSection = document.getElementById("hero-section");
const heroImagePath = "assets/hero image.jpg";
const heroImage = document.createElement("img");
heroImage.setAttribute("src", heroImagePath);
heroImage.setAttribute("class", "hero-image");
heroSection.append(heroImage);

const aboutusSection = document.getElementById("aboutus-section");
const message = document.createElement("p");
const messages = [
  "Welcome to our Store!!!",
  "We offer a 10% discount sitewide on all festivals",
  "Happy to serve you!!!",
];
aboutusSection.append(message);
message.textContent = messages[0];
let i = 1;
setInterval(function () {
  console.log(i);
  message.textContent = messages[i];
  i++;
  if (i > messages.length - 1) {
    i = 0;
  }
}, 3000);

// Featured section
const featuredSection = document.getElementById("featured-section");
const createFeaturedCards = function (imagePath, text) {
  const featuredCard = document.createElement("article");
  featuredCard.setAttribute("class", "featured-card");
  const imageContainer = document.createElement("figure");
  const cardImage = document.createElement("img");
  cardImage.setAttribute("src", imagePath);
  imageContainer.append(cardImage);
  const cardText = document.createElement("p");
  cardText.textContent = text;
  featuredCard.append(imageContainer);
  featuredCard.append(cardText);
  featuredSection.append(featuredCard);
};
createFeaturedCards("assets/shirt 1.jpg", "884 Rs");
createFeaturedCards("assets/shirt 2.jpg", "1199 Rs");
createFeaturedCards("assets/shirt 3.jpg", "946 Rs");
