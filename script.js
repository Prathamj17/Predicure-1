const searchBox = document.getElementById('search-box');

searchBox.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    const query = searchBox.value.trim();
    if (query) {
      const path = `./${query}.html`;
      const url = `${path}`;
      window.location.href = url;
    }
  }
});