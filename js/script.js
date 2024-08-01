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

    setInterval(showNextItem, 2000); // 2 seconds

    const form = document.getElementById('bookingForm');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const destination = document.getElementById('destination');
    const errorName = document.getElementById('error-name');
    const errorEmail = document.getElementById('error-email');
    const errorDestination = document.getElementById('error-destination');

    function validateInput(input, errorElement, errorMessage) {
        if (input.value.trim() === '') {
            input.classList.add('invalid');
            input.classList.remove('valid');
            errorElement.textContent = errorMessage;
            return false;
        } else {
            input.classList.add('valid');
            input.classList.remove('invalid');
            errorElement.textContent = '';
            return true;
        }
    }

    function validateEmail(input, errorElement) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value.trim())) {
            input.classList.add('invalid');
            input.classList.remove('valid');
            errorElement.textContent = 'ⓘ Please enter a valid email address';
            return false;
        } else {
            input.classList.add('valid');
            input.classList.remove('invalid');
            errorElement.textContent = '';
            return true;
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;

        isValid = validateInput(name, errorName, 'ⓘ Name is required') && isValid;
        isValid = validateEmail(email, errorEmail) && isValid;
        isValid = validateInput(destination, errorDestination, 'ⓘ Destination is required') && isValid;

        if (isValid) {
            // Jeda 1 detik sebelum menampilkan alert
            setTimeout(() => {
                alert('Terima kasih sudah memesan');
                form.reset();
                [name, email, destination].forEach(input => {
                    input.classList.remove('valid');
                });
            }, 500);
        }
    });

    const buttons = document.querySelectorAll('#package button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const packageSection = button.parentElement;
            const img = packageSection.querySelector('img');
            const title = packageSection.querySelector('p').innerText;
            const price = packageSection.querySelector('p:nth-of-type(2)').innerText;
            
            const alertMessage = `Title: ${title}\nPrice: ${price}\nKeterangan: ${img.alt}`;
            
            alert(alertMessage);
        });
    });
});
