import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">
        Passionate about leveraging AI/ML and Data Science to solve complex problems
      </p>
      
      <div className="about-content">
        <div className="about-text">
          <div className="about-section">
            <h3>Background</h3>
            <p>
              I am a dedicated engineering student with a strong foundation in Artificial Intelligence, 
              Machine Learning, and Data Science. My academic journey has equipped me with a solid 
              understanding of computational models, statistical analysis, and data-driven decision making.
            </p>
          </div>

          <div className="about-section">
            <h3>Passion & Interests</h3>
            <p>
              I am particularly fascinated by the transformative power of AI in solving real-world problems. 
              From computer vision and natural language processing to predictive analytics and deep learning, 
              I enjoy exploring how machine learning algorithms can extract meaningful insights from data 
              and create intelligent systems that make a difference.
            </p>
          </div>

          <div className="about-section">
            <h3>What I'm Looking For</h3>
            <p>
              As a fresher, I am seeking opportunities to apply my skills in AI/ML and Data Science to 
              develop impactful solutions. I'm eager to work on challenging projects, learn from experienced 
              professionals, and contribute to innovative teams that are pushing the boundaries of what's 
              possible with artificial intelligence and data analytics.
            </p>
          </div>

          <div className="about-section">
            <h3>Continuous Learning</h3>
            <p>
              I believe in continuous learning and staying updated with the latest developments in the field. 
              I actively work on personal projects, participate in online courses, and contribute to open-source 
              initiatives to enhance my skills and build a strong portfolio.
            </p>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-number">10+</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">5+</div>
            <div className="stat-label">Technologies</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Dedication</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

