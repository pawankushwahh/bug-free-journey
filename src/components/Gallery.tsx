import React, { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  // Campus & Infrastructure
  { category: 'campus', url: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'School Building Front View' },
  { category: 'campus', url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Campus Aerial View' },
  { category: 'campus', url: 'https://images.unsplash.com/photo-1583373834259-46cc92173cb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'School Entrance' },
  { category: 'campus', url: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Main Building' },
  
  // Classrooms
  { category: 'classrooms', url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Modern Classroom' },
  { category: 'classrooms', url: 'https://images.unsplash.com/photo-1595126731003-54be99097f38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Smart Classroom' },
  { category: 'classrooms', url: 'https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Primary Classroom' },
  
  // Labs
  { category: 'labs', url: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Computer Lab' },
  { category: 'labs', url: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Physics Lab' },
  { category: 'labs', url: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Chemistry Lab' },
  { category: 'labs', url: 'https://images.unsplash.com/photo-1581094794329-c8112c4e5190?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Biology Lab' },
  
  // Library
  { category: 'library', url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Library Main Hall' },
  { category: 'library', url: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Reading Area' },
  { category: 'library', url: 'https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Digital Library' },
  
  // Sports
  { category: 'sports', url: 'https://images.unsplash.com/photo-1577217534079-41d6bb68ac50?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Basketball Court' },
  { category: 'sports', url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Football Ground' },
  { category: 'sports', url: 'https://images.unsplash.com/photo-1626248801379-51a0748a5f96?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Indoor Sports Complex' },
  
  // Events & Activities
  { category: 'events', url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Annual Day Celebration' },
  { category: 'events', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Science Exhibition' },
  { category: 'events', url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Cultural Program' },
  
  // Staff & Faculty
  { category: 'staff', url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Principal' },
  { category: 'staff', url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Teaching Staff' },
  { category: 'staff', url: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Administrative Staff' },
  
  // Students
  { category: 'students', url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Students in Class' },
  { category: 'students', url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Students in Library' },
  { category: 'students', url: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Students in Lab' }
];

const categories = [
  'All',
  'Campus',
  'Classrooms',
  'Labs',
  'Library',
  'Sports',
  'Events',
  'Staff',
  'Students'
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            Explore our vibrant campus life through our photo gallery
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-secondary hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-center p-4">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-secondary"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;