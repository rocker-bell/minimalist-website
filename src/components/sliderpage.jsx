import { Link, useNavigate } from 'react-router-dom';
import "../styles/Sliderpage.css";
import Slider from './slider.jsx';

const SliderPage = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    // Navigate to the main page
    navigate("/");

    // Trigger a page reload after navigation
    window.location.reload();
  };

  return (
    <div>
      {/* Return to Main Page Button at the Top */}
      <button onClick={handleReturn} className="btn-return">Return to Main Page</button>

      <h1>Slider Page</h1>
      <Slider />
    </div>
  );
};

export default SliderPage;






// import { Link } from 'react-router-dom';
// import "../styles/Sliderpage.css"
// import Slider from './Slider.jsx';

// const SliderPage = () => {
//   return (
//     <div>
//       {/* Return to Main Page Button at the Top */}
//       <Link to="/" className="btn-return">Return to Main Page</Link>

//       <h1>Slider Page</h1>
//       <Slider />
//     </div>
//   );
// };

// export default SliderPage;




// // import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import Slider from './Slider.jsx';  // Assuming the Slider component is being used here

// const SliderPage = () => {
//   const navigate = useNavigate();  // React Router hook to navigate programmatically

//   const handleReturn = () => {
//     // Force a quick reload of the page
//     window.location.reload();
//     // You can also navigate to the home page if you want:
//     // navigate("/");
//   };

//   return (
//     <div>
//       {/* Return to Main Page Button at the Top */}
//       <button onClick={handleReturn} className="btn-return">Return to Main Page</button>

//       <h1>Slider Page</h1>
//       <Slider />
//     </div>
//   );
// };

// export default SliderPage;

