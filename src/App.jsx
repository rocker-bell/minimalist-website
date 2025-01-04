import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SliderPage from "./components/sliderpage.jsx"
import Structure from "./components/structure.jsx";

function App() {


  return (
    <>
      <Router>
        {/* Wrap all Route components inside Routes */}
        <Routes>
          <Route path="/" element={<Structure />} />
          <Route path="/slider" element={<SliderPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


  // const [showSlider, setShowSlider] = useState(false);

  // useEffect(() => {
  //   // Add event listener for the "Quizz" link
  //   const handleQuizzClick = (e) => {
  //     e.preventDefault(); // Prevent default anchor behavior
  //     setShowSlider((prevState) => {
  //       console.log('Previous state:', prevState);
  //       const newState = !prevState;
  //       console.log('New state:', newState);
  //       return newState;
  //     });
  //   };

  //   const quizzLink = document.getElementById("Quizz-click");
  //   quizzLink.addEventListener("click", handleQuizzClick);

  //   // Cleanup event listener on component unmount
  //   return () => {
  //     quizzLink.removeEventListener("click", handleQuizzClick);
  //   };
  // }, []);
