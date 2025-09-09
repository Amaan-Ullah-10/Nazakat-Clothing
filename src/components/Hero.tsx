import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '../assets/hero-fashion.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Nazakat Fashion Collection"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="brand-title text-white mb-6">
            NAZAKAT
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light tracking-wide max-w-2xl mx-auto">
            Discover the epitome of elegance and sophistication in our curated collection of premium fashion
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-luxury group">
              <span>Explore Collection</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="btn-outline-luxury group bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary">
              <Play className="mr-2 w-5 h-5" />
              <span>Watch Story</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-1 h-16 bg-luxury/30 transform rotate-12 animate-scale-in" />
      <div className="absolute bottom-1/3 right-8 w-1 h-20 bg-luxury/20 transform -rotate-12 animate-scale-in" />
    </section>
  );
};

export default Hero;