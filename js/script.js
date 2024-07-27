document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('banner');
    const carouselItems = banner.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextItem() {
        carouselItems[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].style.display = 'block';
        console.log(carouselItems[currentIndex]);
    }

    setInterval(showNextItem, 2000); // 10 seconds

    const form = document.getElementById('form');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const destination = document.getElementById('destination');
    const errorElement = document.getElementById('error');

    form.addEventListener('submit', (e) => {
        if (name.value === '' || name.value == null) {
            alert('Name is required');
        }

        if (email.value === '' || email.value == null || !email.value.includes('@')) {
            alert('Email is required');
        }

        if (destination.value === '' || destination.value == null || destination.value === 'Choose Your Destination') {
            alert('Destination is required');
        }

        e.preventDefault();
    });

    const buttons = document.querySelectorAll('#package button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const packageSection = button.parentElement;
            const img = packageSection.querySelector('img');
            const title = packageSection.querySelector('p').innerText;
            const price = packageSection.querySelector('p:nth-of-type(2)').innerText;
            
            const alertMessage = `Title: ${title}\nPrice: ${price}\nImage URL: ${img.alt}`;
            
            alert(alertMessage);
        });
    });
});
