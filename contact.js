const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    //Values
    const name = document.getElementById('name').value.trim();
     const email = document.getElementById('email').value.trim();
     const message = document.getElementById('message').value.trim();

     //Clear errors
     document.getElementById('nameError').textContent = '';
     document.getElementById('emailError').textContent = '';
     document.getElementById('messageError').textContent = '';

     let valid = true;

     //Name validation
    if (name === ''){
        document.getElementById('nameError').textContent = 'Please enter your name';
        valid = false;
    }

    //Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === ''){
        document.getElementById('emailError').textContent = 'PLease enter your email';
        valid = false;
    } else if (!emailPattern.test(email)){
        document.getElementById('emailError').textContent = 'PLease enter a valid email';
        valid = false;
    }

    //Message validation
    if(message === ''){
        document.getElementById('messageError').textContent = 'Please enter your message';
        valid = false;
    }

    //mailto link
    if (valid){
        const mailtoLink = `mailto:recipient@example.com?subject=Contact form ${endcodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nForm: "+ name)}`;
         window.location.href = mailtoLink
    }

});
