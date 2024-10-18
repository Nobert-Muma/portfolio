import "./AboutMe.css";
function AboutMe(){
    return (
     <div id="about-me-page">
        <p className="about-me-para-text">
            Fueled by a fascination with technology and its potential to improve lives, 
            I'm constantly diving into new programming languages and frameworks. 
            I'm a quick learner, 
            eager to not only grasp the technical aspects but also understand the impact software can have on the user experience.
        </p>
        <p className="about-me-para-text">
            I believe in the power of collaboration. 
            I'm excited to join a team environment where I can learn from experienced developers and contribute my fresh perspective. 
        </p>
        <p className="about-me-para-text">
            I understand that software development is more than just writing code. 
            I'm a critical thinker who enjoys tackling complex challenges and finding creative solutions. 
            I'm also a strong communicator, eager to bridge the gap between technical concepts and user needs.
        </p>
        <p className="about-me-para-text">
            I'm a highly motivated individual with a relentless drive to learn and grow. 
            I'm eager to find a role where I can contribute my skills and become a valuable asset to a team. 
            I believe my passion for software development, combined with my willingness to learn, 
            makes me a perfect candidate for an entry-level position where I can make a real impact.
        </p>
        <div id="about-me-image">
            <figure>
                <img src="https://images.unsplash.com/photo-1564863757083-ada48bf46a8c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Nobert Muma, a software developer" aria-label="Nobert Muma at work" className="scaled"/>
                <figcaption>They say you have to work hard to make your dreams come true. They didn't mention the late nights!</figcaption>
            </figure>
        </div>
        <div id="education-background">
            <h4>
                Education
            </h4>
            <p className="title">
                Bachelor's degree
            </p>
            <p className="entity">
                Bachelor of Science in Computer Science
            </p>
            <p className="para-years">
                2022-2026
            </p>
            <p className="title high-school-paragraph">
                High School
            </p>
            <p className="entity">
                Maranda High School
            </p>
            <p className="para-years">
                2018-2021
            </p>
        </div>
        <div id="connect">
            <h4>Contact</h4>
            <p>Feel free to reach out for projects, collaborations or just to say hello! Currently seeking new opportunities.</p>
            <div className="icons">
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
export default AboutMe;