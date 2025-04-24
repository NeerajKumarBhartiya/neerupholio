const Experience = () => {
  const experiences = [
    {
      title: "Ranked in the top 5% in the NPTEL Machine Learning Course.",
      company: "",
      period: "Jul 2024 - Oct 2024",
      description:
        "Achieved top 5% ranking in the NPTEL Machine Learning Course, demonstrating strong understanding of core ML concepts, algorithms, and practical applications through rigorous assessments and hands-on project implementation.",
      technologies: [],
    },
    {
      title: "	eYantra Robotics Hackathon",
      company: "",
      period: "Jul 2024 - Dec 2024",
      description:
        "Qualified Stage 1 of eYantra Robotics Hackathon with national rank 82 out of 1000 teams, showcasing robotics proficiency, innovative design skills, and effective problem-solving abilities.",
      technologies: [],
    },
  ]

  return (
    <section id="experience" className="py-16 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Achievements</h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 relative pl-8 border-l-2 border-purple-300 dark:border-purple-700">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-600 dark:bg-purple-500 animate-pulse"></div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400">{exp.title}</h3>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
