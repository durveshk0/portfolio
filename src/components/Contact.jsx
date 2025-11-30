import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">
        I'm always open to discussing new opportunities, interesting projects, or just having a chat about AI/ML and Data Science!
      </p>

      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <h3>Email</h3>
            <a href="mailto:durveshkanade18@gmail.com">durveshkanade18@gmail.com</a>
            <p>Drop me a line anytime!</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaLinkedin />
            </div>
            <h3>LinkedIn</h3>
            <a href="https://linkedin.com/in/durvesh-kanade-bb288b328" target="_blank" rel="noopener noreferrer">
              Connect with me
            </a>
            <p>Let's network and grow together</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaGithub />
            </div>
            <h3>GitHub</h3>
            <a href="https://github.com/durveshk0" target="_blank" rel="noopener noreferrer">
              View my code
            </a>
            <p>Check out my projects and contributions</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <h3>Location</h3>
            <p>Thane west maharashtra</p>
            <p>Open to remote opportunities</p>
          </div>
        </div>

        <div className="contact-cta">
          <div className="cta-content">
            <h3>Let's Work Together!</h3>
            <p>
              I'm actively seeking opportunities in AI/ML, Data Science, and Data Analytics. 
              Whether you're a recruiter looking for fresh talent, a startup building innovative 
              solutions, or a company working on cutting-edge AI projects, I'd love to hear from you.
            </p>
            <div className="cta-buttons">
              <a href="mailto:durveshkanade18@gmail.com" className="btn btn-primary">
                Send Email
              </a>
              <a 
                href="#resume" 
                className="btn btn-secondary"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-footer">
        <p>© {new Date().getFullYear()} Durvesh Kanade. Built with React and passion for AI/ML.</p>
      </div>
    </section>
  )
}

export default Contact

