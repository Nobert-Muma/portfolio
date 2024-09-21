import {NavLink} from "react-router-dom";
import "./NavBar.css";
function NavBar(){
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-lg-none">
                <div className="container">
                <NavLink to={"/"} className="navbar-brand">Nobert Muma</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" arial-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to={"/"} className={({isActive}) => isActive? "nav-item nav-link active" : "nav-item nav-link"}>Home</NavLink>
                        <NavLink to={"/about"} className={({isActive}) => isActive? "nav-item nav-link active" : "nav-item nav-link"}>About</NavLink>
                        <NavLink to={"/contact"} className={({isActive}) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Contact</NavLink>
                    </div>
                </div>
                </div>
            </nav>
            <nav id="nav-bar" className="d-none d-lg-flex">
                <NavLink to={"/"} className={"nav-item"}>Nobert Muma</NavLink>
                <NavLink to={"/about"} className={"nav-item"}>About</NavLink>
                <NavLink to={"/contact"} className={"nav-item"}>Contact</NavLink>
            </nav>
        </>
    );
}
export default NavBar;