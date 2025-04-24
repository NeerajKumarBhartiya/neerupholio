const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      specialization: "Machine Learning and Artificial Intelligence",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      period: "2022 - Present",
      description:
        "Focusing on advanced machine learning techniques, deep learning, and AI applications. Maintaining a 7.95 CGPA and participating in research projects related to computer vision.",
    },
    {
      degree: "12th with Science",
      specialization: "Physics, Chemistry & Mathematics",
      institution: "R. S. S. Science College",
      location: "Sitamarhi, Bihar",
      period: "2019 - 2020",
      description:
        "Completed 12th grade with Science stream (Physics, Chemistry, Mathematics) with 75.60%, developing strong analytical, mathematical, and problem-solving skills for technical and scientific domains.",
    },
  ]

  return (
    <section id="education" className="py-16 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Education</h2>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400">{edu.degree}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic mb-2">{edu.specialization}</p>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <p className="text-gray-700 dark:text-gray-300 font-medium">{edu.institution}</p>
                <p className="text-gray-600 dark:text-gray-400">{edu.location}</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
