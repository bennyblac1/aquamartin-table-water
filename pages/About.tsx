
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { TEAM_MEMBERS } from '../constants';

const About: React.FC = () => {
  return (
    <PageWrapper title="About Aquamartin" subtitle="Your trusted source for safe, clean, and refreshing water.">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Our mission is to provide clean, safe, and accessible drinking water to every household and business. We are committed to purity, quality, and exceptional customer service, ensuring that every drop of Aquamartin water contributes to a healthier life.
                    </p>
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Values</h2>
                    <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                        <li><strong>Purity:</strong> Sourced from natural springs and purified through a state-of-the-art process.</li>
                        <li><strong>Quality:</strong> Rigorous testing to ensure every bottle meets the highest standards.</li>
                        <li><strong>Accessibility:</strong> Fast and reliable delivery service across the city.</li>
                        <li><strong>Sustainability:</strong> Committed to eco-friendly practices and recyclable packaging.</li>
                    </ul>
                </div>
                 <div className="w-full h-80 bg-cover bg-center rounded-lg" style={{backgroundImage: 'url(https://picsum.photos/800/600?random=10)'}}>
                </div>
            </div>

             <div className="mt-16">
                <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {TEAM_MEMBERS.map((member, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
                            <div className="w-24 h-24 rounded-full mx-auto bg-gray-200 mb-4" style={{backgroundImage: `url(https://picsum.photos/200/200?random=${11+index})`, backgroundSize: 'cover'}}></div>
                            <h3 className="text-xl font-bold text-blue-800">{member.name}</h3>
                            <p className="text-blue-600">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;
