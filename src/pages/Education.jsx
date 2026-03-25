export default function Education() {
  return (
    <div className="education">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Educational Programs
          </h1>
          <p className="text-2xl mb-8">
            Comprehensive Medical Education for Your Future
          </p>
        </div>
      </section>

      {/* Higher Medical Education */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">
            Higher Medical Education
          </h2>
          
          {/* General Medicine Program */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop" 
                alt="General Medicine" 
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">🩺</div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">General Medicine</h3>
                    <p className="text-lg text-primary font-semibold">MBBS, Medical Doctor</p>
                  </div>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4">
                    The Department of GENERAL MEDICINE was founded in 2021 according to the License N 0082 of the Ministry of Education and Science (MoESCS) of RA, issued on 13.07.2021. The duration of this program is 6 years, qualification of MD (Medical Doctor), with a diploma graduation document.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Duration: 6 years (based on secondary education)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Qualification: Medical Doctor (MD)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Advanced labs, simulation centers and modern classrooms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Practical training at the best clinical facilities of Armenia</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Nursing Program */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1584515933487-9bdb75f5e7cc?w=800&h=400&fit=crop" 
                alt="Nursing" 
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">💉</div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">Nursing</h3>
                    <p className="text-lg text-primary font-semibold">Bachelor of Nursing</p>
                  </div>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4">
                    The Department of NURSING was founded in 2021 according to the License N 0082 of the Ministry of Education and Science (MoESCS) of RA, issued on 13.07.2021. The duration of this program is 4 years, qualification of Bachelor of Nursing, with a diploma graduation document.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Duration: 4 years (based on secondary education)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Qualification: Bachelor of Nursing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Modern equipment and didactic materials</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Qualified lecturers and professors from Armenia and abroad</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Professional Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">
            Middle Professional Medical Educational Programs
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=400&fit=crop" 
              alt="Middle Professional Programs" 
              className="w-full h-64 object-cover"
            />
          </div>

          <p className="text-lg text-gray-700 mb-8 max-w-4xl">
            These programs which are established in 2019, License N 0144 of the Ministry of Education and Science (MoESCS) of RA, issued on 08.07.2019, prepare highly qualified specialists. Middle Professional Education can be based on basic education OR secondary education; subsequently the duration will vary depending on the previous studies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MiddleProgramCard
              title="Nursing"
              icon="💉"
              description="Professional nursing education with modern healthcare practices"
              durationBasic="3 years (basic education)"
              durationSecondary="4 years (secondary education)"
              qualification="Nurse"
            />
            <MiddleProgramCard
              title="Midwifery"
              icon="🤱"
              description="Specialized care for maternal and newborn health"
              durationBasic="3 years (basic education)"
              durationSecondary="4 years (secondary education)"
              qualification="Midwife"
            />
            <MiddleProgramCard
              title="Pharmacy"
              icon="💊"
              description="Pharmaceutical sciences and medication management"
              durationBasic="2 years (basic education)"
              durationSecondary="3 years (secondary education)"
              qualification="Pharmacist"
            />
            <MiddleProgramCard
              title="Dental Technician"
              icon="🦷"
              description="Technical expertise in dental prosthetics and appliances"
              durationBasic="2 years (basic education)"
              durationSecondary="3 years (secondary education)"
              qualification="Dental Technician"
            />
            <MiddleProgramCard
              title="Medical Cosmetology"
              icon="✨"
              description="Aesthetic and cosmetic medical procedures"
              durationBasic="2 years (basic education)"
              durationSecondary="3 years (secondary education)"
              qualification="Nurse Cosmetologist"
            />
          </div>
        </div>
      </section>

      {/* Clinical Practice */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">
            Clinical Practice
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-gray-800">
                  Hands-On Experience
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Our students get practical training at the best clinical facilities of Armenia. The academy has advanced labs, simulation centers and modern classrooms, equipped with necessary technologies, mannequins, and didactic materials.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">Hospital internships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">Clinical skills development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">Real patient interaction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">Professional mentorship</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-9xl">🏥</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">
            Learning Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ResourceCard
              icon="📚"
              title="Library"
              description="We provide with the necessary medical professional and various types of literature, medical professional journals, including online literature."
            />
            <ResourceCard
              icon="💻"
              title="Learning Resource Center"
              description="The academy has a learning resource center with modern technologies and digital resources."
            />
            <ResourceCard
              icon="👨‍🏫"
              title="International Faculty"
              description="Our students study with qualified lecturers, professors from Armenia and abroad and visitor lecturers from different countries."
            />
          </div>
        </div>
      </section>

      {/* International Students */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🌍</div>
          <h2 className="text-4xl font-bold mb-6">
            International Students Welcome
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We welcome students from around the world. Transfers and recovery from other universities are not possible ONLY for the 1st and 6th years of study.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Apply Online
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

function MiddleProgramCard({ title, icon, description, durationBasic, durationSecondary, qualification }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-sm text-primary font-semibold mb-2">Qualification: {qualification}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="space-y-2 text-sm text-gray-700">
        <div className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <span>{durationBasic}</span>
        </div>
        <div className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <span>{durationSecondary}</span>
        </div>
      </div>
    </div>
  )
}

function ResourceCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
