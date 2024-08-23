// Utility function to get elements by IDs
const getElement = id => document.getElementById(id);

// Sidebar references
const sidebars = {
  home: getElement('homeSidebar'),
  services: getElement('servicesSidebar'),
  about: getElement('aboutSidebar'),
  contact: getElement('contactSidebar')
};

// Submenu references
const submenus = {
  home1: getElement('home1Submenu'),
  home2: getElement('home2Submenu'),
  services1: getElement('services1Submenu'),
  services2: getElement('services2Submenu')
};

// Function to open a sidebar
function openSidebar(sidebar) {
  closeAllSidebars();
  sidebar.style.width = '33%';
}

// Function to close a sidebar
function closeSidebar(sidebar) {
  sidebar.style.width = '0';
}

// Function to close all sidebars
function closeAllSidebars() {
  Object.values(sidebars).forEach(sidebar => closeSidebar(sidebar));
  Object.values(submenus).forEach(submenu => closeSidebar(submenu));
}

// Event listeners for the menu links
['home', 'services', 'about', 'contact'].forEach(id => {
  document.getElementById(`${id}Link`).addEventListener('click', (e) => {
    e.preventDefault();
    openSidebar(sidebars[id]);
  });
});

// Event listeners for the close buttons
document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', () => closeSidebar(btn.parentElement));
});

// Toggle main menu visibility on small screens
document.getElementById('menuButton').addEventListener('click', () => {
  const menu = document.querySelector('nav ul');
  menu.classList.toggle('hidden');
});

// Utility function to handle submenu hover
function handleSubmenuHover(linkId, submenuId) {
  let linkHovering = false;
  let submenuHovering = false;

  const link = getElement(linkId);
  const submenu = getElement(submenuId);

  link.addEventListener('mouseover', () => {
    linkHovering = true;
    submenu.style.width = '33%';
  });

  link.addEventListener('mouseout', () => {
    linkHovering = false;
    setTimeout(() => {
      if (!linkHovering && !submenuHovering) {
        submenu.style.width = '0';
      }
    }, 100);
  });

  submenu.addEventListener('mouseover', () => {
    submenuHovering = true;
    submenu.style.width = '33%';
  });

  submenu.addEventListener('mouseout', () => {
    submenuHovering = false;
    setTimeout(() => {
      if (!linkHovering && !submenuHovering) {
        submenu.style.width = '0';
      }
    }, 100);
  });
}

// Apply submenu hover handling
handleSubmenuHover('home1Link', 'home1Submenu');
handleSubmenuHover('home2Link', 'home2Submenu');
handleSubmenuHover('services1Link', 'services1Submenu');
handleSubmenuHover('services2Link', 'services2Submenu');
