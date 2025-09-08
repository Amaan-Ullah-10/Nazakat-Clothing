import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Navigation from '../components/Navigation';

const Policies = () => {
  const [openSections, setOpenSections] = useState({ shipping: true });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }));
  };

  const policies = [
    {
      id: 'shipping',
      title: 'Shipping & Delivery Policy',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Delivery Options</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Standard Shipping (5-7 business days):</strong> Free on orders over $200, $15 otherwise</li>
              <li>• <strong>Express Shipping (2-3 business days):</strong> $25 for all orders</li>
              <li>• <strong>Overnight Shipping (1 business day):</strong> $45 for all orders</li>
              <li>• <strong>International Shipping:</strong> 7-14 business days, rates vary by location</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Processing Time</h3>
            <p className="text-muted-foreground">
              All orders are processed within 1-2 business days. Orders placed on weekends or holidays 
              will be processed on the next business day.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Tracking Information</h3>
            <p className="text-muted-foreground">
              Once your order ships, you'll receive a confirmation email with tracking information. 
              You can also track your order status in your account dashboard.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'returns',
      title: 'Return & Refund Policy',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Return Eligibility</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Items must be returned within 30 days of delivery</li>
              <li>• Items must be in original condition with tags attached</li>
              <li>• Items must be unworn, unwashed, and free from damage</li>
              <li>• Final sale items cannot be returned</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Return Process</h3>
            <ol className="space-y-2 text-muted-foreground">
              <li>1. Contact our customer service team to initiate a return</li>
              <li>2. Print the prepaid return shipping label we provide</li>
              <li>3. Package items securely with original packaging if possible</li>
              <li>4. Drop off at any authorized shipping location</li>
            </ol>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Refunds</h3>
            <p className="text-muted-foreground">
              Refunds are processed within 5-7 business days after we receive your returned items. 
              Refunds will be issued to the original payment method.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Exchanges</h3>
            <p className="text-muted-foreground">
              We offer free exchanges for different sizes or colors within 30 days. 
              Contact us to arrange an exchange, and we'll send you a prepaid shipping label.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'privacy',
      title: 'Privacy Policy',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Information We Collect</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Personal information you provide (name, email, address, phone number)</li>
              <li>• Payment information (processed securely through encrypted channels)</li>
              <li>• Usage data and website analytics</li>
              <li>• Cookies and tracking technologies for improved user experience</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">How We Use Your Information</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Process and fulfill your orders</li>
              <li>• Communicate about your account and orders</li>
              <li>• Send marketing communications (with your consent)</li>
              <li>• Improve our website and services</li>
              <li>• Comply with legal obligations</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Data Protection</h3>
            <p className="text-muted-foreground">
              We implement industry-standard security measures to protect your personal information. 
              Your payment data is encrypted and processed through secure, PCI-compliant systems.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Your Rights</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Access and update your personal information</li>
              <li>• Request deletion of your data</li>
              <li>• Opt-out of marketing communications</li>
              <li>• Data portability and export options</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'terms',
      title: 'Terms & Conditions',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Use of Website</h3>
            <p className="text-muted-foreground">
              By accessing and using our website, you agree to comply with these terms and conditions. 
              You must be at least 18 years old or have parental consent to make purchases.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Product Information</h3>
            <p className="text-muted-foreground">
              We strive to ensure all product information is accurate, but colors may vary slightly 
              due to monitor settings. We reserve the right to correct any errors in pricing or descriptions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Intellectual Property</h3>
            <p className="text-muted-foreground">
              All content on this website, including images, text, and designs, is the property of Nazakat 
              and is protected by copyright and trademark laws.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Limitation of Liability</h3>
            <p className="text-muted-foreground">
              Our liability is limited to the value of the products purchased. We are not liable for 
              indirect, incidental, or consequential damages.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'size-guide',
      title: 'Size Guide',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Women's Clothing</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-2 text-left">Size</th>
                    <th className="border border-border p-2 text-left">Bust (inches)</th>
                    <th className="border border-border p-2 text-left">Waist (inches)</th>
                    <th className="border border-border p-2 text-left">Hips (inches)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr><td className="border border-border p-2">XS</td><td className="border border-border p-2">32-33</td><td className="border border-border p-2">24-25</td><td className="border border-border p-2">34-35</td></tr>
                  <tr><td className="border border-border p-2">S</td><td className="border border-border p-2">34-35</td><td className="border border-border p-2">26-27</td><td className="border border-border p-2">36-37</td></tr>
                  <tr><td className="border border-border p-2">M</td><td className="border border-border p-2">36-37</td><td className="border border-border p-2">28-29</td><td className="border border-border p-2">38-39</td></tr>
                  <tr><td className="border border-border p-2">L</td><td className="border border-border p-2">38-39</td><td className="border border-border p-2">30-31</td><td className="border border-border p-2">40-41</td></tr>
                  <tr><td className="border border-border p-2">XL</td><td className="border border-border p-2">40-42</td><td className="border border-border p-2">32-34</td><td className="border border-border p-2">42-44</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Men's Clothing</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-2 text-left">Size</th>
                    <th className="border border-border p-2 text-left">Chest (inches)</th>
                    <th className="border border-border p-2 text-left">Waist (inches)</th>
                    <th className="border border-border p-2 text-left">Neck (inches)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr><td className="border border-border p-2">S</td><td className="border border-border p-2">36-38</td><td className="border border-border p-2">30-32</td><td className="border border-border p-2">14-14.5</td></tr>
                  <tr><td className="border border-border p-2">M</td><td className="border border-border p-2">38-40</td><td className="border border-border p-2">32-34</td><td className="border border-border p-2">15-15.5</td></tr>
                  <tr><td className="border border-border p-2">L</td><td className="border border-border p-2">40-42</td><td className="border border-border p-2">34-36</td><td className="border border-border p-2">16-16.5</td></tr>
                  <tr><td className="border border-border p-2">XL</td><td className="border border-border p-2">42-44</td><td className="border border-border p-2">36-38</td><td className="border border-border p-2">17-17.5</td></tr>
                  <tr><td className="border border-border p-2">XXL</td><td className="border border-border p-2">44-46</td><td className="border border-border p-2">38-40</td><td className="border border-border p-2">18-18.5</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">How to Measure</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Chest/Bust:</strong> Measure around the fullest part of your chest</li>
              <li>• <strong>Waist:</strong> Measure around your natural waistline</li>
              <li>• <strong>Hips:</strong> Measure around the fullest part of your hips</li>
              <li>• <strong>Neck:</strong> Measure around the base of your neck</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="py-20 lg:py-32 bg-gradient-subtle">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 animate-fade-in">
              Policies & Information
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              Important information about shopping, returns, privacy, and more
            </p>
          </div>
        </section>

        {/* Policies */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {policies.map((policy, index) => (
                <div
                  key={policy.id}
                  className="bg-card rounded-lg shadow-soft overflow-hidden animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <button
                    onClick={() => toggleSection(policy.id)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  >
                    <h2 className="text-xl font-semibold text-foreground">
                      {policy.title}
                    </h2>
                    {openSections[policy.id as keyof typeof openSections] ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </button>
                  
                  {openSections[policy.id as keyof typeof openSections] && (
                    <div className="px-6 pb-6 border-t border-border animate-fade-in">
                      <div className="pt-6">
                        {policy.content}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our customer service team is here to help you with any questions about our policies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-lg font-medium"
              >
                Contact Us
              </a>
              <a
                href="mailto:support@nazakat.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-lg font-medium"
              >
                Email Support
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Policies;