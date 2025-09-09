import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import womenCollection from '../assets/women-collection.jpg';
import menCollection from '../assets/men-collection.jpg';
import accessoriesCollection from '../assets/accessories-collection.jpg';

const FeaturedCollections = () => {
  const navigate = useNavigate();

  const collections = [
    {
      id: 'women',
      title: "Women's Collection",
      subtitle: 'Elegant & Timeless',
      image: womenCollection,
      description: 'Discover our curated selection of sophisticated pieces that embody grace and modern femininity.',
    },
    {
      id: 'men',
      title: "Men's Collection", 
      subtitle: 'Sharp & Contemporary',
      image: menCollection,
      description: 'Explore tailored excellence with our premium menswear designed for the modern gentleman.',
    },
    {
      id: 'accessories',
      title: 'Premium Accessories',
      subtitle: 'Perfect Finishing Touches',
      image: accessoriesCollection,
      description: 'Complete your look with our handpicked accessories that add luxury to every detail.',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title mb-6">Featured Collections</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collections that define contemporary luxury and timeless elegance
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className="product-card group bg-card rounded-none shadow-soft overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="image-hover-scale relative h-80">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-sm font-medium text-luxury mb-1">
                    {collection.subtitle}
                  </p>
                  <h3 className="text-2xl font-serif font-semibold mb-2">
                    {collection.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {collection.description}
                </p>
                
                <button 
                  onClick={() => navigate('/explore')}
                  className="group flex items-center justify-between w-full py-3 px-0 border-b border-border hover:border-primary transition-colors"
                >
                  <span className="font-medium tracking-wide">Explore Collection</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <button 
            onClick={() => navigate('/explore')}
            className="btn-outline-luxury"
          >
            View All Collections
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;