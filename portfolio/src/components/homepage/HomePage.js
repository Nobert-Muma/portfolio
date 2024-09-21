import { Link } from "react-router-dom";
import "./HomePage.css";
function App(){
  return (
    <>
    <div id="homepage">
        <h1 id="homepage-header">Backend Developer</h1>
      <div id="hero-section">
        <p className="homepage-para">
          I'm Nobert Muma, and I'm on a passionate journey to become a skilled software developer. While I may not have years of experience yet,
          I bring a thirst for knowledge, a problem-solving mindset and a dedication to crafting user-centric solutions through code.
        </p>
        <Link to="/about" id="homepage-link">More about me</Link>
      </div>
    </div>
    </>
  );
}
export default App;