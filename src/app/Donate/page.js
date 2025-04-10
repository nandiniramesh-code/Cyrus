"use client";

import React from 'react';

export default function Donate() {
  return (
    <main className="min-h-screen py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-700 mb-8">Support Our Mission</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Your Donation Makes a Difference</h2>
          <p className="mb-6 text-gray-700">
            The Cyrus Foundation relies on the generosity of supporters like you to continue our work in healthcare, 
            education, agriculture, and community development. Your donation directly funds programs that improve lives 
            and create sustainable change in communities around the world.
          </p>
          <p className="text-gray-700">
            Every contribution, regardless of size, helps us extend our reach and deepen our impact. Thank you for 
            considering supporting our mission.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Bank Transfer Details</h2>
          
          <div className="bg-emerald-50 p-8 rounded-lg mb-8">
            <h3 className="text-xl font-medium mb-4 text-emerald-600">Domestic Transfers (USD)</h3>
            
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <p className="font-medium text-gray-600">Account Name:</p>
                <p className="text-gray-700">Cyrus Foundation</p>
              </div>
              
              <div>
                <p className="font-medium text-gray-600">Bank Name:</p>
                <p className="text-gray-700">First National Bank</p>
              </div>
              
              <div>
                <p className="font-medium text-gray-600">Account Number:</p>
                <p className="text-gray-700">8765432109</p>
              </div>
              
              <div>
                <p className="font-medium text-gray-600">Routing Number:</p>
                <p className="text-gray-700">121000358</p>
              </div>
              
              <div>
                <p className="font-medium text-gray-600">Bank Address:</p>
                <p className="text-gray-700">123 Finance Street, New York, NY 10001</p>
              </div>
            </div>
          </div>
          
          <div className="bg-emerald-50 p-8 rounded-lg">
            <h3 className="text-xl font-medium mb-4 text-emerald-600">International Transfers</h3>
            
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <p className="font-medium text-gray-600">Account Name:</p>
                <p className="text-gray-700">Cyrus Foundation International</p>
              </div>
              
              <div>
                <p className="font-medium text-gray-600">Bank Name:</p>
                <p className="text-gray-700">Global Bank</p>
              </div>
              
              <div>
                <p className="font-medium text-gray-600">IBAN:</p>
                <p className="text-gray-700">GB29 NWBK 6016 1331 9268 19</p>
              </div>
              
              <div>
                <p className="font-medium text-gray-600">SWIFT/BIC Code:</p>
                <p className="text-gray-700">GBBANKUS</p>
              </div>
              
              <div>
                <p className="font-medium text-gray-600">Bank Address:</p>
                <p className="text-gray-700">456 International Plaza, London, UK EC2N 2DB</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-amber-800">
              <strong>Important Note:</strong> Please include your name and "Donation" in the reference field of your 
              transfer. For donation receipts or to specify a particular program for your donation, please contact us 
              at donations@cyrusfoundation.org after completing your transfer.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Other Ways to Donate</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2 text-emerald-500">Check Donations</h3>
            <p className="text-gray-700">
              Please make checks payable to "Cyrus Foundation" and mail to:<br />
              Cyrus Foundation<br />
              P.O. Box 12345<br />
              Chicago, IL 60601
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2 text-emerald-500">Recurring Donations</h3>
            <p className="text-gray-700">
              For monthly or quarterly donations, please email us at donations@cyrusfoundation.org to set up a 
              recurring payment plan.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-2 text-emerald-500">Legacy Giving</h3>
            <p className="text-gray-700">
              Consider including the Cyrus Foundation in your estate planning. Contact our development team at 
              legacy@cyrusfoundation.org to discuss options.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Tax Deductibility</h2>
          <p className="text-gray-700">
            The Cyrus Foundation is a registered 501(c)(3) non-profit organization. All donations are tax-deductible 
            to the extent allowed by law. Our Tax ID number is 12-3456789. Donation receipts will be provided for 
            all contributions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Questions?</h2>
          <p className="mb-6 text-gray-700">
            If you have any questions about donating to the Cyrus Foundation or would like to discuss other ways to 
            support our work, please contact our donor relations team:
          </p>
          <div className="bg-emerald-50 p-6 rounded-lg inline-block">
            <p className="mb-2 text-gray-700"><strong>Email:</strong> donations@cyrusfoundation.org</p>
            <p className="text-gray-700"><strong>Phone:</strong> (555) 123-4567</p>
          </div>
        </section>
      </div>
    </main>
  );
}