import React, { useEffect, useRef } from "react";
import "../Slider.css";
import ChronoComponent from "./Chrono.jsx"; // Correct import for the Chrono component.

const Slider = () => {
  const tabsRef = useRef([]);
  const contentsRef = useRef([]);
  const welcomeMessageRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const tabs = tabsRef.current;
    const contents = contentsRef.current;
    const welcomeMessage = welcomeMessageRef.current;
    const slider = sliderRef.current;

    let isTabClicked = false;

    // Function to set the initial state
    const initializeSlider = () => {
      if (slider && tabs.length > 0) {
        const tabWidth = tabs[0].offsetWidth;
        slider.style.width = `${tabWidth}px`;
        slider.style.left = `${tabs[0].offsetLeft}px`;
      }
    };

    initializeSlider(); // Initialize on component mount

    const handleTabClick = (index) => {
      if (!isTabClicked) {
        if (welcomeMessage) welcomeMessage.style.display = "none";
        isTabClicked = true;
      }

      tabs.forEach((tab, i) => {
        tab.classList.remove("active");
        contents[i].classList.remove("active");
        contents[i].style.display = "none"; // Hide all contents
      });

      tabs[index].classList.add("active");
      contents[index].classList.add("active");
      contents[index].style.display = "flex"; // Show the active content

      if (slider) {
        const tabWidth = tabs[index].offsetWidth;
        slider.style.width = `${tabWidth}px`;
        slider.style.left = `${tabs[index].offsetLeft}px`;
        slider.style.backgroundColor = "blue";
      }
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => handleTabClick(index));
    });

    // Cleanup event listeners when the component unmounts
    return () => {
      tabs.forEach((tab, index) => {
        tab.removeEventListener("click", () => handleTabClick(index));
      });
    };
  }, []); // This will run on mount and whenever the component is updated

  return (
    <>
      <nav className="nav-slider container">Welcome to Website Deploy Page</nav>

      <div className="container container-main">
        <div className="tabs">
          {["tab1", "tab2", "tab3"].map((tabName, index) => (
            <button
              key={index}
              className="tab"
              data-target={`content${index + 1}`}
              ref={(el) => (tabsRef.current[index] = el)}
            >
              {tabName}
            </button>
          ))}
          <div className="slider" ref={sliderRef}></div>
        </div>
        <div className="contents">
          <div className="welcome-message" ref={welcomeMessageRef}>
            Welcome
          </div>
          <div
            key={0}
            className="content active"
            id="content1"
            ref={(el) => (contentsRef.current[0] = el)}
          >
            <ChronoComponent />
          </div>
          <div
            key={1}
            className="content"
            id="content2"
            ref={(el) => (contentsRef.current[1] = el)}
          >
            Content 2
          </div>
          <div
            key={2}
            className="content"
            id="content3"
            ref={(el) => (contentsRef.current[2] = el)}
          >
            Content 3
          </div>
        </div>
      </div>

      <div className="container footer">© Copyright</div>
    </>
  );
};

export default Slider;
