document.addEventListener('DOMContentLoaded', function() {
  // Product grid
    const productGrid = document.querySelector('.product-grid');
    const productImages = [
        'assets/logos/klant-bww.png',
        'assets/logos/klant-conrad.png',
        'assets/logos/klant-harley.png',
        'assets/logos/klant-kpmg.png',
        'assets/logos/klant-louwman.png',
        'assets/logos/klant-rompslomp.png',
        'assets/logos/klant-springcast.png',
        'assets/logos/klant-ww-2.png',
        'assets/logos/decathlon-logo-png-1.png',
        'assets/logos/kadasterdata-logo-png-1.png', 
    ]
    
    for (let i = 0; i < productImages.length; i++) {
        const productElement = document.createElement('img');
        productElement.className = 'product-image'; 
        productElement.src = productImages[i];
        productGrid.appendChild(productElement);
    }
})