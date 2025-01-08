import { Link } from "react-router-dom";
// const Structure = () => {
//   return (
//     <div className="wrapper">
//       {/* Header Section */}
//       <div className="container1-nav">
//         <div className="container1">
//           <h1>E-learningsite</h1>
//           <nav className="nav">
//             <ul className="lists">
//               <li><a href="#">Logo</a></li>
//               <li><a href="#">Tutoriel</a></li>
//               <li><a href="#">Reference</a></li>
//               <li><a href="#">Exercice</a></li>
//               <li><a href="#">Quizz</a></li>
//             </ul>
//           </nav>
//         </div>
//       </div>

//       {/* Main Content Section */}
//       <div className="container2">
//         {/* Card 1: HTML */}
//         <div className="card-container card1">
//           <h2>HTML</h2>
//           <p>LANGUAGE POUR LA CREATION DES SITES WEB.</p>
//           <div className="card-button card1-button1">Tutoriels</div>
//           <div className="card-button card1-button2">Exercice</div>
//           <div className="card-button card1-button3">Quizz</div>
//         </div>

//         {/* Card 2: CSS */}
//         <div className="card-container card2">
//           <h2>CSS</h2>
//           <p>LANGUAGE POUR LE STYLE DES PAGES WEB.</p>
//           <div className="card-button card1-button1">Tutoriels</div>
//           <div className="card-button card1-button2">Exercice</div>
//           <div className="card-button card1-button3">Quizz</div>
//         </div>

//         {/* Card 3: JavaScript */}
//         <div className="card-container card3">
//           <h2>JavaScript</h2>
//           <p>LANGUAGE DE PROGRAMATION DES PAGES WEB.</p>
//           <div className="card-button card1-button1">Tutoriels</div>
//           <div className="card-button card1-button2">Exercice</div>
//           <div className="card-button card1-button3" >Quizz</div>
//         </div>

//         {/* Card 4: Form */}
//         <form className="card-container card4 form-group"  name = "contact" netlify>
//           <h4>Connexion</h4>
//           <div className="form-group">
//             <label htmlFor="name" className="form-label">Name:</label>
//             <input type="text" name = "name" id="name" className="form-control" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password" className="form-label">Password:</label>
//             <input type="password" name= "password" id="password" className="form-control" />
//           </div>
//           <button className="btn btn-submit" type="submit">Connexion</button>
//           <div className="inscription">
//             <p className="creat-account"><a href="#">Besoin d'aide pour créer un compte ?</a></p>
//             <p className="passwd-reset"><a href="#">Mot de passe oublié</a></p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Structure;

const cards = [
  { title: "HTML", description: "LANGUAGE POUR LA CREATION DES SITES WEB." },
  { title: "CSS", description: "LANGUAGE POUR LE STYLE DES PAGES WEB." },
  {
    title: "JavaScript",
    description: "LANGUAGE DE PROGRAMATION DES PAGES WEB.",
  },
];

const Structure = () => {
  return (
    <div className="wrapper">
      {/* Header Section */}
      <div className="container1-nav">
        <div className="container1">
          <h1>E-learningsite</h1>
          <nav className="nav">
            <ul className="lists">
              <li>
                <a href="#">Logo</a>
              </li>
              <li>
                <a href="#">Tutoriel</a>
              </li>
              <li>
                <a href="#">Reference</a>
              </li>
              <li>
                <Link to="/Chrono" >example</Link> 
              </li>
              <li>
                <Link to="/slider">Quizz</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container2">
        {cards.map((card, index) => (
          <div key={index} className={`card-container card${index + 1}`}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <div className="card-button">Tutoriels</div>
            <div className="card-button">Exercice</div>
            <div className="card-button">Quizz</div>
          </div>
        ))}

        {/* Form */}
        <form
          className="card-container card4 form-group"
          name="contact"
          netlify= "true"
        >
          <h4>Connexion</h4>
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              required
            />
          </div>
          <button className="btn btn-submit" type="submit">
            Connexion
          </button>
          <div className="inscription">
            <p>
              <a href="#">Besoin d'aide pour cr\u00e9er un compte ?</a>
            </p>
            <p>
              <a href="#">Mot de passe oubli\u00e9</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Structure;
