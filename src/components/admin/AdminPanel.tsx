import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Upload, X } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';
import { format } from 'date-fns';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
}

const AdminPanel = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: ''
  });
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

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
    }
  };

  const handleAddEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('events')
        .insert([newEvent]);

      if (error) throw error;
      
      setNewEvent({
        title: '',
        description: '',
        date: '',
        time: '',
        location: ''
      });
      fetchEvents();
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  const handleDeleteEvent = async (id: number) => {
    try {
      const { error } = await supabase
        .from('events')
        .delete()
        .eq('id', id);

      if (error) throw error;
      fetchEvents();
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    setSelectedImage(e.target.files[0]);
  };

  const uploadImage = async () => {
    if (!selectedImage) return;
    setUploading(true);
    try {
      const fileExt = selectedImage.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const { error: uploadError } = await supabase.storage
        .from('gallery')
        .upload(fileName, selectedImage);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('gallery')
        .getPublicUrl(fileName);

      await supabase.from('gallery').insert([
        { url: publicUrl, title: selectedImage.name }
      ]);

      setSelectedImage(null);
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Panel</h1>

        {/* Add Event Form */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Add New Event</h2>
          <form onSubmit={handleAddEvent} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Event Title"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <input
                type="text"
                placeholder="Location"
                value={newEvent.location}
                onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <input
                type="date"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <input
                type="time"
                value={newEvent.time}
                onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            <textarea
              placeholder="Event Description"
              value={newEvent.description}
              onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              rows={4}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors flex items-center gap-2"
            >
              <Plus size={20} />
              Add Event
            </button>
          </form>
        </div>

        {/* Upload Image */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Upload Gallery Image</h2>
          <div className="flex items-center gap-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="flex-1"
            />
            <button
              onClick={uploadImage}
              disabled={!selectedImage || uploading}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              <Upload size={20} />
              {uploading ? 'Uploading...' : 'Upload'}
            </button>
          </div>
        </div>

        {/* Events List */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Manage Events</h2>
          <div className="space-y-4">
            {events.map((event) => (
              <div
                key={event.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <h3 className="font-semibold text-gray-900">{event.title}</h3>
                  <p className="text-sm text-gray-600">
                    {format(new Date(event.date), 'MMMM d, yyyy')} at {event.time}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteEvent(event.id)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;