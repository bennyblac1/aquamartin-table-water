
import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { PRODUCTS_LIST } from '../constants';

const Products: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        product: PRODUCTS_LIST[0].name,
        quantity: '1'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Order submitted!\n\nDetails:\n- Name: ${formData.name}\n- Product: ${formData.product}\n- Quantity: ${formData.quantity}\n\nPlease proceed to the Payment page to complete your order.`);
        setFormData({ name: '', phone: '', address: '', product: PRODUCTS_LIST[0].name, quantity: '1' });
    };

  return (
    <PageWrapper title="Our Products & Orders" subtitle="Choose your preferred product and place an order today.">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Products List */}
        <div className="space-y-8">
            {PRODUCTS_LIST.map((product, index) => (
                <div key={product.name} className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-6">
                    <img src={`https://picsum.photos/200/200?random=${20+index}`} alt={product.name} className="w-24 h-24 rounded-lg object-cover" />
                    <div>
                        <h3 className="text-2xl font-bold text-blue-900">{product.name}</h3>
                        <p className="text-gray-600 mt-1">{product.description}</p>
                        <p className="text-blue-700 font-semibold mt-2">{product.price}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* Order Form */}
        <div className="bg-white p-8 rounded-xl shadow-2xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Place Your Order</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Delivery Address</label>
                    <input type="text" name="address" id="address" value={formData.address} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="product" className="block text-sm font-medium text-gray-700">Product Type</label>
                    <select id="product" name="product" value={formData.product} onChange={handleChange} className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                        {PRODUCTS_LIST.map(p => <option key={p.name}>{p.name}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
                    <input type="number" name="quantity" id="quantity" value={formData.quantity} onChange={handleChange} min="1" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                    Confirm Order
                </button>
            </form>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Products;
