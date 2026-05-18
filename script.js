// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.elements['name'].value;
    const email = this.elements['email'].value;
    const message = this.elements['message'].value;
    
    // Display success message
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = `Thank you, ${name}! Your message has been received. I'll get back to you soon at ${email}.`;
    formMessage.classList.add('success');
    
    // Reset form
    this.reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.classList.remove('success');
        formMessage.textContent = '';
    }, 5000);
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Optional: Add active link styling on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            navLinks.forEach(link => link.style.color = '');
            if (navLinks[index]) {
                navLinks[index].style.color = 'var(--accent)';
            }
        }
    });
});
