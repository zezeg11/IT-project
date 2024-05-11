function toggleMenu() {
    const menu = document.querySelector('.hamburger-menu');
    menu.classList.toggle('open');
  }
  
  // Example: Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
