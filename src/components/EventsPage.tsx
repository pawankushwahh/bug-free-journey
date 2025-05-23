import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { Calendar, Clock, MapPin, Search } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
}

const EventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true });

      if (error) throw error;
      setEvents(data || []);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">School Events</h1>
          <p className="text-lg text-gray-600">
            Stay updated with all our upcoming events and activities
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="text-center text-gray-600">
            No events found.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-500">
                      <Calendar className="w-5 h-5 mr-2 text-primary" />
                      <span>{format(parseISO(event.date), 'MMMM d, yyyy')}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Clock className="w-5 h-5 mr-2 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <MapPin className="w-5 h-5 mr-2 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;