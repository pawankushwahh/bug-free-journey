import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our School</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 mb-12">
            Prof. Santosh Mittal Higher Secondary School is a CBSE-affiliated, co-educational institution 
            committed to providing quality education and fostering all-round development of students.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="relative group overflow-hidden rounded-2xl shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="School Building" 
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Legacy</h3>
                <p className="text-gray-200">
                  Founded with a vision to provide quality education, our school has grown into a 
                  premier institution known for academic excellence and holistic development.
                </p>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Students Learning" 
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                <p className="text-gray-200">
                  We believe in nurturing young minds through innovative teaching methods and 
                  a balanced curriculum that emphasizes both academic and personal growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision, Mission, Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-primary opacity-90 group-hover:opacity-95 transition-opacity"></div>
            <div className="relative p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </span>
                Our Vision
              </h3>
              <p className="text-white/90 leading-relaxed">
                To nurture young minds into responsible global citizens through holistic education and 
                innovative learning practices that inspire excellence and creativity.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-secondary opacity-90 group-hover:opacity-95 transition-opacity"></div>
            <div className="relative p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                  </svg>
                </span>
                Our Mission
              </h3>
              <p className="text-white/90 leading-relaxed">
                To provide quality education that empowers students with knowledge, skills, and values 
                necessary for lifelong success while fostering a spirit of innovation and leadership.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-accent opacity-90 group-hover:opacity-95 transition-opacity"></div>
            <div className="relative p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </span>
                Core Values
              </h3>
              <ul className="text-white/90 space-y-3">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mr-2"></span>
                  Excellence in Education
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mr-2"></span>
                  Character Development
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mr-2"></span>
                  Innovation & Creativity
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mr-2"></span>
                  Community Service
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">1000+</div>
            <div className="text-gray-600">Students</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">50+</div>
            <div className="text-gray-600">Expert Faculty</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">25+</div>
            <div className="text-gray-600">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">100%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;