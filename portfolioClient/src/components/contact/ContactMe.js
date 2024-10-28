import "./ContactMe.css";
import { useState } from 'react';

function ContactMe(){
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [message, setMessage]=useState("");
    const [status, setStatus]=useState("");
    const [isSubmitting, setIsSubmitting]=useState(false);

    function handleSubmit(e){
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("");

        const newMessage={
            name:name,
            email:email,
            message:message
        }

        fetch('https://portfolioserver-hc9a.onrender.com/messages', {
            method:"POST",
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify(newMessage)
        })
        .then(response=>{
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(message=>{
            setStatus("Success");

            setName("");
            setEmail("");
            setMessage("");
            // show success message to the user
            alert("Message sent successfully! I'll get back to you soon.");
        })
        .catch(error=>{
            console.error("Error adding message:", error);
            setStatus("error");
        })
        .finally(()=>{
            setIsSubmitting(false);
        });
    }
    return(
        <div id="contact-me-page">
            <h2 className="heading-2">
                Let's Build Something Amazing
            </h2>
            <p className="contact-me-para">Ready to start? Send me a message today and let's discuss your project goals.</p>

            {status==="success"&&(
                <div className="alert alert-success" role="alert">
                    Message sent successfully!
                </div>
            )}

            {status==="error"&&(
                <div className="alert alert-danger" role="alert">
                    Failed to send message. Please try again.
                </div>
            )}
            <form id="contact-me-form" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label label">Name:</label>
                    <input type="text" className="form-control control" id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Fill with your name" autoComplete="name" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label label">Email address:</label>
                    <input type="email" className="form-control control" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="xyz@gmail.com" autoComplete="email" required/>
                    <div id="emailHelp" className="form-text">I'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label label">Message:</label>
                    <textarea id="message" className="form-control control" name="message" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Write your awesome message :)" required/>
                </div>
                <input type="reset" className="btn btn-outline-danger" value={"CLEAR"}/>
                <input type="submit" className="btn btn-outline-success" value={isSubmitting ? "SENDING..." : "SUBMIT YOUR MESSAGE"} disabled={isSubmitting}/>
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
                    <a href="#" aria-label="View Nobert Muma's GitHub profile">
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