export default function Contact() {
  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-2xl mb-8">
            Get in Touch with EMAF
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+374 XX XXXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="admission">Admission Inquiry</option>
                    <option value="programs">Programs Information</option>
                    <option value="international">International Students</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <ContactInfoItem
                    icon="📍"
                    title="Address"
                    content="Yerevan, Armenia"
                  />
                  <ContactInfoItem
                    icon="📧"
                    title="Email"
                    content="info@emaf.am"
                  />
                  <ContactInfoItem
                    icon="📞"
                    title="Phone"
                    content="+374 XX XXXXXX"
                  />
                  <ContactInfoItem
                    icon="🕐"
                    title="Working Hours"
                    content="Monday - Friday: 9:00 AM - 6:00 PM"
                  />
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Location
                </h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-4">🗺️</div>
                    <p>Interactive Map</p>
                    <p className="text-sm">(Can be integrated with Google Maps)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <FAQItem
              question="How can I apply to EMAF?"
              answer="You can apply online through our website or visit our admissions office. International students can submit their applications electronically via emaf.am"
            />
            <FAQItem
              question="What programs are available for international students?"
              answer="We offer various programs including General Medicine (MBBS), Nursing (with online option), Pharmacy, Midwifery, Dental Technician, and Medical Cosmetology."
            />
            <FAQItem
              question="Are there part-time study options?"
              answer="Yes, we offer part-time learning options for certain programs such as Pharmacy, making it easier for working professionals to advance their education."
            />
            <FAQItem
              question="Do you provide accommodation for international students?"
              answer="Please contact our international student office for detailed information about accommodation options and support services."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactInfoItem({ icon, title, content }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  )
}

function FAQItem({ question, answer }) {
  return (
    <details className="group bg-gray-50 rounded-lg">
      <summary className="cursor-pointer p-6 font-semibold text-gray-800 flex justify-between items-center">
        {question}
        <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="px-6 pb-6 text-gray-600">
        {answer}
      </div>
    </details>
  )
}
