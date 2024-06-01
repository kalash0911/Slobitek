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
    smallScreenInitialStyles: {
      minWidth: string;
      minHeight: string;
      opacity: string;
      transition: string;
    };
    smallScreenFinalStyles: {
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
      finalStyles: { minWidth: '136px', minHeight: '136px', opacity: '1', transition: 'all 1s' },
      smallScreenInitialStyles: { minWidth: '0', minHeight: '0', opacity: '0', transition: 'none' },
      smallScreenFinalStyles: { minWidth: '114px', minHeight: '114px', opacity: '1', transition: 'all 1s' }
    },
    {
      selector: '.line1',
      initialStyles: { minWidth: '136px', minHeight: '136px', opacity: '1', transition: 'none' },
      finalStyles: { minWidth: '320px', minHeight: '320px', opacity: '0.5', transition: 'all 1s' },
      smallScreenInitialStyles: { minWidth: '114px', minHeight: '114px', opacity: '1', transition: 'none' },
      smallScreenFinalStyles: { minWidth: '230px', minHeight: '230px', opacity: '0.5', transition: 'all 1s' }
    },
    {
      selector: '.line2',
      initialStyles: { minWidth: '320px', minHeight: '320px', opacity: '0.5', transition: 'none' },
      finalStyles: { minWidth: '720px', minHeight: '720px', opacity: '0.4', transition: 'all 1s' },
      smallScreenInitialStyles: { minWidth: '230px', minHeight: '230px', opacity: '0.5', transition: 'none' },
      smallScreenFinalStyles: { minWidth: '380px', minHeight: '380px', opacity: '0.4', transition: 'all 1s' }
    },
    {
      selector: '.line3',
      initialStyles: { minWidth: '720px', minHeight: '720px', opacity: '0.4', transition: 'none' },
      finalStyles: { minWidth: '1040px', minHeight: '1040px', opacity: '0.3', transition: 'all 1s' },
      smallScreenInitialStyles: { minWidth: '380px', minHeight: '380px', opacity: '0.4', transition: 'none' },
      smallScreenFinalStyles: { minWidth: '520px', minHeight: '520px', opacity: '0.3', transition: 'all 1s' }
    },
    {
      selector: '.line4',
      initialStyles: { minWidth: '1040px', minHeight: '1040px', opacity: '0.3', transition: 'none' },
      finalStyles: { minWidth: '1400px', minHeight: '1400px', opacity: '0.2', transition: 'all 1s' },
      smallScreenInitialStyles: { minWidth: '520px', minHeight: '520px', opacity: '0.3', transition: 'none' },
      smallScreenFinalStyles: { minWidth: '720px', minHeight: '720px', opacity: '0.2', transition: 'all 1s' }
    },
    {
      selector: '.line5',
      initialStyles: { minWidth: '1400px', minHeight: '1400px', opacity: '0.2', transition: 'none' },
      finalStyles: { minWidth: '1900px', minHeight: '1900px', opacity: '0', transition: 'all 1s' },
      smallScreenInitialStyles: { minWidth: '720px', minHeight: '720px', opacity: '0.2', transition: 'none' },
      smallScreenFinalStyles: { minWidth: '920px', minHeight: '920px', opacity: '0', transition: 'all 1s' }
    }
  ];

  const applyStyles = (element: HTMLElement, styles: { minWidth: string, minHeight: string, opacity: string, transition: string }) => {
    element.style.minWidth = styles.minWidth;
    element.style.minHeight = styles.minHeight;
    element.style.opacity = styles.opacity;
    element.style.transition = styles.transition;
  };

  const applyResponsiveStyles = () => {
    const isSmallScreen = window.innerWidth <= 768;

    lines.forEach(line => {
      const elements = document.querySelectorAll(line.selector) as NodeListOf<HTMLElement>;
      elements.forEach(element => {
        if (isSmallScreen) {
          applyStyles(element, line.smallScreenFinalStyles);
        } else {
          applyStyles(element, line.finalStyles);
        }
      });
    });
  };

  const handleClick = () => {
    if (isAnimating) {
      return;
    }

    isAnimating = true;

    lines.forEach(line => {
      const elements = document.querySelectorAll(line.selector) as NodeListOf<HTMLElement>;
      elements.forEach(element => {
        applyResponsiveStyles();
        setTimeout(() => {
          const isSmallScreen = window.innerWidth <= 768;
          applyStyles(element, isSmallScreen ? line.smallScreenInitialStyles : line.initialStyles);
          isAnimating = false;
        }, 1000); // Revert back after 1 second
      });
    });
  };

  swiperNextButton.addEventListener('click', handleClick);
  swiperPrevButton.addEventListener('click', handleClick);
  navSlides.forEach(navSlide => {
    navSlide.addEventListener('click', handleClick);
  });

  window.addEventListener('resize', applyResponsiveStyles);
  applyResponsiveStyles(); // Apply styles on initial load
});

