export default function About() {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About EMAF
          </h1>
          <p className="text-2xl mb-8">
            "Health is Wealth"
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Erebuni Medical Academy Foundation
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Erebuni Medical Academy Foundation was established in 2019 according to the License N 0144 of the Ministry of Education and Science (MoESCS) of RA, issued on 08.07.2019 for middle educational programs: nursing, nursing administration, midwifery, dental technician, pharmacy and medical cosmetology.
                </p>
                <p>
                  In 2021, according to the license N 0082 of the Ministry of Education and Science (MoESCS) of RA, issued on 13.07.2021, was established a higher educational program of General Medicine with the qualification of Medical Doctor.
                </p>
                <p className="font-semibold text-primary">
                  The main mission is to prepare professional and educated specialists, possessing the necessary skills, who will contribute their knowledge and experience to the improving health care of our society locally and globally.
                </p>
                <p>
                  The graduates should be able to meet the requirements arising from new scientific findings and the needs of a constantly changing society – a patient-oriented system of values at the highest level. Our aim is to teach modern medicine that does justice to the complexity of human health and can offer each patient the best possible care in their individual state of health.
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white shadow-2xl">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏥</div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start">
                      <span className="mr-3">✓</span>
                      <span>Professional and educated specialists</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">✓</span>
                      <span>Modern healthcare contribution</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">✓</span>
                      <span>Patient-oriented values</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">✓</span>
                      <span>Individual patient care excellence</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TimelineCard
              year="2019"
              title="Foundation Established"
              description="License N 0144 issued for middle educational programs including nursing, midwifery, pharmacy, and more."
              icon="📜"
            />
            <TimelineCard
              year="2021"
              title="Higher Education Program"
              description="License N 0082 for General Medicine program with Medical Doctor qualification."
              icon="🎓"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon="🎯"
              title="Excellence"
              description="Commitment to the highest standards in medical education and patient care"
            />
            <ValueCard
              icon="🤝"
              title="Patient-Centered"
              description="Focus on individual patient needs and personalized healthcare approaches"
            />
            <ValueCard
              icon="🌟"
              title="Innovation"
              description="Embracing modern technologies and scientific advancements in medicine"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function TimelineCard({ year, title, description, icon }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
      <div className="flex items-start mb-4">
        <div className="text-4xl mr-4">{icon}</div>
        <div>
          <div className="text-3xl font-bold text-primary mb-1">{year}</div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function ValueCard({ icon, title, description }) {
  return (
    <div className="text-center p-6">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
