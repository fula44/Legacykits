document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
   
    document.querySelector('.contact-form').style.display = 'none';

    
    document.getElementById('thankYouMessage').style.display = 'block';
    
});