// Animation for sector-icon

const circle1 = document.querySelector('.sector-circle1') as SVGCircleElement;
const circle2 = document.querySelector('.sector-circle2') as SVGCircleElement;
const sectorCircleSvg1 = document.querySelector('.sector-circle-svg1') as SVGGElement;
const sectorCircleSvg2 = document.querySelector('.sector-circle-svg2') as SVGGElement;

if (circle1 && circle2 && sectorCircleSvg1 && sectorCircleSvg2) {
  const animationSpeed = '1000ms'; // Animation speed
  const initialOffset = 6580;
  const initialArray = 6580;
  const targetOffset = 8180;
  const targetArray = 8180;
  const initialRotation = 30;
  const targetRotation = 90;
  const initialRotationSvg2 = -90;
  const targetRotationSvg2 = 30;

  let isAnimating = false;

  const playAnimation = (reverse: boolean) => {
    if (isAnimating) return;
    isAnimating = true;

    // Determine initial and target values based on reverse flag
    const offset1 = reverse ? targetOffset : initialOffset;
    const array1 = reverse ? targetArray : initialArray;
    const offset2 = reverse ? initialOffset : targetOffset;
    const array2 = reverse ? initialArray : targetArray;
    const rotation1 = reverse ? targetRotation : initialRotation;
    const rotation2 = reverse ? initialRotation : targetRotation;
    const rotationSvg2_1 = reverse ? targetRotationSvg2 : initialRotationSvg2;
    const rotationSvg2_2 = reverse ? initialRotationSvg2 : targetRotationSvg2;

    // Set initial values
    circle1.style.strokeDashoffset = offset1.toString();
    circle1.style.strokeDasharray = array1.toString();
    circle2.style.strokeDashoffset = offset2.toString();
    circle2.style.strokeDasharray = array2.toString();
    sectorCircleSvg1.style.transform = `rotate(${rotation1}deg)`;
    sectorCircleSvg2.style.transform = `rotate(${rotationSvg2_1}deg)`;

    // Add smooth transition
    circle1.style.transition = `stroke-dashoffset ${animationSpeed}, stroke-dasharray ${animationSpeed}`;
    circle2.style.transition = `stroke-dashoffset ${animationSpeed}, stroke-dasharray ${animationSpeed}`;
    sectorCircleSvg1.style.transition = `transform ${animationSpeed}`;
    sectorCircleSvg2.style.transition = `transform ${animationSpeed}`;

    // Use setTimeout to apply the target values in the next frame
    setTimeout(() => {
      circle1.style.strokeDashoffset = offset2.toString();
      circle1.style.strokeDasharray = array2.toString();
      circle2.style.strokeDashoffset = offset1.toString();
      circle2.style.strokeDasharray = array1.toString();
      sectorCircleSvg1.style.transform = `rotate(${rotation2}deg)`;
      sectorCircleSvg2.style.transform = `rotate(${rotationSvg2_2}deg)`;
    }, 0);

    // Use another setTimeout to revert to initial values without transition
    setTimeout(() => {
      circle1.style.transition = 'none';
      circle1.style.strokeDashoffset = offset1.toString();
      circle1.style.strokeDasharray = array1.toString();
      circle2.style.transition = 'none';
      circle2.style.strokeDashoffset = offset2.toString();
      circle2.style.strokeDasharray = array2.toString();
      sectorCircleSvg1.style.transition = 'none';
      sectorCircleSvg1.style.transform = `rotate(${rotation1}deg)`;
      sectorCircleSvg2.style.transition = 'none';
      sectorCircleSvg2.style.transform = `rotate(${rotationSvg2_1}deg)`;
      isAnimating = false;
    }, parseInt(animationSpeed)); // After animationSpeed milliseconds
  };

  verticalSliderNav.on('slideNextTransitionStart', () => playAnimation(false));
  verticalSliderNav.on('slidePrevTransitionStart', () => playAnimation(true));
}