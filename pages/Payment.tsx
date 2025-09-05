
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { PAYMENT_DETAILS } from '../constants';

const Payment: React.FC = () => {
  return (
    <PageWrapper title="Payment Details" subtitle="Complete your purchase by transferring to the account below.">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8 sm:p-12">
            <div className="text-center">
                <svg className="w-20 h-20 mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <h2 className="mt-4 text-3xl font-extrabold text-blue-900">Bank Transfer</h2>
                <p className="mt-2 text-lg text-gray-500">Please use the details below for your payment.</p>
            </div>
            <div className="mt-10 bg-blue-50/70 rounded-lg p-6 space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Bank Name:</span>
                    <span className="text-blue-900 font-bold text-xl">{PAYMENT_DETAILS.bank}</span>
                </div>
                <div className="border-t border-blue-200"></div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Account Name:</span>
                    <span className="text-blue-900 font-bold text-xl">{PAYMENT_DETAILS.accountName}</span>
                </div>
                <div className="border-t border-blue-200"></div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Account Number:</span>
                    <span className="text-blue-900 font-bold text-xl">{PAYMENT_DETAILS.accountNumber}</span>
                </div>
            </div>
            <div className="mt-8 text-center bg-yellow-100 border-l-4 border-yellow-400 text-yellow-700 p-4 rounded-md">
                <p className="font-bold">Important!</p>
                <p>After making the payment, please confirm your order via our contact form or email, including the transaction details.</p>
            </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Payment;
