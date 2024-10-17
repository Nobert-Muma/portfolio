import "./ContactMe.css";
function ContactMe(){
    return(
        <div id="contact-me-page">
            <h2 className="heading-2">
                Let's Build Something Amazing
            </h2>
            <p className="contact-me-para">Ready to start? Send me a message today and let's discuss your project goals.</p>
            <form id="contact-me-form">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label label">Name:</label>
                    <input type="text" className="form-control control" id="name" name="name" placeholder="Fill with your name" autoComplete="name" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label label">Email address:</label>
                    <input type="email" className="form-control control" id="email" name="email" placeholder="xyz@gmail.com" autoComplete="email" required/>
                    <div id="emailHelp" className="form-text">I'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label label">Message:</label>
                    <textarea id="message" className="form-control control" name="message" placeholder="Write your awesome message :)" required/>
                </div>
                <input type="reset" className="btn btn-outline-danger" value={"CLEAR"}/>
                <input type="submit" className="btn btn-outline-success" value={"SUBMIT YOUR MESSAGE"}/>
            </form>
            <div id="contact-me">
                <p className="contact-me-para">You can also reach me through the following options:</p>
                <div className="contact-me-icons">
                    <a href="mailto:mumanobert17@gmail.com" aria-label="Send email to Nobert Muma">
                        <i className="bi bi-envelope" style={{color:"#CFD8DC"}}></i>
                    </a>
                    <a href="https://www.linkedin.com/in/nobert-muma-46a58b312/" aria-label="Connect with Nobert Muma on LinkedIn">
                        <i className="bi bi-linkedin" style={{color:"#0077B5"}}></i>
                    </a>
                    <a href="https://github.com/Nobert-Muma" aria-label="View Nobert Muma's GitHub profile">
                        <i className="bi bi-github" style={{color:"#171515"}}></i>
                    </a>
                    <a href="tel:+254758408965(Don't call me past 9 PM EAT)" aria-label="Call Nobert Muma at +254758408965(Please call before 9 PM EAT)">
                        <i className="bi bi-telephone" style={{color:"#009688"}}></i>
                    </a>
                </div>
            </div>
        </div>
    );

}
export default ContactMe;