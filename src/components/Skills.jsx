const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "R", "JavaScript", "Java", "C++"],
    },
    {
      category: "Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost"],
    },
    {
      category: "Data Processing",
      skills: ["Pandas", "NumPy", "SQL", "Spark", "Hadoop"],
    },
    {
      category: "Visualization",
      skills: ["Matplotlib", "Seaborn", "Plotly", "Tableau", "PowerBI"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "Google Cloud", "Jupyter"],
    },
  ]

  return (
    <section id="skills" className="py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-400">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
