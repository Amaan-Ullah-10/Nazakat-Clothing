import React, { useState } from 'react';
import { Search, Filter, Grid, List, Heart, ShoppingBag, Star } from 'lucide-react';
import Navigation from '../components/Navigation';

const Explore = () => {
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock product data - in a real app this would come from an API
  const products = [
    {
      id: 1,
      name: 'Elegant Silk Dress',
      category: 'women',
      price: '$299',
      originalPrice: '$399',
      image: '/placeholder.svg',
      rating: 4.8,
      reviews: 124,
      isNew: true,
      isSale: true,
    },
    {
      id: 2,
      name: 'Premium Cotton Shirt',
      category: 'men',
      price: '$149',
      originalPrice: null,
      image: '/placeholder.svg',
      rating: 4.9,
      reviews: 89,
      isNew: false,
      isSale: false,
    },
    {
      id: 3,
      name: 'Luxury Leather Handbag',
      category: 'accessories',
      price: '$599',
      originalPrice: '$799',
      image: '/placeholder.svg',
      rating: 4.7,
      reviews: 203,
      isNew: true,
      isSale: true,
    },
    {
      id: 4,
      name: 'Cashmere Blazer',
      category: 'women',
      price: '$449',
      originalPrice: null,
      image: '/placeholder.svg',
      rating: 4.9,
      reviews: 156,
      isNew: false,
      isSale: false,
    },
    {
      id: 5,
      name: 'Tailored Wool Suit',
      category: 'men',
      price: '$899',
      originalPrice: '$1199',
      image: '/placeholder.svg',
      rating: 5.0,
      reviews: 78,
      isNew: true,
      isSale: true,
    },
    {
      id: 6,
      name: 'Designer Sunglasses',
      category: 'accessories',
      price: '$249',
      originalPrice: null,
      image: '/placeholder.svg',
      rating: 4.6,
      reviews: 92,
      isNew: false,
      isSale: false,
    },
  ];

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'women', label: "Women's" },
    { id: 'men', label: "Men's" },
    { id: 'accessories', label: 'Accessories' },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="pt-20 pb-8 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="section-title mb-4">Explore Collection</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our complete range of premium fashion pieces crafted for the discerning individual
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Search and View Controls */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            
            <button className="p-2 border border-border rounded-lg hover:bg-secondary transition-colors">
              <Filter className="w-4 h-4" />
            </button>
            
            <div className="flex border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setViewType('grid')}
                className={`p-2 ${viewType === 'grid' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewType('list')}
                className={`p-2 ${viewType === 'list' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewType === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="product-card group bg-card rounded-lg shadow-soft overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative image-hover-scale">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  {product.isNew && (
                    <span className="px-2 py-1 bg-luxury text-luxury-foreground text-xs font-medium rounded">
                      New
                    </span>
                  )}
                  {product.isSale && (
                    <span className="px-2 py-1 bg-destructive text-destructive-foreground text-xs font-medium rounded">
                      Sale
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-background/90 rounded-full hover:bg-background transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-background/90 rounded-full hover:bg-background transition-colors">
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-luxury text-luxury" />
                    <span className="text-sm font-medium ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-semibold">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <button className="btn-luxury text-sm px-4 py-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn-outline-luxury">
            Load More Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;