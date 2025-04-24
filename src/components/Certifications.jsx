const Certifications = () => {
  const certifications = [
    {
      title: "Technical English for Engineers",
      issuer: "NPTEL",
      date: "October 2024",
      description:
        "Learned academic writing, grammar, note-making, report and resume writing, formal communication, listening comprehension, presentations, vocabulary, and reading skills.",
      credential: "https://onlinecourses.nptel.ac.in/noc24_hs175/preview",
    },
    {
      title: "Introduction to Internet of Things",
      issuer: "NPTEL",
      date: "October 2024",
      description:
        "Learned IoT fundamentals, networking, communication protocols, Arduino, Raspberry Pi, Python, SDN, cloud, fog, sensor networks, smart systems, and real-world IoT applications across domains.",
      credential: "https://onlinecourses.nptel.ac.in/noc24_cs35/preview",
    },
    {
      title: "Introduction to Machine Learning",
      issuer: "NPTEL",
      date: "October 2024",
      description:
        "Successfully completed Introduction to Machine Learning by Prof. Balaraman Ravindran (IIT Madras) via SWAYAM. Gained strong foundation in ML theory and applications. Achieved top 5% rank among all participants.",
      credential: "https://onlinecourses.nptel.ac.in/noc24_cs51/preview",
    },
    {
      title: "Probability and Statistics",
      issuer: "NPTEL",
      date: "April 2024",
      description:
        "Completed Probability and Statistics by Prof. Somesh Kumar (IIT Kharagpur). Gained strong foundation in probability theory, statistical inference, hypothesis testing, and distribution theory with real-world problem-solving applications.",
      credential: "https://onlinecourses.nptel.ac.in/noc24_ma39/preview",
    },
  ]

  return (
    <section id="certifications" className="py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-1 text-purple-700 dark:text-purple-400">{cert.title}</h3>
              <div className="flex justify-between items-center mb-3">
                <p className="text-gray-700 dark:text-gray-300 font-medium">{cert.issuer}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{cert.description}</p>
              <a
                href={cert.credential}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 font-medium transition-colors duration-300"
              >
                View Credential →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
