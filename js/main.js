// Small interaction helper: highlight the current page in the navigation.
document.querySelectorAll('.nav-link').forEach(link => {
  const current = location.pathname.split('/').pop() || 'index.html';
  if (link.getAttribute('href') === current) link.classList.add('active');
});
