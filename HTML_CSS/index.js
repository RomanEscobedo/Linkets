// Remove the transition class
const square = document.querySelector('.t-wrapper');
square.classList.remove('trending-animation');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('trending-animation');
      return;
    }

    square.classList.remove('trending-animation');
  });
});

observer.observe(document.querySelector('.t-wrapper'));
