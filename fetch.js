// Make GET request to root of GitHub Pages site
fetch('https://dharantej1.github.io/')
  .then((response) => response.text()) // Extract response as text
  .then((html) => {
    // Parse HTML to extract list of directories
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const directories = doc.querySelectorAll('a[href]');

    // Add directories to list
    const directoryList = document.querySelector('#directory-list');
    directories.forEach((directory) => {
      const directoryName = directory.textContent;
      const directoryURL = directory.getAttribute('href');
      directoryList.innerHTML += `<li class="list-group-item"><a href="${directoryURL}">${directoryName}</a></li>`;
    });
  })
  .catch((error) => {
    console.error(error);
  });
