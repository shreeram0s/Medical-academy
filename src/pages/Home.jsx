export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Erebuni Medical Academy Foundation
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-light">
            "Health is Wealth"
          </p>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Welcome to EMAF - Providing Middle Professional Medical Educational Programs and Bachelor of Medicine (MBBS), Doctor of Medicine
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Explore Programs
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose EMAF?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AdvantageCard
              icon="🌍"
              title="International Standards"
              description="Education that meets global healthcare standards"
            />
            <AdvantageCard
              icon="🔬"
              title="Equipped Laboratory"
              description="Modern facilities for hands-on learning"
            />
            <AdvantageCard
              icon="💡"
              title="Modern Technologies"
              description="State-of-the-art medical equipment and tools"
            />
            <AdvantageCard
              icon="👨‍🏫"
              title="Experienced Specialists"
              description="Learn from seasoned medical professionals"
            />
            <AdvantageCard
              icon="📚"
              title="Equipped Library"
              description="Comprehensive medical literature resources"
            />
            <AdvantageCard
              icon="📖"
              title="Didactic Materials"
              description="Quality educational materials and resources"
            />
            <AdvantageCard
              icon="🏥"
              title="Internship in Hospitals"
              description="Practical experience in leading healthcare facilities"
            />
            <AdvantageCard
              icon="🧠"
              title="Medical Mannequins"
              description="Advanced simulation models for practice"
            />
          </div>
        </div>
      </section>

      {/* Latest News Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Latest News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <NewsCard
              image="https://erebuniacademy.am/media/erebuni_academy_site/news/472025179_1170162821776959_4433235063783021683_n.jpg"
              date="27.02.2026"
              title="Memorandum of Cooperation"
              excerpt='Within the framework of an event dedicated to palliative care, the Director and the Senior Nurse of the "Khnami" Center visited EMAF...'
            />
            <NewsCard
              image="https://erebuniacademy.am/media/erebuni_academy_site/news/459030318_1076727611120481_7097608574376801256_n.jpg"
              date="13.02.2026"
              title="Visit of EMAF Delegation to Georgia"
              excerpt="The EMAF delegation paid a working visit to Grigol Robakidze University to strengthen international cooperation..."
            />
            <NewsCard
              image="https://erebuniacademy.am/media/erebuni_academy_site/news/458359694_1072841624842413_3541815751184857570_n.jpg"
              date="21.01.2026"
              title="Final Examination"
              excerpt="Final examination for foreign students in General Medicine higher education, including assessment of OSCE methods..."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Start Your Medical Journey Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join EMAF and become part of the next generation of healthcare professionals
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Learn More About Admission
          </button>
        </div>
      </section>
    </div>
  )
}

function AdvantageCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function NewsCard({ image, date, title, excerpt }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <p className="text-sm text-primary mb-2">{date}</p>
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <button className="text-primary font-semibold hover:text-secondary transition-colors">
          Read More →
        </button>
      </div>
    </div>
  )
}
