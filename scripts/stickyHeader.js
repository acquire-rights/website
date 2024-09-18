document.addEventListener('DOMContentLoaded', function() {
  // header sticky
    const header = document.querySelector('.sticky-header');
  
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
        header.classList.add('scrolled');
        } else {
        header.classList.remove('scrolled');
        }
    });
})