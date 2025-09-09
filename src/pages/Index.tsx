import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import FeaturedCollections from '../components/FeaturedCollections';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedCollections />
      
      {/* Brand Story Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="section-title mb-8">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Nazakat represents the finest in contemporary fashion, where traditional elegance meets modern sophistication. 
              Each piece in our collection is carefully selected to embody the perfect balance of style, comfort, and quality 
              that defines the modern wardrobe.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-primary">N</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Premium Quality</h3>
                <p className="text-muted-foreground">Only the finest materials and craftsmanship</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-primary">A</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Timeless Design</h3>
                <p className="text-muted-foreground">Classic pieces that transcend trends</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-primary">Z</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Sustainable Fashion</h3>
                <p className="text-muted-foreground">Ethical practices for a better future</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
            Stay Connected
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to our newsletter for exclusive offers, style tips, and the latest collection updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
            />
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">NAZAKAT</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Discover the epitome of elegance and sophistication. Premium fashion that transcends trends and celebrates individual style.
              </p>
              <div className="flex space-x-4">
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
                <Link to="/policies" className="text-muted-foreground hover:text-primary transition-colors">Policies</Link>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/explore" className="block text-muted-foreground hover:text-primary transition-colors">Shop All</Link>
                <Link to="/explore?category=women" className="block text-muted-foreground hover:text-primary transition-colors">Women's</Link>
                <Link to="/explore?category=men" className="block text-muted-foreground hover:text-primary transition-colors">Men's</Link>
                <Link to="/explore?category=accessories" className="block text-muted-foreground hover:text-primary transition-colors">Accessories</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <div className="space-y-2">
                <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
                <Link to="/policies" className="block text-muted-foreground hover:text-primary transition-colors">Size Guide</Link>
                <Link to="/policies" className="block text-muted-foreground hover:text-primary transition-colors">Shipping & Returns</Link>
                <a href="mailto:hello@nazakat.com" className="block text-muted-foreground hover:text-primary transition-colors">hello@nazakat.com</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Nazakat. All rights reserved. Crafted with passion for timeless elegance.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;