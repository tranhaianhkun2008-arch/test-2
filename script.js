// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const sidebarLinks = document.querySelectorAll('.sidebar-list a');

  // Toggle menu on button click
  menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
  });

  // Close menu when a link is clicked
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      sidebar.classList.remove('active');
    });
  });

  // Close menu when clicking outside of it
  document.addEventListener('click', function(event) {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);

    if (!isClickInsideSidebar && !isClickOnToggle && sidebar.classList.contains('active')) {
      menuToggle.classList.remove('active');
      sidebar.classList.remove('active');
    }
  });

  // Handle window resize - close menu on returning to desktop view
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      menuToggle.classList.remove('active');
      sidebar.classList.remove('active');
    }
  });
});
