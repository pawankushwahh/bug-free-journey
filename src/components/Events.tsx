import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
}

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            Stay updated with our school events and activities
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : events.length === 0 ? (
          <div className="text-center text-gray-600">
            No upcoming events at the moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
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
    </section>
  );
};

export default Events;