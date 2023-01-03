// Generate a unique callback name
const callbackName = `callback${Date.now()}`;

// Define the callback function
window[callbackName] = (data) => {
  // Add directories to list
  const directoryList = document.querySelector('#directory-list');
  data.forEach((directory) => {
    const directoryName = directory.textContent;
    const directoryURL = directory.getAttribute('href');
    directoryList.innerHTML += `<li class="list-group-item"><a href="${directoryURL}">${directoryName}</a></li>`;
  });
};

// Create a script element
const script = document.createElement('script');

// Set the src attribute to the URL of the GitHub Pages site, with the callback name as a query parameter
script.src = `https://dharantej1.me/?callback=${callbackName}`;

// Append the script element to the document
document.body.appendChild(script);
