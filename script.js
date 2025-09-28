// === DARK/LIGHT MODE ===
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Cek preferensi sistem atau localStorage
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');
let currentTheme = savedTheme || (userPrefersDark ? 'dark' : 'light');

// Terapkan tema saat load
if (currentTheme === 'dark') {
  body.classList.replace('light-mode', 'dark-mode');
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
} else {
  body.classList.replace('dark-mode', 'light-mode');
  themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

// Toggle tema
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    currentTheme = 'dark';
  } else {
    localStorage.setItem('theme', 'light');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    currentTheme = 'light';
  }
});