const Projects = () => {
  const projects = [
    {
      title: "Multi Class Text Classification System",
      description:
        "Developed a Multi-Class Text Classification System using Naïve Bayes, SVM, Random Forest, HMM, and Ensemble Voting Classifier, improving accuracy by 12% and achieving 97% accuracy with feature extraction.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Python", "NumPy", "scikit-learn", "Ensemble Learning"],
      github: "https://github.com/NeerajKumarBhartiya/Multi-Text-Classification/blob/main/UPDATED_CODE.ipynb",
    },
    {
      title: "Vicon Physical Action Dataset",
      description:
        "Developed an action classification system using the Vicon Physical Action Dataset, enhancing performance accuracy by 15%. Utilized Logistic Regression, Random Forest, SVM, and Decision Tree, achieving 99.99% accuracy.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Python", "PyTorch", "Seaborn", "Matplotlib"],
      github: "https://github.com/NeerajKumarBhartiya/Vicon-Action-Dataset/blob/main/ML1_PROJECT%20(1).ipynb",
    },
    {
      title: "Music Recommendation System",
      description:
        "Developed a personalized music recommendation system using cosine similarity to improve accuracy by 85%, delivering relevant song suggestions based on user preferences and behavior. Optimized models for enhanced performance.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Python", "Scikit-learn", "Cosine Similarity", "Pandas"],
      github: "https://github.com/NeerajKumarBhartiya/Music-Recommendation-System/blob/main/Music_Recommendation_System.ipynb",
    },
  ]

  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-400">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-700 dark:bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-800 dark:hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
