document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon');
  const sidebar = document.querySelector('.sidebar');

  menuIcon.addEventListener('click', function () {
    sidebar.classList.toggle('show-sidebar');
  });

  // Close the sidebar when a link is clicked
  const sidebarLinks = document.querySelectorAll('.sidebar a');
  sidebarLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      sidebar.classList.remove('show-sidebar');
    });
  });
});
