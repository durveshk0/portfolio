import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'R', 'Java', 'SQL', 'JavaScript', 'C++']
    },
    {
      title: 'AI/ML Tools & Frameworks',
      skills: ['TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NLTK', 'spaCy', 'XGBoost']
    },
    {
      title: 'Data Analysis & Visualization',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Tableau', 'Power BI']
    },
    {
      title: 'Web Frameworks',
      skills: ['Flask', 'Django', 'React', 'FastAPI', 'Streamlit']
    },
    {
      title: 'Cloud Platforms',
      skills: ['AWS', 'Google Cloud Platform', 'Azure', 'Heroku']
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Redis']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'Jupyter Notebooks', 'Apache Spark', 'Hadoop', 'Kubernetes']
    },
    {
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Analytical Thinking', 'Time Management', 'Adaptability']
    }
  ]

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technical Skills</h2>
      <p className="section-subtitle">
        A comprehensive toolkit for building AI/ML solutions and data-driven applications
      </p>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

