import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}! Your message has been received. We will get back to you shortly.`);
        setFormData({ name: '', email: '', message: '' });
    };

  return (
    <PageWrapper title="Contact Us" subtitle="We're here to help. Send us a message or use the info below.">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email/Phone</label>
                <input type="text" name="email" id="email" value={formData.email} onChange={handleChange} required placeholder="Email or Phone Number" className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required placeholder="Your Message or Payment Confirmation" className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="p-8 sm:p-12 bg-blue-50/70">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Contact Information</h2>
            <div className="space-y-6 text-lg">
                <div className="flex items-start space-x-4">
                    <svg className="h-7 w-7 text-blue-600 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <div>
                        <h3 className="font-semibold text-blue-800">Address</h3>
                        <p className="text-gray-600">Shop 3 Alhaja Abibatu Mogaji Shopping Complex, Iyana-Ipaja, Lagos</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <svg className="h-7 w-7 text-blue-600 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                     <div>
                        <h3 className="font-semibold text-blue-800">Phone</h3>
                        <p className="text-gray-600">091303300383</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <svg className="h-7 w-7 text-blue-600 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                     <div>
                        <h3 className="font-semibold text-blue-800">Email</h3>
                        <p className="text-gray-600">ogunnubicephas@gmail.com</p>
                    </div>
                </div>
            </div>
             <div className="mt-8 h-80 rounded-lg overflow-hidden shadow-md">
                <iframe
                    src="https://maps.google.com/maps?q=Shop%203%20Alhaja%20Abibatu%20Mogaji%20Shopping%20Complex,%20Iyana-Ipaja,%20Lagos&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                ></iframe>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;