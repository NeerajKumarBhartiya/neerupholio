"use client"

import { useState, useEffect, useContext } from "react"
import ThemeToggle from "./ThemeToggle"
import { ThemeContext } from "../context/ThemeContext"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme } = useContext(ThemeContext)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      })
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`${
        scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-white dark:bg-gray-900"
      } sticky top-0 z-50 transition-all duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-purple-700 dark:text-purple-400 animate-pulse">ML Portfolio</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection("about")}
              className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-300"
            >
              Skills
            </button>
            
            <button
              onClick={() => scrollToSection("projects")}
              className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-300"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-300"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-300"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("certifications")}
              className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-300"
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-300"
            >
              Contact
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg transition-all duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-300"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-300"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-300"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-300"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("certifications")}
              className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-300"
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-300"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
