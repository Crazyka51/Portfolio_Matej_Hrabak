"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"
import WebDevNavbar from "@/app/components/webdev-navbar"
import WebDevFooter from "@/app/components/webdev-footer"
import PageTransition from "@/app/components/page-transition"
import LoadingSpinner from "@/app/components/loading-spinner"
import { useToast } from "@/app/context/toast-context"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const { showToast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      showToast("Zpráva byla úspěšně odeslána! Děkujeme za váš zájem.", "success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#010714] text-white">
        <WebDevNavbar />

        <main className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kontaktujte mě</h1>
            <p className="text-xl text-gray-300">
              Máte zájem o spolupráci nebo máte dotaz? Neváhejte mě kontaktovat pomocí formuláře nebo přímo přes uvedené
              kontaktní údaje.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Napište mi</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Jméno a příjmení
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Předmět
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Zpráva
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <LoadingSpinner size={20} color="text-white" thickness={2} />
                      <span className="ml-2">Odesílání...</span>
                    </div>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Odeslat zprávu
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6">Kontaktní informace</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Mail className="text-blue-400 mr-4 h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">E-mail</h3>
                    <a
                      href="mailto:matej.hrabak@example.com"
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      matej.hrabak@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-blue-400 mr-4 h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Telefon</h3>
                    <a href="tel:+420777888999" className="text-gray-300 hover:text-blue-400 transition-colors">
                      +420 777 888 999
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="text-blue-400 mr-4 h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Adresa</h3>
                    <p className="text-gray-300">Praha, Česká republika</p>
                  </div>
                </div>
              </div>

              <h3 className="font-medium mb-4">Najdete mě také na:</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/crazyka51"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors flex items-center"
                >
                  <Github className="mr-2 h-5 w-5" />
                  <span>GitHub</span>
                </a>
                </div>
                

              <div className="mt-12 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                <h3 className="font-medium mb-2">Rychlá odpověď</h3>
                <p className="text-sm text-gray-300">
                  Snažím se odpovídat na všechny zprávy do 24 hodin. Pro urgentní záležitosti prosím použijte telefon.
                </p>
              </div>
            </motion.div>
          </div>
        </main>

        <WebDevFooter />
      </div>
    </PageTransition>
  )
}
