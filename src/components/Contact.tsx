import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 3000);
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            We'd love to hear from you. Reach out to us for any inquiries or information.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="p-3 bg-primary rounded-full text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Visit Us</h4>
                  <p className="text-gray-600">Kotri Kalan, Rajgarh, Madhya Pradesh</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="p-3 bg-secondary rounded-full text-white">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Call Us</h4>
                  <p className="text-gray-600">+91 XXXXX XXXXX</p>
                  <p className="text-gray-600">+91 XXXXX XXXXX</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="p-3 bg-accent rounded-full text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email Us</h4>
                  <p className="text-gray-600">info@vidyaniketan.edu.in</p>
                  <p className="text-gray-600">admissions@vidyaniketan.edu.in</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="p-3 bg-primary rounded-full text-white">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Office Hours</h4>
                  <p className="text-gray-600">Monday - Saturday: 8:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14682.146627788367!2d76.71666556977537!3d23.089645799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397ce9c8c62c5d91%3A0x7c304fe47092292e!2sKotri%20Kalan%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1710835367411!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Users className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>

              {formStatus === 'success' && (
                <div className="bg-green-50 text-green-800 rounded-lg p-4 text-center">
                  Message sent successfully!
                </div>
              )}

              {formStatus === 'error' && (
                <div className="bg-red-50 text-red-800 rounded-lg p-4 text-center">
                  There was an error sending your message. Please try again.
                </div>
              )}
            </form>

            {/* Quick Contact Options */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold mb-4">Quick Contact Options</h4>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="flex items-center justify-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span>Call Now</span>
                </a>
                <a
                  href="mailto:info@vidyaniketan.edu.in"
                  className="flex items-center justify-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;