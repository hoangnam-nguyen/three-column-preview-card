// CSS Custom Properties for viewport units on mobile (Source: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/)

// vh was initially calculated by the current viewport of your browser. 
// If you opened your browser and started to load a website, 
// 1vh was equal to 1% of your screen height, minus the browser interface.
// But if you start scrolling, it’s a different story. 
// Once you get past a piece of the browser interface, like the address bar, 
// the vh value would update and the result was an awkward jump in the content.

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// Additionally, we can update the value of --vh by listening to the window resize event. 
// This is handy in case the user rotates the device screen, like from landscape to portrait, 
// or the navigation moves out of view on scroll.

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });