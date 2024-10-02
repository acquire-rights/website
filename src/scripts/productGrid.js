document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.querySelector('.product-grid');
    const searchInput = document.getElementById('searchInput');
    const productImages = [
      { src: 'assets/logos/klant-bww.png', name: 'BWW' },
      { src: 'assets/logos/klant-conrad.png', name: 'Conrad' },
      { src: 'assets/logos/klant-harley.png', name: 'Harley Davidson' },
      { src: 'assets/logos/klant-kpmg.png', name: 'KPMG' },
      { src: 'assets/logos/klant-louwman.png', name: 'Louwman' },
      { src: 'assets/logos/klant-rompslomp.png', name: 'Rompslomp' },
      { src: 'assets/logos/klant-springcast.png', name: 'Springcast' },
      { src: 'assets/logos/klant-ww-2.png', name: 'Weight Watchers' },
      { src: 'assets/logos/decathlon-logo-png-1.png', name: 'Decathlon' },
      { src: 'assets/logos/kadasterdata-logo-png-1.png', name: 'Kadasterdata' },
    ];
  
    function createProductElement(product) {
      const productElement = document.createElement('div');
      productElement.className = 'product-item';
      
      const img = document.createElement('img');
      img.className = 'product-image';
      img.src = product.src;
      img.alt = product.name;
      
      productElement.appendChild(img);
      return productElement;
    }
  
    function renderProducts(products) {
      productGrid.innerHTML = '';
      products.forEach(product => {
        productGrid.appendChild(createProductElement(product));
      });
    }
  
    function filterProducts(searchTerm) {
      return productImages.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  
    searchInput.addEventListener('input', function() {
      const filteredProducts = filterProducts(this.value);
      renderProducts(filteredProducts);
    });
  
    renderProducts(productImages);
  });