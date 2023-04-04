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
  // console.log(i);
  message.textContent = messages[i];
  i++;
  if (i > messages.length - 1) {
    i = 0;
  }
}, 3000);

// Featured section
const featuredSection = document.getElementById("featured-section");
const createFeaturedCards = function (cardValue) {
  const featuredCard = document.createElement("article");
  // featuredCard.setAttribute("id", cardValue);
  featuredCard.setAttribute("class", "featured-card");
  const imageContainer = document.createElement("figure");
  const cardImage = document.createElement("img");
  imageContainer.append(cardImage);
  const cardText = document.createElement("p");
  featuredCard.append(imageContainer);
  featuredCard.append(cardText);
  featuredSection.append(featuredCard);
};

const productMap = new Map();
productMap.set("shirt 1", ["assets/shirt 1.jpg", "884 Rs"]);
productMap.set("shirt 2", ["assets/shirt 2.jpg", "1199 Rs"]);
productMap.set("shirt 3", ["assets/shirt 3.jpg", "946 Rs"]);
productMap.set("shoes 1", ["assets/shoes 1.jpg", "1240 Rs"]);
productMap.set("shoes 2", ["assets/shoes 2.jpg", "1399 Rs"]);
productMap.set("shorts 1", ["assets/shorts 1.jpg", "1400 Rs"]);
// productMap.set("shorts 2", ["assets/shorts 1.jpg", "1400 Rs"]);
// productMap.set("shorts 3", ["assets/shorts 1.jpg", "1400 Rs"]);
// productMap.set("shorts 4", ["assets/shorts 1.jpg", "1400 Rs"]);
// productMap.set("shorts 5", ["assets/shorts 1.jpg", "1400 Rs"]);

const productArray = [...productMap.keys()];
// console.log(productArray.length);
const [source1, price1] = productMap.get(productArray[0]);
createFeaturedCards("card1");
const [source2, price2] = productMap.get(productArray[1]);
createFeaturedCards("card2");
const [source3, price3] = productMap.get(productArray[2]);
createFeaturedCards("card3");
const [source4, price4] = productMap.get(productArray[3]);
createFeaturedCards("card4");

const [one, two, three, four] = [...featuredSection.childNodes];
one.firstChild.firstChild.src = source1;
one.lastChild.textContent = price1;
two.firstChild.firstChild.src = source2;
two.lastChild.textContent = price2;
three.firstChild.firstChild.src = source3;
three.lastChild.textContent = price3;
four.firstChild.firstChild.src = source4;
four.lastChild.textContent = price4;

let j = 1;
const change = function () {
  const [source1, price1] = productMap.get(productArray[j]);
  one.firstChild.firstChild.src = source1;
  one.lastChild.textContent = price1;
  const [source2, price2] = productMap.get(productArray[(j + 1) % 6]);
  two.firstChild.firstChild.src = source2;
  two.lastChild.textContent = price2;
  const [source3, price3] = productMap.get(productArray[(j + 2) % 6]);
  three.firstChild.firstChild.src = source3;
  three.lastChild.textContent = price3;
  const [source4, price4] = productMap.get(productArray[(j + 3) % 6]);
  four.firstChild.firstChild.src = source4;
  four.lastChild.textContent = price4;
  console.log(`${j} ${(j + 1) % 6} ${(j + 2) % 6} ${(j + 3) % 6}`);
  j++;
  if (j > productArray.length - 1) {
    j = 0;
  }
};
setInterval(change, 3000);
