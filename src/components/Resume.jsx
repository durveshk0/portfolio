import { FaDownload, FaFilePdf, FaGithub } from 'react-icons/fa'
import './Resume.css'

const Resume = () => {
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

  const resumeData = {
    personalInfo: {
      name: 'Durvesh Kanade',
      title: 'AI/ML Engineer & Data Science Enthusiast',
      email: 'durveshkanade18@gmail.com',
      phone: '+91 9372380819',
      location: 'Thane west maharashtra',
      linkedin: 'https://linkedin.com/in/durvesh-kanade-bb288b328',
      github: 'https://github.com/durveshk0'
    },
    summary: 'Passionate engineering student with strong foundation in Artificial Intelligence, Machine Learning, and Data Science. Seeking opportunities to apply technical skills in developing innovative AI/ML solutions and contributing to data-driven decision making.'
  }

  const handleDownload = () => {
    // Resume PDF is available in the public folder
    const resumePath = '/resume.pdf'
    const link = document.createElement('a')
    link.href = resumePath
    link.download = 'Durvesh-Kanade-Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="resume" className="resume">
      <h2 className="section-title">Resume</h2>
      <p className="section-subtitle">
        Download my resume or view the details below
      </p>

      <div className="resume-download">
        <button className="btn btn-primary" onClick={handleDownload}>
          <FaDownload /> Download Resume PDF
        </button>
        <p className="resume-note">
          <FaFilePdf /> Resume PDF is ready for download
        </p>
      </div>

      <div className="resume-content">
        {/* Personal Information - Minimal */}
        <div className="resume-section">
          <h3 className="resume-section-title">Contact Information</h3>
          <div className="resume-info-grid">
            <div><strong>Name:</strong> {resumeData.personalInfo.name}</div>
            <div><strong>Title:</strong> {resumeData.personalInfo.title}</div>
            <div><strong>Email:</strong> <a href={`mailto:${resumeData.personalInfo.email}`}>{resumeData.personalInfo.email}</a></div>
            <div><strong>Phone:</strong> {resumeData.personalInfo.phone}</div>
            <div><strong>Location:</strong> {resumeData.personalInfo.location}</div>
            <div><strong>LinkedIn:</strong> <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer">View Profile</a></div>
            <div><strong>GitHub:</strong> <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer">View Profile</a></div>
          </div>
        </div>

        {/* Professional Summary - Brief */}
        <div className="resume-section">
          <h3 className="resume-section-title">Professional Summary</h3>
          <p className="resume-text">{resumeData.summary}</p>
        </div>

        {/* Projects - Brief Reference */}
        <div className="resume-section">
          <h3 className="resume-section-title">Key Projects</h3>
          <p className="resume-text" style={{ marginBottom: '1.5rem' }}>
            For detailed project information, please visit the <a href="#projects" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>Projects section</a> above.
          </p>
          <div className="projects-brief-list">
            {projects.map((project) => (
              <div key={project.id} className="project-brief-item">
                <h4>{project.title}</h4>
                <p>{project.summary}</p>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-brief-link"
                >
                  <FaGithub /> View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume

