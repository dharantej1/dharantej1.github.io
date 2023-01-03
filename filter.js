// Function to filter directories
const filterDirectories = () => {
    // Get search term
    const searchTerm = document.querySelector('#search').value.toLowerCase();
  
    // Get list of directories
    const directories = document.querySelectorAll('#directory-list li');
  
    // Filter directories
    directories.forEach((directory) => {
      const directoryName = directory.textContent.toLowerCase();
      if (directoryName.includes(searchTerm)) {
        directory.style.display = '';
      } else {
        directory.style.display = 'none';
      }
    });
  };
  
  // Add event listener to search input
  const searchInput = document.querySelector('#search');
  searchInput.addEventListener('keyup', filterDirectories);
  