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

  // Section focus functionality
  const sections = document.querySelectorAll('section');

  function updateFocus() {
    const viewportCenter = window.innerHeight / 3 + window.scrollY;
    let focusSection = null;
    let minDistance = Infinity;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const sectionCenter = rect.top + window.scrollY + rect.height / 2;
      const distance = Math.abs(viewportCenter - sectionCenter);
      if (distance < minDistance) {
        minDistance = distance;
        focusSection = section;
      }
    });

    sections.forEach(sec => {
      if (sec === focusSection) {
        sec.classList.remove('blurred');
      } else {
        sec.classList.add('blurred');
      }
    });
  }

  window.addEventListener('scroll', updateFocus);
  updateFocus(); // Initial call
});
