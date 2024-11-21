document.addEventListener("DOMContentLoaded", () => {
    // Handle form submission
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent page reload
      alert("Thank you for contacting us! We will respond within 1-2 hours.");
      contactForm.reset();
    });
  
    // Banner Slider
    const bannerImages = document.querySelectorAll(".banner-slide img");
    let currentIndex = 0;
  
    function showNextBanner() {
      // Hide all images
      bannerImages.forEach((img, index) => {
        img.style.display = index === currentIndex ? "block" : "none";
      });
  
      // Move to the next image
      currentIndex = (currentIndex + 1) % bannerImages.length;
    }
  
    // Initialize banner slider
    setInterval(showNextBanner, 5000); // Change banner every 5 seconds
    showNextBanner(); // Display the first banner initially
  
    // "Call Us" Button Action
    const callUsButton = document.getElementById("nav2");
    callUsButton.addEventListener("click", () => {
      const phoneNumber = "1234567890"; // Replace with your phone number
      window.location.href = `tel:${phoneNumber}`;
    });
  });
  