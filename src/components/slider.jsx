import React, { useEffect, useRef } from "react";
import "../Slider.css";

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
        welcomeMessage.style.display = "none";
        isTabClicked = true;
      }

      tabs.forEach((tab, i) => {
        tab.classList.remove("active");
        contents[i].classList.remove("active");
      });

      tabs[index].classList.add("active");
      contents[index].classList.add("active");

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
          {["content1", "content2", "content3"].map((contentName, index) => (
            <div
              key={index}
              className="content"
              id={contentName}
              ref={(el) => (contentsRef.current[index] = el)}
            >
              {contentName}
            </div>
          ))}
        </div>
      </div>

      <div className="container footer">© Copyright</div>
    </>
  );
};

export default Slider;
