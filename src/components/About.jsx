const About = () => {
  return (
    <section id="about" className="py-16 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105">
            <img src="/neeraj.jpg?height=256&width=256" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-lg text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-400">Neeraj Kumar</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate Machine Learning Engineer with a strong foundation in data science and artificial
              intelligence. Currently pursuing my Bachelor's degree in Computer Science with a specialization in Machine
              Learning. I enjoy solving complex problems and building intelligent systems that can learn from data and
              make predictions. My research interests include deep learning, computer vision, and natural language
              processing.
            </p>
            <a
              href="/neeraj_bhartiya.pdf"
              download
              className="inline-block bg-purple-700 dark:bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-800 dark:hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
