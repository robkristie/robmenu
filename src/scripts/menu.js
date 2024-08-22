  // Get references to the sidebar elements
  const homeSidebar = document.getElementById('homeSidebar');
  const servicesSidebar = document.getElementById('servicesSidebar');
  const aboutSidebar = document.getElementById('aboutSidebar');
  const contactSidebar = document.getElementById('contactSidebar');

  // Functions to open and close sidebars
  function openSidebar(sidebar) {
      closeAllSidebars();
      sidebar.style.width = '33%';
  }

  function closeSidebar(sidebar) {
      sidebar.style.width = '0';
  }

  function closeAllSidebars() {
      homeSidebar.style.width = '0';
      servicesSidebar.style.width = '0';
      aboutSidebar.style.width = '0';
      contactSidebar.style.width = '0';
      document.getElementById('home1Submenu').style.width = '0';
  }

  // Event listeners for the menu links
  document.getElementById('homeLink').addEventListener('click', (e) => {
      e.preventDefault();
      openSidebar(homeSidebar);
  });

  document.getElementById('servicesLink').addEventListener('click', (e) => {
      e.preventDefault();
      openSidebar(servicesSidebar);
  });

  document.getElementById('aboutLink').addEventListener('click', (e) => {
      e.preventDefault();
      openSidebar(aboutSidebar);
  });

  document.getElementById('contactLink').addEventListener('click', (e) => {
      e.preventDefault();
      openSidebar(contactSidebar);
  });

  // Event listeners for the close buttons
  document.querySelectorAll('.close-btn').forEach(btn => {
      btn.addEventListener('click', () => {
          closeSidebar(btn.parentElement);
      });
  });

  // Toggle main menu visibility on small screens
  document.getElementById('menuButton').addEventListener('click', () => {
      const menu = document.querySelector('nav ul');
      menu.classList.toggle('hidden');
  });

let home1Hovering = false;
let home1SubmenuHovering = false;
let home2Hovering = false;
let home2SubmenuHovering = false;

document.getElementById('home1Link').addEventListener('mouseover', () => {
  home1Hovering = true;
  document.getElementById('home1Submenu').style.width = '33%';
});

document.getElementById('home1Link').addEventListener('mouseout', (e) => {
  home1Hovering = false;
  setTimeout(() => {
      if (!home1Hovering && !home1SubmenuHovering) {
          document.getElementById('home1Submenu').style.width = '0';
      }
  }, 100);
});

document.getElementById('home1Submenu').addEventListener('mouseover', () => {
  home1SubmenuHovering = true;
  document.getElementById('home1Submenu').style.width = '33%';
});

document.getElementById('home1Submenu').addEventListener('mouseout', () => {
  home1SubmenuHovering = false;
  setTimeout(() => {
      if (!home1Hovering && !home1SubmenuHovering) {
          document.getElementById('home1Submenu').style.width = '0';
      }
  }, 100);
});
document.getElementById('home2Link').addEventListener('mouseover', () => {
  home2Hovering = true;
  document.getElementById('home2Submenu').style.width = '33%';
});

document.getElementById('home2Link').addEventListener('mouseout', (e) => {
  home2Hovering = false;
  setTimeout(() => {
      if (!home2Hovering && !home2SubmenuHovering) {
          document.getElementById('home2Submenu').style.width = '0';
      }
  }, 100);
});

document.getElementById('home2Submenu').addEventListener('mouseover', () => {
  home2SubmenuHovering = true;
  document.getElementById('home2Submenu').style.width = '33%';
});

document.getElementById('home2Submenu').addEventListener('mouseout', () => {
  home2SubmenuHovering = false;
  setTimeout(() => {
      if (!home2Hovering && !home2SubmenuHovering) {
          document.getElementById('home2Submenu').style.width = '0';
      }
  }, 100);
});