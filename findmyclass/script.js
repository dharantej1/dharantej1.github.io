document.querySelectorAll('.tile').forEach(tile => {
    tile.addEventListener('click', function() {
      this.classList.toggle('clicked');
      this.nextElementSibling.style.marginLeft = this.classList.contains('clicked') ? '280px' : '20px';
    });
  });
  