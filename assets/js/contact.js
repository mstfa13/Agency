// Contact Form Handler
// Replace YOUR_WEBHOOK_URL with the actual Google Sheets webhook URL

const WEBHOOK_URL = 'YOUR_WEBHOOK_URL'; // Replace this with your Google Sheets webhook URL

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');
  const errorMessage = document.getElementById('errorMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toISOString()
      };

      // Hide previous messages
      successMessage.style.display = 'none';
      errorMessage.style.display = 'none';

      // Disable submit button
      const submitBtn = contactForm.querySelector('.submit-btn');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      try {
        // Send data to Google Sheets webhook
        if (WEBHOOK_URL !== 'YOUR_WEBHOOK_URL') {
          const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
          });

          // Show success message
          successMessage.style.display = 'block';
          contactForm.reset();

          // Scroll to success message
          successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

          // Hide success message after 5 seconds
          setTimeout(() => {
            successMessage.style.display = 'none';
          }, 5000);
        } else {
          // For testing without webhook
          console.log('Form data:', formData);
          alert('Note: Webhook URL not configured. Form data logged to console.');
          successMessage.style.display = 'block';
          contactForm.reset();
        }

      } catch (error) {
        console.error('Error submitting form:', error);
        errorMessage.style.display = 'block';
        
        // Scroll to error message
        errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Hide error message after 5 seconds
        setTimeout(() => {
          errorMessage.style.display = 'none';
        }, 5000);
      } finally {
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }
});
