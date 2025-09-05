import React from 'react';
import { MINERALS } from '../constants';

const OrderForm: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Thank you for your interest! Please visit the Products page to place a detailed order.');
    };
    
    return (
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Please, fill delivery form</h3>
            <p className="text-gray-500 mb-6">We'll get in touch with you shortly.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
                <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Address" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
                    <input type="text" placeholder="Bottles" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
                </div>
                <button type="submit" className="w-full bg-blue-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-900 transition-colors duration-300">
                    Make order
                </button>
            </form>
        </div>
    );
};

const MineralComposition: React.FC = () => (
    <section className="py-20 sm:py-28 bg-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-blue-600 font-semibold">What inside</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mt-2">Mineral composition</h2>
            <div className="mt-4 max-w-xs mx-auto">
                <svg viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 0 5 Q 25 10, 50 5 T 100 5" stroke="#00AEEF" strokeWidth="2" fill="none" />
                </svg>
            </div>

            <div className="mt-20 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-12">
                <div className="space-y-12 text-right">
                    {MINERALS.slice(0, 3).map(mineral => (
                        <div key={mineral.name}>
                            <h4 className="text-xl font-bold text-blue-900">{mineral.name}</h4>
                            <p className="text-blue-600 font-medium">{mineral.value}</p>
                            <p className="text-gray-500 mt-1 text-sm">Vestibulum non nisi tincidunt, pulvinar noh sed, accumsan dui. in purus dolor.</p>
                        </div>
                    ))}
                </div>

                <div className="relative order-first lg:order-none">
                    <img src="https://i.imgur.com/gBw1bFz.png" alt="Glass of water" className="mx-auto max-w-xs" />
                </div>
                
                <div className="space-y-12 text-left">
                     {MINERALS.slice(3, 6).map(mineral => (
                        <div key={mineral.name}>
                            <h4 className="text-xl font-bold text-blue-900">{mineral.name}</h4>
                            <p className="text-blue-600 font-medium">{mineral.value}</p>
                            <p className="text-gray-500 mt-1 text-sm">Vestibulum non nisi tincidunt, pulvinar noh sed, accumsan dui. in purus dolor.</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);


const Home: React.FC = () => {
  return (
    <>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-blue-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Natural Water</span>{' '}
                  <span className="block text-blue-600 xl:inline">Delivery Service</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Our delivery service employs more than 100 professional couriers. We will deliver water to your home for 1 hour to anywhere in the city.
                </p>
                <div className="mt-10">
                    <OrderForm />
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                src="https://i.ibb.co/csqyKLm/Snapchat-945344.jpg"
                alt="Aquamartin water bottles"
            />
        </div>
      </div>
      <MineralComposition />
    </>
  );
};

export default Home;