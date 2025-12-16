// MICHRO Navigation Bar Component
// Include this script in all HTML pages: <script src="navbar.js"></script>

(function() {
  'use strict';

  // Navbar HTML structure
  const navbarHTML = `
    <header id="mainNavbar" class="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md transition-all duration-300 border-b border-transparent">
      <nav class="max-w-7xl mx-auto flex items-center justify-between">
        <!-- Logo -->
        <a href="index.html" class="flex items-center gap-2">
          <span class="text-lavender-500 text-2xl font-display">}</span>
          <span class="text-surface-dark font-display font-semibold text-xl tracking-tight">MICHRO</span>
        </a>
        
        <!-- Nav Links -->
        <div class="hidden lg:flex items-center gap-6">
          <a href="index.html" class="text-surface-dark/80 hover:text-surface-dark text-sm font-medium tracking-wide uppercase transition-colors">Home</a>
          <div class="relative group">
            <a href="index.html#products" class="text-surface-dark/80 hover:text-surface-dark text-sm font-medium tracking-wide uppercase transition-colors flex items-center gap-1">
              Products
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </a>
            <div class="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div class="p-4 space-y-2">
                <a href="neural-3000.html" class="block px-4 py-2 text-sm text-surface-dark/70 hover:text-surface-dark hover:bg-lavender-50 rounded-lg transition-colors">NEURAL Servers</a>
                <a href="kinetic-pro.html" class="block px-4 py-2 text-sm text-surface-dark/70 hover:text-surface-dark hover:bg-lavender-50 rounded-lg transition-colors">KINETIC Workstations</a>
                <a href="quantum.html" class="block px-4 py-2 text-sm text-surface-dark/70 hover:text-surface-dark hover:bg-lavender-50 rounded-lg transition-colors">QUANTUM Switches</a>
                <a href="core.html" class="block px-4 py-2 text-sm text-surface-dark/70 hover:text-surface-dark hover:bg-lavender-50 rounded-lg transition-colors">CORE Enterprise</a>
              </div>
            </div>
          </div>
          <div class="relative group">
            <a href="index.html#solutions" class="text-surface-dark/80 hover:text-surface-dark text-sm font-medium tracking-wide uppercase transition-colors flex items-center gap-1">
              Solutions
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </a>
            <div class="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div class="p-4 space-y-2">
                <a href="gen-ai-factory.html" class="block px-4 py-2 text-sm text-surface-dark/70 hover:text-surface-dark hover:bg-lavender-50 rounded-lg transition-colors">Gen AI Factory</a>
                <a href="hft.html" class="block px-4 py-2 text-sm text-surface-dark/70 hover:text-surface-dark hover:bg-lavender-50 rounded-lg transition-colors">High-Frequency Trading</a>
                <a href="modernization.html" class="block px-4 py-2 text-sm text-surface-dark/70 hover:text-surface-dark hover:bg-lavender-50 rounded-lg transition-colors">Modernization</a>
              </div>
            </div>
          </div>
          <a href="about.html" class="text-surface-dark/80 hover:text-surface-dark text-sm font-medium tracking-wide uppercase transition-colors">About</a>
          <a href="documentation.html" class="text-surface-dark/80 hover:text-surface-dark text-sm font-medium tracking-wide uppercase transition-colors">Documentation</a>
          <a href="support.html" class="text-surface-dark/80 hover:text-surface-dark text-sm font-medium tracking-wide uppercase transition-colors">Support</a>
        </div>

        <!-- CTA -->
        <a href="contact.html" class="hidden lg:inline-flex items-center gap-2 bg-surface-dark text-white px-5 py-2.5 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-surface-darker transition-colors shadow-lg">
          Get in Touch
        </a>

        <!-- Mobile Menu Button -->
        <button id="mobileMenuBtn" class="lg:hidden text-surface-dark" aria-label="Toggle menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </nav>
      
      <!-- Mobile Menu -->
      <div id="mobileMenu" class="lg:hidden hidden fixed inset-x-0 top-[73px] bg-white/95 backdrop-blur-md border-b border-white/20 shadow-xl">
        <div class="px-6 py-6 space-y-4">
          <a href="index.html" class="block text-surface-dark/80 hover:text-surface-dark text-sm font-medium tracking-wide uppercase transition-colors">Home</a>
          <a href="index.html#products" class="block text-surface-dark/80 hover:text-surface-dark text-sm font-medium tracking-wide uppercase transition-colors">Products</a>
          <a href="index.html#solutions" class="block text-surface-dark/80 hover:text-surface-dark text-sm font-medium tracking-wide uppercase transition-colors">Solutions</a>
          <a href="about.html" class="block text-surface-dark/80 hover:text-surface-dark text-sm font-medium tracking-wide uppercase transition-colors">About</a>
          <a href="documentation.html" class="block text-surface-dark/80 hover:text-surface-dark text-sm font-medium tracking-wide uppercase transition-colors">Documentation</a>
          <a href="support.html" class="block text-surface-dark/80 hover:text-surface-dark text-sm font-medium tracking-wide uppercase transition-colors">Support</a>
          <a href="contact.html" class="block text-center bg-surface-dark text-white px-5 py-2.5 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-surface-darker transition-colors mt-4">
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  `;

  // Insert navbar at the beginning of body
  function initNavbar() {
    const body = document.body;
    if (body) {
      // Create a container for the navbar
      const navbarContainer = document.createElement('div');
      navbarContainer.innerHTML = navbarHTML;
      body.insertBefore(navbarContainer.firstElementChild, body.firstChild);

      // Mobile menu toggle
      const mobileMenuBtn = document.getElementById('mobileMenuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      
      if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
          mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
          if (!mobileMenuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.add('hidden');
          }
        });
      }

      // Highlight active page
      const currentPage = window.location.pathname.split('/').pop() || 'index.html';
      const navLinks = document.querySelectorAll('nav a[href]');
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
          link.classList.add('text-surface-dark', 'font-semibold');
          link.classList.remove('text-surface-dark/80');
        }
      });

      // Scroll detection for navbar background
      const navbar = document.getElementById('mainNavbar');
      function handleScroll() {
        if (window.scrollY > 50) {
          navbar.classList.add('bg-white/80', 'border-white/20');
          navbar.classList.remove('border-transparent');
        } else {
          navbar.classList.remove('bg-white/80', 'border-white/20');
          navbar.classList.add('border-transparent');
        }
      }
      
      // Initial check
      handleScroll();
      
      // Listen to scroll events
      window.addEventListener('scroll', handleScroll);
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
  } else {
    initNavbar();
  }
})();

