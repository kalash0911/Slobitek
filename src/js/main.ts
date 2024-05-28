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
}};

// Swiper

const animationDelayTime = 1000; // Delay for swip swiper and circle-icon anim

// @ts-ignore
const verticalSlider = new Swiper(".verticalSlider", {
  effect: "fade",
  speed: 400,
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: ".verticalSliderNav",
  },
});

verticalSlider.on("slideChange", function () {
  verticalSlider.allowSlideNext = false;
  verticalSlider.allowSlidePrev = false;

  setTimeout(function () {
    verticalSlider.allowSlideNext = true;
    verticalSlider.allowSlidePrev = true;
  }, animationDelayTime);
});

// @ts-ignore
const verticalSliderNav = new Swiper(".verticalSliderNav", {
  direction: "vertical",
  slidesPerView: 1,
  speed: 1000,
  autoHeight: true,
  allowTouchMove: false,
});

verticalSliderNav.on("slideChange", function () {
  verticalSliderNav.allowSlideNext = false;
  verticalSliderNav.allowSlidePrev = false;

  setTimeout(function () {
    verticalSliderNav.allowSlideNext = true;
    verticalSliderNav.allowSlidePrev = true;
  }, animationDelayTime);
});

// Animation for circle-icon

document.addEventListener('DOMContentLoaded', () => {
  const swiperNextButton = document.querySelector('.swiper-button-next') as HTMLElement;
  const swiperPrevButton = document.querySelector('.swiper-button-prev') as HTMLElement;
  const navSlides = document.querySelectorAll('.nav-slide');
  let isAnimating = false;

  interface LineStyle {
    selector: string;
    initialStyles: {
      minWidth: string;
      minHeight: string;
      opacity: string;
      transition: string;
    };
    finalStyles: {
      minWidth: string;
      minHeight: string;
      opacity: string;
      transition: string;
    };
  }

  const lines: LineStyle[] = [
    {
      selector: '.line0',
      initialStyles: { minWidth: '0', minHeight: '0', opacity: '0', transition: 'none' },
      finalStyles: { minWidth: '136px', minHeight: '136px', opacity: '1', transition: 'all 1s' }
    },
    {
      selector: '.line1',
      initialStyles: { minWidth: '136px', minHeight: '136px', opacity: '1', transition: 'none' },
      finalStyles: { minWidth: '320px', minHeight: '320px', opacity: '0.5', transition: 'all 1s' }
    },
    {
      selector: '.line2',
      initialStyles: { minWidth: '320px', minHeight: '320px', opacity: '0.5', transition: 'none' },
      finalStyles: { minWidth: '720px', minHeight: '720px', opacity: '0.4', transition: 'all 1s' }
    },
    {
      selector: '.line3',
      initialStyles: { minWidth: '720px', minHeight: '720px', opacity: '0.4', transition: 'none' },
      finalStyles: { minWidth: '1040px', minHeight: '1040px', opacity: '0.3', transition: 'all 1s' }
    },
    {
      selector: '.line4',
      initialStyles: { minWidth: '1040px', minHeight: '1040px', opacity: '0.3', transition: 'none' },
      finalStyles: { minWidth: '1400px', minHeight: '1400px', opacity: '0.2', transition: 'all 1s' }
    },
    {
      selector: '.line5',
      initialStyles: { minWidth: '1400px', minHeight: '1400px', opacity: '0.2', transition: 'none' },
      finalStyles: { minWidth: '1900px', minHeight: '1900px', opacity: '0', transition: 'all 1s' }
    }
  ];

  const applyStyles = (element: HTMLElement, styles: { minWidth: string, minHeight: string, opacity: string, transition: string }) => {
    element.style.minWidth = styles.minWidth;
    element.style.minHeight = styles.minHeight;
    element.style.opacity = styles.opacity;
    element.style.transition = styles.transition;
  };

  const handleClick = () => {
    if (isAnimating) {
      return;
    }

    isAnimating = true;

    lines.forEach(line => {
      const elements = document.querySelectorAll(line.selector) as NodeListOf<HTMLElement>;
      elements.forEach(element => {
        applyStyles(element, line.finalStyles);
        setTimeout(() => {
          applyStyles(element, line.initialStyles);
          isAnimating = false;
        }, animationDelayTime); // Revert back after 1 second
      });
    });
  };

  swiperNextButton.addEventListener('click', handleClick);
  swiperPrevButton.addEventListener('click', handleClick);
  navSlides.forEach(navSlide => {
    navSlide.addEventListener('click', handleClick);
  });
});






