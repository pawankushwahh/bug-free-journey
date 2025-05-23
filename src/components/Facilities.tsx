import React, { useState } from 'react';
import { BookOpen, Monitor, Dumbbell, Bus, Library, FlaskRound as Flask } from 'lucide-react';

const facilities = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Modern Classrooms',
    description: 'Spacious, well-ventilated classrooms equipped with smart boards and modern teaching aids.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Smart Interactive Boards',
      'Comfortable Seating',
      'Natural Lighting',
      'Air Conditioning'
    ]
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: 'Computer Lab',
    description: 'State-of-the-art computer lab with high-speed internet connectivity.',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Modern Workstations',
      'High-Speed Internet',
      'Latest Software',
      'Coding Workshops'
    ]
  },
  {
    icon: <Flask className="w-8 h-8" />,
    title: 'Science Labs',
    description: 'Well-equipped Physics, Chemistry, and Biology labs for practical learning.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112c4e5190?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Advanced Equipment',
      'Safety Protocols',
      'Practical Sessions',
      'Research Projects'
    ]
  },
  {
    icon: <Library className="w-8 h-8" />,
    title: 'Library',
    description: 'Extensive collection of books, magazines, and digital resources.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Digital Catalogs',
      'Study Areas',
      'Research Material',
      'Online Resources'
    ]
  },
  {
    icon: <Dumbbell className="w-8 h-8" />,
    title: 'Sports Facilities',
    description: 'Multiple sports facilities including indoor and outdoor games.',
    image: 'https://images.unsplash.com/photo-1577217534079-41d6bb68ac50?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Indoor Courts',
      'Outdoor Fields',
      'Sports Equipment',
      'Professional Coaching'
    ]
  },
  {
    icon: <Bus className="w-8 h-8" />,
    title: 'Transport',
    description: 'Safe and comfortable transportation service covering major routes.',
    image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'GPS Tracking',
      'Experienced Drivers',
      'Regular Maintenance',
      'Safety Features'
    ]
  }
];

const Facilities = () => {
  const [selectedFacility, setSelectedFacility] = useState<number | null>(null);

  return (
    <section id="facilities" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Facilities</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            We provide state-of-the-art facilities to ensure the best learning environment for our students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl"
              onMouseEnter={() => setSelectedFacility(index)}
              onMouseLeave={() => setSelectedFacility(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-primary/90 text-white">
                    {facility.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{facility.title}</h3>
                </div>
                <p className="text-gray-200 mb-4">{facility.description}</p>
                
                <div className={`grid grid-cols-2 gap-2 transition-all duration-300 ${
                  selectedFacility === index ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'
                }`}>
                  {facility.features.map((feature, fIndex) => (
                    <div
                      key={fIndex}
                      className="flex items-center gap-2 text-sm text-secondary"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;