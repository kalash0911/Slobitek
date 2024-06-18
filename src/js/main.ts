// For remuve height header when scroll to #anchor

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector('header');
  const headerHeight = header ? header.offsetHeight : 0;

  window.addEventListener('hashchange', () => {
      const targetId = location.hash.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
  });
});

// For remuve #anchor in url after reload page

window.addEventListener('load', () => {
  if (window.location.hash) {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  }
});

// Header 

const burger = document.querySelector('.burger');
const linkClose = document.querySelectorAll('.link-close');
const overflow = document.querySelector('.overflow');

burger?.addEventListener('click', function () {
  document.body.classList.toggle('body_lock');
  document.body.classList.toggle('active');
});

overflow?.addEventListener('click', function () {
  document.body.classList.toggle('body_lock');
  document.body.classList.toggle('active');
});

for (let i = 0; i < linkClose.length; ++i) {
  linkClose[i].addEventListener('click', function () {
  document.body.classList.remove('body_lock');
  document.body.classList.remove('active');
  });
}

// Header scroll

const header: HTMLElement | null = document.getElementById('header');

if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
    }
  });
}

// Search 

const searchBtn = document.querySelector('.search-btn');
const searchFile = document.querySelector('.search-file');
const overflowBlur = document.querySelector('.overflow-blur');

searchBtn?.addEventListener('click', function () {
  searchFile?.classList.add('active');
  overflowBlur?.classList.add('active');
  document.body.classList.add('body_lock');
});

overflowBlur?.addEventListener('click', function () {
  searchFile?.classList.remove('active');
  overflowBlur.classList.remove('active');
  document.body.classList.remove('body_lock');
});

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

// Swipers

// @ts-ignore
function destroySlidersOnResize(selector, width, obj, moreThan) {
  const init = {
    ...obj,
  };

  const win = window;
  const sliderSelector = document.querySelector(selector);
  // @ts-ignore
  let swiper = new Swiper(selector, init);

  const toggleInit = () => {
    const neededWidth = moreThan
      ? win.innerWidth >= width
      : win.innerWidth <= width;
    if (neededWidth) {
      if (!sliderSelector?.classList.contains("swiper-initialized")) {
        // @ts-ignore
        swiper = new Swiper(selector, init);
      }
    } else if (sliderSelector.classList.contains("swiper-initialized")) {
      swiper.destroy();
    }
  };

  ["load", "resize"].forEach((evt) =>
    win.addEventListener(evt, toggleInit, false)
  );
}

// @ts-ignore
destroySlidersOnResize(".deliverSlider", 99999, {
  spaceBetween: 95,
  slidesPerView: 4,

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1500: {
      slidesPerView: 4,
      spaceBetween: 95,
    },
  },

  navigation: {
    prevEl: ".deliver-prev", 
    nextEl: ".deliver-next",
  },

  pagination: {
    el: '.deliver-pag',
    clickable: true,
  },
});

// @ts-ignore
destroySlidersOnResize(".projectsSlider", 99999, {
  slidesPerView: 1,
  speed: 700,

  breakpoints: {
    0: {
      spaceBetween: 20,
    },
    768: {
      spaceBetween: 0,
    },
  },

  navigation: {
    nextEl: ".projects-next",
    prevEl: ".projects-prev",
  },

});

// @ts-ignore
destroySlidersOnResize(".aboutSlider", 99999, {
  slidesPerView: 1,
  spaceBetween: 40,
  speed: 1000,
  direction: "vertical",
  autoHeight: true,

  breakpoints: {
    0: {
      direction: "horizontal",
    },
    980: {
      direction: "vertical",
    },
  },

  pagination: {
    el: ".about-pag",
    clickable: true,
  },

  navigation: {
    nextEl: ".about-next",
    prevEl: ".about-prev",
  },

});

// @ts-ignore
destroySlidersOnResize(".blogSlider", 99999, {
  slidesPerView: 1,
  speed: 700,
  spaceBetween: 24,

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 1,
    },
  },

  navigation: {
    nextEl: ".blog-next",
    prevEl: ".blog-prev",
  },

  pagination: {
    el: '.blog-pag',
    clickable: true,
  },

});