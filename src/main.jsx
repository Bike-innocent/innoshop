import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import 'aos/dist/aos.css';
import App from "./App";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// Import CSS for AOS and Swiper

// import './css/swiper-bundle.min.css';



import './css/styles.css';
import './css/animate.css';
import './css/bootstrap-select.min.css';
// import './css/bootstrap.min.css';
import './css/drift-basic.min.css';
import './css/image-compare-viewer.min.css';
import './css/photoswipe.css';
import './css/swiper-bundle.css';
import './js/swiper-bundle';








// Import AOS
import AOS from 'aos';

function MainApp() {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // disables animations based on a condition
      startEvent: 'DOMContentLoaded', // name of the event to trigger the animation
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections
      debounceDelay: 50, // debounce delay on resize
      throttleDelay: 99, // throttle delay on scroll

      // Settings that can be overridden on per-element basis:
      offset: 120, // offset from the original trigger point
      delay: 100, // delay in milliseconds
      duration: 600, // duration of the animation
      easing: 'ease', // default easing for animations
      once: true, // whether animation should happen only once
      mirror: false, // whether elements should animate out while scrolling past
      anchorPlacement: 'top-bottom', // position of the element triggering the animation
    });

    // Reinitialize AOS on component updates if needed
    AOS.refresh();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <React.StrictMode>
      <NextUIProvider>
        <main>
          <App />
        </main>
      </NextUIProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<MainApp />);
