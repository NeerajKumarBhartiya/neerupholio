"use client"

import { useState, useRef } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [buttonText, setButtonText] = useState("Let's Chat!")
  const [isSent, setIsSent] = useState(false)
  const formRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setButtonText("Sending...")

    const formData = new FormData(event.target)
    formData.append("access_key", "c8a80430-895a-41d8-80ec-232e9d03044a")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setButtonText("Sent!")
      setIsSent(true)
      event.target.reset()
      setFormData({ name: "", email: "", message: "" })

      setTimeout(() => {
        setButtonText("Let's Chat!")
        setIsSent(false)
      }, 3000) // Reset after 3 seconds
    } else {
      console.log("Error", data)
      setButtonText("Let's Chat!")
    }
  }

  return (
    <div className="flex justify-center w-full px-4 py-8">
      <form onSubmit={onSubmit} ref={formRef} className="space-y-6 w-full max-w-lg">
        <div className="form-group">
          <label htmlFor="name" className="block text-lg font-medium mb-2 dark:text-gray-200">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white transition-all duration-200"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="block text-lg font-medium mb-2 dark:text-gray-200">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white transition-all duration-200"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="block text-lg font-medium mb-2 dark:text-gray-200">
            Message:
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white transition-all duration-200"
            rows="5"
          ></textarea>
        </div>

        <button
          type="submit"
          className={`w-full px-6 py-3 text-white rounded-md text-lg font-medium transition-all duration-300 ${
            isSent ? "bg-green-600 hover:bg-green-700" : "bg-purple-700 hover:bg-purple-800"
          } transform hover:scale-105 shadow-md`}
        >
          {buttonText}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
