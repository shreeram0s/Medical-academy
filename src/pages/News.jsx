export default function News() {
  const newsItems = [
    {
      id: 1,
      image: "https://erebuniacademy.am/media/erebuni_academy_site/news/472025179_1170162821776959_4433235063783021683_n.jpg",
      date: "27.02.2026",
      title: "Memorandum of Cooperation",
      content: `Within the framework of an event dedicated to palliative care, the Director and the Senior Nurse of the "Khnami" Center for Palliative Care and Treatment visited EMAF.

A memorandum of cooperation was signed between the Chairman of the Board of Trustees of EMAF, Doctor of Medical Sciences, Professor A. Kushkyan, and the Director of the Center, D. Beglaryan.

Certificates were awarded to our students who actively carried out volunteer work at the Center.`,
      category: "Partnership"
    },
    {
      id: 2,
      image: "https://erebuniacademy.am/media/erebuni_academy_site/news/459030318_1076727611120481_7097608574376801256_n.jpg",
      date: "13.02.2026",
      title: "Visit of EMAF Delegation to Georgia",
      content: `The EMAF delegation paid a working visit to Grigol Robakidze University (Georgia) to strengthen international cooperation and exchange best practices in medical education.

The primary objectives of the visit included studying benchmarking processes, reviewing the organization and administration of the OSCE (Objective Structured Clinical Examination), exploring the technical equipment and spatial organization of simulation rooms, and conducting a comparative analysis of curriculum structures and learning outcomes.

During the visit, the delegation participated in an official meeting and an informational tour of the university's educational and clinical facilities. Modern teaching models, multi-component assessment systems, internal quality assurance mechanisms, and academic governance practices were presented.

As a result of the discussions, the parties confirmed their mutual interest in long-term cooperation and signed a Memorandum of Understanding.`,
      category: "International"
    },
    {
      id: 3,
      image: "https://erebuniacademy.am/media/erebuni_academy_site/news/458359694_1072841624842413_3541815751184857570_n.jpg",
      date: "21.01.2026",
      title: "Final Examination",
      content: `Final examination for foreign students in the field of 'General Medicine' higher education, including assessment of OSCE methods.

The Objective Structured Clinical Examination (OSCE) is a comprehensive evaluation method that tests students' clinical skills and competencies through practical stations simulating real medical scenarios.

Our students demonstrated their knowledge and practical abilities, marking an important milestone in their medical education journey.`,
      category: "Academic"
    }
  ]

  return (
    <div className="news">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            News & Events
          </h1>
          <p className="text-2xl mb-8">
            Stay Updated with EMAF Activities
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {newsItems.map((news) => (
              <NewsArticle key={news.id} news={news} />
            ))}
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">
            Current Announcements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnnouncementCard
              image="https://erebuniacademy.am/media/erebuni_academy_site/articles/472025179_1170162821776959_4433235063783021683_n.jpg"
              date="16.09.2024"
              title="'Nursing' program / Online education"
              excerpt="Erebuni Medical Academy Foundation announces the admission of foreign applicants to the 'Nursing' program, through Online education."
              details="Admission is based on a high school educational background, with the duration of the study for 2 years. Applicants can submit their paperwork via emaf.am"
            />
            <AnnouncementCard
              image="https://erebuniacademy.am/media/erebuni_academy_site/articles/459030318_1076727611120481_7097608574376801256_n.jpg"
              date="16.09.2024"
              title="Preparatory courses 2024/2025"
              excerpt="The EMAF Preparatory Courses Department continues to accept applicants for the 2023/2024 school year."
              details="You can combine studies at school with Preparatory Group courses."
            />
            <AnnouncementCard
              image="https://erebuniacademy.am/media/erebuni_academy_site/articles/458359694_1072841624842413_3541815751184857570_n.jpg"
              date="16.09.2024"
              title='"Pharmacy" - Part-time learning'
              excerpt="Erebuni Medical Academy announces admission for the 2023/2024 academic year for the part-time degree of 'Pharmacy' specialty!"
              details="Perfect opportunity for working professionals to advance their education."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function NewsArticle({ news }) {
  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        <div className="lg:col-span-1">
          <img 
            src={news.image} 
            alt={news.title} 
            className="w-full h-full object-cover min-h-[300px]"
          />
        </div>
        <div className="lg:col-span-2 p-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
              {news.category}
            </span>
            <span className="text-gray-500 text-sm">{news.date}</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            {news.title}
          </h2>
          <div className="prose prose-lg max-w-none">
            {news.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

function AnnouncementCard({ image, date, title, excerpt, details }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <p className="text-sm text-primary mb-2">{date}</p>
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <details className="group">
          <summary className="cursor-pointer text-primary font-semibold hover:text-secondary transition-colors flex items-center gap-2">
            Read More
            <svg className="w-4 h-4 transform group-open:rotate-90 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </summary>
          <p className="mt-3 text-gray-600">{details}</p>
        </details>
      </div>
    </div>
  )
}
