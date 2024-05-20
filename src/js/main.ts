// Scroll anim

document.addEventListener('DOMContentLoaded', () => {
    initAnimationOnScroll();
  });
  
  export const initAnimationOnScroll = () => {
  const onEntry: IntersectionObserverCallback = (entry) => {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add('show');
      }
    });
  };
  
  const options = { threshold: [0.5] };
  const observer = new IntersectionObserver(onEntry, options);
  const elements = document.querySelectorAll('.anim');
  for (const elm of elements) {
    observer.observe(elm);
  }
  };