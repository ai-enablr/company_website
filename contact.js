document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const subject = `Demo Request from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

        const mailtoLink = `mailto:me.meghagarg@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    });
});
