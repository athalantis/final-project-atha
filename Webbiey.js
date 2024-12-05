// Select the sidebar and the toggle button
const sidebar = document.getElementById('right-sidebar');
const toggleBtn = document.getElementById('toggle-btn');

// Add a click event listener to the button
toggleBtn.addEventListener('click', () => {
  // Toggle the 'closed' class on the sidebar to open/close it
  sidebar.classList.toggle('closed');
});
