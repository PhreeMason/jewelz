// Dynamic month and spots counter
function updateUrgencyBanner() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentDate = new Date();
    const currentMonth = months[currentDate.getMonth()];
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const currentDay = currentDate.getDate();
    const daysLeft = daysInMonth - currentDay;
    
    // Calculate spots left based on days remaining (starts with 4 spots, decreases as month progresses)
    let spotsLeft = Math.max(1, Math.ceil(4 * (daysLeft / daysInMonth)));
    
    // Update the banner
    const spotsElement = document.getElementById('spotsLeft');
    const monthElement = document.getElementById('currentMonth');
    
    if (spotsElement && monthElement) {
        spotsElement.textContent = `Only ${spotsLeft}`;
        monthElement.textContent = currentMonth;
    }
}

// Update on page load
updateUrgencyBanner();

// Update every hour
setInterval(updateUrgencyBanner, 3600000);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Improved FAQ toggle with better UX
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const faqItem = this.parentElement;
        const answer = this.nextElementSibling;
        const isOpen = faqItem.classList.contains('active');
        
        // Close all answers
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
            item.querySelector('.faq-answer').style.display = 'none';
        });
        
        // Open clicked answer if it wasn't already open
        if (!isOpen) {
            faqItem.classList.add('active');
            answer.style.display = 'block';
        }
    });
});

// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', function() {
            navLinks.classList.toggle('mobile-active');
        });
        
        // Close menu when clicking on a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('mobile-active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('mobile-active');
            }
        });
    }
});

// Form enhancement
// const form = document.querySelector('.contact-form form');
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     alert('Thanks for reaching out! Julie will contact you within 24 hours. Get ready to transform! 💪');
// });