<template>
    <nav class="bg-blue-600 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-xl font-bold">My Website</div>
        <button @click="toggleMenu" class="block lg:hidden">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <ul :class="{'hidden': !isMenuOpen, 'lg:flex lg:space-x-6': true}">
          <li><a href="#" @click.prevent="openSidebar('home')" class="hover:bg-blue-700 p-2 rounded">Home</a></li>
          <li><a href="#" @click.prevent="openSidebar('services')" class="hover:bg-blue-700 p-2 rounded">Services</a></li>
          <li><a href="#" @click.prevent="openSidebar('about')" class="hover:bg-blue-700 p-2 rounded">About</a></li>
          <li><a href="#" @click.prevent="openSidebar('contact')" class="hover:bg-blue-700 p-2 rounded">Contact</a></li>
        </ul>
      </div>
    </nav>
  
    <!-- Sidebars -->
    <div v-for="sidebar in sidebars" :key="sidebar.id" :id="sidebar.id" :class="{'side-menu': true, 'w-0': !sidebar.open, 'w-1/3': sidebar.open}" @mouseleave="closeSidebar(sidebar)">
      <button class="close-btn" @click="closeSidebar(sidebar)">&times;</button>
      <ul class="menu-content">
        <li v-for="item in sidebar.items" :key="item.id" class="relative">
          <a href="#" @click.prevent="toggleSubmenu(item)" class="block p-2 hover:bg-blue-600">{{ item.label }}</a>
          <div v-if="item.submenu" :id="item.submenu.id" :class="{'submenu': true, 'w-0': !item.submenu.open, 'w-1/3': item.submenu.open}" @mouseleave="closeSubmenu(item.submenu)">
            <ul class="menu-content">
              <li v-for="subItem in item.submenu.items" :key="subItem.id">
                <a href="#" class="block p-2 hover:bg-blue-600">{{ subItem.label }}</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
export default {
  data() {
    return {
      isMenuOpen: false,
      sidebars: [
        {
          id: 'homeSidebar', open: false, items: [
            { id: 'home1Link', label: 'Home 1', submenu: { id: 'home1Submenu', open: false, items: [{ id: 'home1Sub1', label: 'Home 1 Sub 1' }, { id: 'home1Sub2', label: 'Home 1 Sub 2' }] } },
            { id: 'home2Link', label: 'Home 2', submenu: { id: 'home2Submenu', open: false, items: [{ id: 'home2Sub1', label: 'Home 2 Sub 1' }, { id: 'home2Sub2', label: 'Home 2 Sub 2' }] } },
            { id: 'home3Link', label: 'Home 3' }
          ]
        },
        // Similar structure for services, about, and contact sidebars
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    openSidebar(sidebarId) {
      this.closeAllSidebars();
      const sidebar = this.sidebars.find(s => s.id === sidebarId + 'Sidebar');
      if (sidebar) sidebar.open = true;
    },
    closeSidebar(sidebar) {
      // Ensure the sidebar exists and is open before attempting to close it
      if (sidebar && sidebar.open) {
        sidebar.open = false;
      }
    },
    closeAllSidebars() {
      this.sidebars.forEach(sidebar => this.closeSidebar(sidebar));
    },
    toggleSubmenu(item) {
      if (item.submenu) {
        item.submenu.open = !item.submenu.open;
      }
    },
    closeSubmenu(submenu) {
      // Ensure the submenu exists and is open before attempting to close it
      if (submenu && submenu.open) {
        submenu.open = false;
      }
    }
  }
};
</script>

  


<style>
    /* Styling for sidebars */
    .side-menu {
        position: fixed;
top: 0;
left: 0;
width: 0;
height: 100%;
background-color: #3B82F6;
color: white;
overflow-x: hidden;
transition: width 0.3s ease;
z-index: 50;
padding-top: 60px;
    }

    .close-btn {
        position: absolute;
        top: 10px;
        right: 20px;
        font-size: 36px;
        cursor: pointer;
    }

    .menu-content {
        margin-top: 20px;
        padding: 0 20px;
    }

    .menu-content a {
        padding: 10px;
        display: block;
        color: white;
        text-decoration: none;
    }

    .menu-content a:hover {
        background-color: #2563EB;
    }

    /* Styling for the submenu */
    .submenu {
position: fixed;
top: 0;
left: 33%;
width: 0;
height: 100%;
background-color: #2563EB;
color: white;
padding-top: 60px;
overflow: hidden; /* Hide overflow to ensure no text spills out */
transition: width 0.3s ease;
z-index: 60;
}
</style>
