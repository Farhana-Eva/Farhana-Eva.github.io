/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector(
        '.nav__list a[href*=' + sectionId + ']'
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
  contactName = document.getElementById('contact-name'),
  contactEmail = document.getElementById('contact-email'),
  Message = document.getElementById('message'),
  contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();

  // check if the field has a value
  if (
    contactName.value === '' ||
    contactEmail.value === '' ||
    Message.value === ''
  ) {
    // add and remove color
    contactMessage.classList.remove('color-light');
    contactMessage.classList.add('color-dark');

    // show message
    contactMessage.textContent = 'Write all the input fields';
  } else {
    // serviceID - templateID - #form - publickey
    emailjs
      .sendForm(
        'service_paca217',
        'template_tiocjpn',
        '#contact-form',
        'vxDcl4UI2jbOQBn6f'
      )
      .then(
        () => {
          // show message and add color, window + dot to open emoji
          contactMessage.classList.add('color-light');
          contactMessage.textContent = 'Message sent ✔';

          // remove message after 5 seconds
          setTimeout(() => {
            contactMessage.textContent = '';
          }, 5000);
        },
        (error) => {
          alert('OOPs! SOMETHING WENT WRONG...', error);
        }
      );

    // clear input fields
    contactName.value = '';
    contactEmail.value = '';
    Message.value = '';
  }
};

contactForm.addEventListener('submit', sendEmail);
/*===============Contact Form===============*/
