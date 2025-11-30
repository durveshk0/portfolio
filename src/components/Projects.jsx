import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  // Projects from resume - Indian Sign Language, Multi Factor Authentication, and Agri Genius
  const projects = [
    {
      id: 1,
      title: 'Indian Sign Language Recognition',
      summary: 'Deep learning model to recognize and interpret Indian Sign Language gestures in real-time.',
      description: 'Developed a computer vision system using convolutional neural networks to recognize Indian Sign Language gestures from images and video streams. The model was trained on a comprehensive dataset of hand gestures and achieved high accuracy in real-time recognition, making communication more accessible for the hearing-impaired community.',
      techStack: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Matplotlib'],
      githubLink: 'https://github.com/durveshk0/Indian-Sign-Language-Recognition',
      problemSolved: 'Bridges the communication gap for individuals using Indian Sign Language by providing an automated translation system that can be integrated into various applications.',
      learnings: 'Gained expertise in image processing, CNN architectures, data augmentation techniques, and real-time video processing. Learned about the challenges of gesture recognition and how to optimize models for deployment.',
      impact: 'Enables seamless communication for the deaf and hard-of-hearing community through technology.'
    },
    {
      id: 2,
      title: 'Multi Factor Authentication System',
      summary: 'Secure authentication system implementing multiple verification layers for enhanced security.',
      description: 'Developed a comprehensive multi-factor authentication (MFA) system that combines multiple authentication methods including password, OTP (One-Time Password), email verification, and biometric authentication. The system provides robust security measures to protect user accounts and sensitive data from unauthorized access.',
      techStack: ['Python', 'Flask', 'SQLAlchemy', 'JWT', 'Twilio API', 'SMTP', 'PostgreSQL'],
      githubLink: 'https://github.com/durveshk0',
      problemSolved: 'Addresses security vulnerabilities in single-factor authentication by implementing multiple layers of verification, significantly reducing the risk of unauthorized access and account breaches.',
      learnings: 'Mastered authentication protocols, security best practices, API integration, and secure token management. Learned about encryption, session management, and implementing secure authentication flows.',
      impact: 'Provides enterprise-grade security for applications, protecting user data and preventing unauthorized access.'
    },
    {
      id: 3,
      title: 'Agri Genius',
      summary: 'AI-powered agricultural intelligence system for crop prediction and farming optimization.',
      description: 'Built an intelligent agricultural system that leverages machine learning and data analytics to help farmers make data-driven decisions. The system includes features for crop yield prediction, disease detection, weather-based recommendations, and optimal farming practices. Utilizes various ML models to analyze soil data, weather patterns, and historical crop data.',
      techStack: ['Python', 'Machine Learning', 'Data Analytics', 'Flask', 'Pandas', 'NumPy', 'Scikit-learn'],
      githubLink: 'https://github.com/durveshk0',
      problemSolved: 'Helps farmers optimize crop yields, reduce losses, and make informed decisions about planting, irrigation, and harvesting by providing AI-driven insights and predictions.',
      learnings: 'Gained expertise in agricultural data analysis, predictive modeling, and building practical ML solutions for real-world problems. Learned about time series analysis, feature engineering for agricultural data, and model deployment.',
      impact: 'Empowers farmers with data-driven insights to improve crop productivity, reduce costs, and make sustainable farming decisions.'
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">
        Showcasing my best work in AI/ML, Data Science, and Data Analytics
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-links">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="project-link"
                >
                  <FaGithub />
                </a>
                {project.demoLink && (
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                    className="project-link"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>

            <p className="project-summary">{project.summary}</p>

            <div className="project-details">
              <div className="project-section">
                <h4>Description</h4>
                <p>{project.description}</p>
              </div>

              <div className="project-section">
                <h4>Problem Solved</h4>
                <p>{project.problemSolved}</p>
              </div>

              <div className="project-section">
                <h4>What I Learned</h4>
                <p>{project.learnings}</p>
              </div>

              <div className="project-section">
                <h4>Impact</h4>
                <p>{project.impact}</p>
              </div>

              <div className="project-section">
                <h4>Tech Stack</h4>
                <div className="tech-stack">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

