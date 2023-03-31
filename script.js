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

const createMenuItems = function (menu, dropDown = []) {
  const menuItem = document.createElement("li");
  menuItem.setAttribute("class", "menu-item");
  menuItem.textContent = menu;
  const id = menu.toLowerCase().replaceAll(" ", "-");
  menuItem.setAttribute("id", id); // ID Home=home,Products=products, Services=services & Contact Us=contact-us

  if (dropDown.length !== 0) {
    menuItem.append(createDropdownMenu(dropDown));
    // console.log(menuItem);
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
