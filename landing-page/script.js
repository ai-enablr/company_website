document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Check if the link is for an on-page section (starts with #)
            if (href && href.startsWith('#')) {
                e.preventDefault();

                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
            // For external links like 'index.html' or 'contact.html', do nothing and let the browser navigate.
        });
    });

    // Example for "Learn More" button
    const learnMoreButton = document.querySelector('.cta-button.secondary');
    if (learnMoreButton) {
        learnMoreButton.addEventListener('click', () => {
            const howItWorksSection = document.querySelector('#how-it-works');
            if (howItWorksSection) {
                howItWorksSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    // Play overlay click handler for hero visual
    const playOverlay = document.querySelector('.play-overlay');
    if (playOverlay) {
        playOverlay.addEventListener('click', () => {
            alert('Simulating video play! (In a real scenario, this would play an embedded video)');
            // You would typically replace the image with an iframe or video element here
        });
    }

    // Add more interactive elements here as the page grows (e.g., tab switching for use cases, form submissions)
});
